(() => {
    const container = document.createElement('div');
    container.id = 'notifications-container';
    document.body.appendChild(container);

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
        background: #fff;
        color: #333;
        padding: 14px 20px;
        border-radius: 12px;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
        font-family: system-ui, sans-serif;
        font-size: 15px;
        min-width: 280px;
        max-width: 360px;
        overflow: hidden;
        position: relative;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.4s ease;
        pointer-events: all;
        cursor: default;
    }
    .notification.show {
        opacity: 1;
        transform: translateY(0);
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
        background: rgba(0, 0, 0, 0.2);
        animation: progressBar linear forwards;
    }
    @keyframes progressBar {
        from { width: 100%; }
        to { width: 0%; }
    }
    `;
    document.head.appendChild(style);

    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️',
        warn: '⚠️',
        loading: '⏳',
        important: '❗',
        neutral: '🔔',
        achievement: '🏆'
    };

    const defaultColors = {
        success: { bg: '#e6ffed', color: '#22543d' },
        error: { bg: '#ffe6e6', color: '#742a2a' },
        info: { bg: '#ebf8ff', color: '#2b6cb0' },
        warn: { bg: '#fffaf0', color: '#975a16' },
        loading: { bg: '#f0f0f0', color: '#555' },
        important: { bg: '#fff5f5', color: '#c53030' },
        neutral: { bg: '#f7fafc', color: '#2d3748' },
        achievement: { bg: '#fffbe6', color: '#8d6e00' }
    };

    window.notify = function (message, type = 'info', options = {}) {
        const notif = document.createElement('div');
        notif.className = 'notification';
        
        const icon = document.createElement('div');
        icon.className = 'notification-icon';
        icon.textContent = icons[type] || '🔔';
        notif.appendChild(icon);

        const text = document.createElement('div');
        text.textContent = message;
        notif.appendChild(text);

        const colors = defaultColors[type] || defaultColors['neutral'];
        notif.style.background = options.background || colors.bg;
        notif.style.color = options.color || colors.color;

        if (options.link) {
            notif.style.cursor = 'pointer';
            notif.addEventListener('click', () => {
                window.open(options.link, '_blank');
            });
        } else {
            notif.addEventListener('click', () => {
                closeNotification();
            });
        }

        const duration = options.duration || 5000;

        const progress = document.createElement('div');
        progress.className = 'notification-progress';
        progress.style.animationDuration = duration + 'ms';
        notif.appendChild(progress);

        container.appendChild(notif);

        setTimeout(() => notif.classList.add('show'), 10);

        const timer = setTimeout(() => {
            closeNotification();
        }, duration);

        function closeNotification() {
            notif.classList.remove('show');
            notif.style.opacity = '0';
            notif.style.transform = 'translateY(20px)';
            setTimeout(() => notif.remove(), 300);
            clearTimeout(timer);
        }
    }
})();
