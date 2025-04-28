    let initialized = false;
    let container;
    const activeNotifications = new Set();

    const icons = {
        success: '✅', 
        error: '❌', 
        info: 'ℹ️', 
        warn: '⚠️',
        loading: '⏳', 
        important: '❗', 
        neutral: '🔔', 
        achievement: '🏆',
        answer: '✍️',
        link: '🌐',
        update: '🛠️',
        message: '💬',
        warning: '🚨',
        promo: '🎁'
    };

    const lightColors = {
        success: ['#e6ffed', '#22543d'],
        error: ['#ffe6e6', '#742a2a'],
        info: ['#ebf8ff', '#2b6cb0'],
        warn: ['#fffaf0', '#975a16'],
        loading: ['#f0f0f0', '#555'],
        important: ['#fff5f5', '#c53030'],
        neutral: ['#f7fafc', '#2d3748'],
        achievement: ['#fffbe6', '#8d6e00'],
        answer: ['#eef6ff', '#1a202c'],
        link: ['#e0f7fa', '#006064'],
        update: ['#f0fff4', '#276749'],
        message: ['#edf2f7', '#2c5282'],
        warning: ['#fff5f5', '#c53030'],
        promo: ['#fff0f5', '#b83280']
    };

    const darkColors = {
        success: ['#22543d', '#e6ffed'],
        error: ['#742a2a', '#ffe6e6'],
        info: ['#2b6cb0', '#ebf8ff'],
        warn: ['#975a16', '#fffaf0'],
        loading: ['#555', '#f0f0f0'],
        important: ['#c53030', '#fff5f5'],
        neutral: ['#2d3748', '#f7fafc'],
        achievement: ['#8d6e00', '#fffbe6'],
        answer: ['#1a202c', '#eef6ff'],
        link: ['#006064', '#e0f7fa'],
        update: ['#276749', '#f0fff4'],
        message: ['#2c5282', '#edf2f7'],
        warning: ['#c53030', '#fff5f5'],
        promo: ['#b83280', '#fff0f5']
    };

    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            #notifications-container {
                position: fixed;
                bottom: 20px;
                right: 20px;
                display: flex;
                flex-direction: column;
                gap: 12px;
                z-index: 9999;
                max-width: 90%;
                pointer-events: none;
            }
            .notification {
                display: flex;
                align-items: center;
                gap: 12px;
                background: var(--notif-bg, #fff);
                color: var(--notif-color, #333);
                padding: 14px 20px;
                border-radius: 12px;
                box-shadow: 0 6px 18px rgba(0,0,0,0.15);
                font-family: system-ui, sans-serif;
                font-size: 15px;
                min-width: 280px;
                max-width: 360px;
                overflow: hidden;
                position: relative;
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.4s ease, transform 0.4s ease;
                pointer-events: all;
                cursor: default;
            }
            .notification.show {
                opacity: 1;
                transform: translateY(0);
            }
            .notification.hide {
                opacity: 0;
                transform: translateY(20px);
            }
            .notification:hover {
                transform: scale(1.03);
            }
            .notification-icon {
                font-size: 20px;
                flex-shrink: 0;
            }
            .notification-progress {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 4px;
                background: rgba(0,0,0,0.2);
                animation: progressBar linear forwards;
            }
            @keyframes progressBar {
                from { width: 100%; }
                to { width: 0%; }
            }
            .notification-input {
                margin-top: 8px;
                width: 100%;
                padding: 8px;
                border-radius: 6px;
                border: 1px solid #ccc;
                font-size: 14px;
            }
            .notification-button {
                margin-top: 8px;
                background: #3182ce;
                color: #fff;
                padding: 8px 12px;
                border: none;
                border-radius: 6px;
                font-size: 14px;
                cursor: pointer;
            }
            .notification-button:hover {
                background: #2b6cb0;
            }
        `;
        document.head.appendChild(style);
    }

    function initialize() {
        if (initialized) return;
        initialized = true;
        container = Object.assign(document.createElement('div'), { id: 'notifications-container' });
        document.body.appendChild(container);
        injectStyles();
        observeThemeChanges();
    }

    function getCurrentTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function createNotification(message, type = 'info', options = {}) {
        const notif = document.createElement('div');
        notif.className = 'notification';
        notif.dataset.type = type;
        notif.dataset.manualTheme = options.theme || '';

        const icon = Object.assign(document.createElement('div'), {
            className: 'notification-icon',
            textContent: icons[type] || icons.neutral
        });

        const text = Object.assign(document.createElement('div'), { textContent: message });

        notif.append(icon, text);

        if (type === 'answer') {
            const input = Object.assign(document.createElement('input'), {
                className: 'notification-input',
                placeholder: options.placeholder || 'Введите ответ...'
            });
            const button = Object.assign(document.createElement('button'), {
                className: 'notification-button',
                textContent: options.buttonText || 'Ответить'
            });
            button.addEventListener('click', () => {
                if (typeof options.onAnswer === 'function') {
                    options.onAnswer(input.value);
                }
                dismissNotification(notif);
            });
            notif.append(input, button);
        } else if (options.link) {
            notif.style.cursor = 'pointer';
            notif.addEventListener('click', () => window.open(options.link, '_blank'));
        } else {
            notif.addEventListener('click', () => dismissNotification(notif));
        }

        if (type !== 'answer') {
            const progress = document.createElement('div');
            progress.className = 'notification-progress';
            progress.style.animationDuration = `${options.duration || 5000}ms`;
            notif.appendChild(progress);

            const autoDismiss = setTimeout(() => dismissNotification(notif), options.duration || 5000);
            notif.dismiss = () => {
                clearTimeout(autoDismiss);
                dismissNotification(notif);
            };
        }

        container.appendChild(notif);
        activeNotifications.add(notif);
        updateNotificationTheme(notif);

        requestAnimationFrame(() => notif.classList.add('show'));
    }

    function dismissNotification(notif) {
        notif.classList.remove('show');
        notif.classList.add('hide');
        setTimeout(() => {
            notif.remove();
            activeNotifications.delete(notif);
        }, 300);
    }

    function updateNotificationTheme(notif) {
        const theme = notif.dataset.manualTheme || getCurrentTheme();
        const type = notif.dataset.type || 'neutral';
        const colorSet = theme === 'dark' ? darkColors : lightColors;
        const [bg, color] = colorSet[type] || colorSet.neutral;

        notif.style.setProperty('--notif-bg', bg);
        notif.style.setProperty('--notif-color', color);
    }

    function observeThemeChanges() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', () => {
            activeNotifications.forEach(updateNotificationTheme);
        });
    }

    window.notify = (message, type = 'info', options = {}) => {
        initialize();
        createNotification(message, type, options);
    };
