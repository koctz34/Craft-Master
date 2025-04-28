    document.addEventListener('DOMContentLoaded', () => {
        let resources = [
            { id: 'wood', name: 'Дерево', icon: '🌳', count: 10 },
            { id: 'stone', name: 'Камень', icon: '🧱', count: 10 },
            { id: 'iron', name: 'Железо', icon: '⚙️', count: 5 },
			{ id: 'coal', name: 'Уголь', icon: '⬛', count: 0 },
			{ id: 'gold', name: 'Золото', icon: '🔶', count: 0 },
            { id: 'diamond', name: 'Алмаз', icon: '💎', count: 0 },
			{ id: 'sand', name: 'Песок', icon: '🟨', count: 0 },
			{ id: 'wool', name: 'Шерсть', icon: '🧶', count: 5 },
            { id: 'leather', name: 'Кожа', icon: '🧴', count: 0 },
            { id: 'string', name: 'Нить', icon: '🧵', count: 0 }, 
            { id: 'oil', name: 'Нефть', icon: '🛢', count: 0 },
			{ id: 'tech', name: 'Технологии', icon: '💾', count: 0 },
            { id: 'plant', name: 'Растение', icon: '🌱', count: 0 },
			{ id: 'animal', name: 'Животное', icon: '🐄', count: 0 }
        ];
        const recipes = [
		    //Инструменты
            { ingredients: [{ id: 'wood', count: 2 }, { id: 'stone', count: 1 }], result: { id: 'axe', name: 'Топор', icon: '🪓', count: 1 }, craftingXp: 5, requiredLevel: 1 },
            { ingredients: [{ id: 'stone', count: 2 }, { id: 'wood', count: 1 }], result: { id: 'pickaxe', name: 'Кирка', icon: '⛏️', count: 1 }, craftingXp: 5, requiredLevel: 1 },
            { ingredients: [{ id: 'iron', count: 1 }, { id: 'wood', count: 2 }], result: { id: 'shovel', name: 'Лопата', icon: '🥄', count: 1 }, craftingXp: 5, requiredLevel: 1 },
			{ ingredients: [{ id: 'plant', count: 2 }, { id: 'meat', count: 2 }], result: { id: 'food_animal', name: 'Корм', icon: '🍖', count: 1 }, craftingXp: 5, requiredLevel: 3 },
			{ ingredients: [{ id: 'wood', count: 1 }, { id: 'steel', count: 1 }], result: { id: 'knife', name: 'Нож', icon: '🔪', count: 1 }, craftingXp: 5, requiredLevel: 3 },
			{ ingredients: [{ id: 'tech', count: 2 }, { id: 'steel', count: 2 }], result: { id: 'scaner', name: 'Сканер', icon: '🏒', count: 1 }, craftingXp: 10, requiredLevel: 4 },
            { ingredients: [{ id: 'string', count: 2 }, { id: 'steel', count: 2 }], result: { id: 'oil_pump', name: 'Нефтяной насос', icon: '🚏', count: 1 }, craftingXp: 10, requiredLevel: 5 },
			
			//Оружие
            { ingredients: [{ id: 'iron', count: 1 }, { id: 'wood', count: 1 }], result: { id: 'sword', name: 'Меч', icon: '🗡️', count: 1 }, craftingXp: 7, requiredLevel: 1 },
            { ingredients: [{ id: 'wood', count: 2 }, { id: 'wool', count: 1 }], result: { id: 'bow', name: 'Лук', icon: '🏹', count: 1 }, craftingXp: 7, requiredLevel: 1 },
            { ingredients: [{ id: 'diamond', count: 1 }, { id: 'iron', count: 1 }, { id: 'wood', count: 1 }], result: { id: 'diamond_sword', name: 'Алмазный меч', icon: '⚔️', count: 1 }, craftingXp: 14, requiredLevel: 3 },
            
			//Защита
			{ ingredients: [{ id: 'iron', count: 1 }, { id: 'stone', count: 1 }], result: { id: 'shield', name: 'Щит', icon: '🛡️', count: 1 }, craftingXp: 5, requiredLevel: 1 },
            { ingredients: [{ id: 'iron', count: 2 }, { id: 'stone', count: 1 }], result: { id: 'helmet', name: 'Шлем', icon: '⛑️', count: 1 }, craftingXp: 7, requiredLevel: 2 },
            { ingredients: [{ id: 'leather', count: 2 }, { id: 'string', count: 1 }], result: { id: 'armor', name: 'Кожаная броня', icon: '🦺', count: 1 }, craftingXp: 10, requiredLevel: 2 },
            { ingredients: [{ id: 'armor', count: 1 }, { id: 'iron', count: 2 }], result: { id: 'chestplate', name: 'Нагрудник', icon: '👕', count: 1 }, craftingXp: 15, requiredLevel: 3 },
			
			//Хранение
            { ingredients: [{ id: 'wool', count: 2 }, { id: 'string', count: 1 }], result: { id: 'backpack', name: 'Рюкзак', icon: '🎒', count: 1 }, craftingXp: 8, requiredLevel: 2 },
			
			//Ресурсы
            { ingredients: [{ id: 'plant', count: 2 }], result: { id: 'water', name: 'Вода', icon: '💧', count: 1 }, craftingXp: 1, requiredLevel: 3 },
            { ingredients: [{ id: 'iron', count: 2 }, { id: 'gold', count: 1 }], result: { id: 'steel', name: 'Золотая сталь', icon: '🔩', count: 1 }, craftingXp: 1, requiredLevel: 3 },
			{ ingredients: [{ id: 'animal', count: 1 }, { id: 'knife', count: 1 }], result: { id: 'meat', name: 'Мясо', icon: '🥩', count: 2 }, craftingXp: 4, requiredLevel: 3 },
			{ ingredients: [{ id: 'animal', count: 1 }, { id: 'plant', count: 1 }], result: { id: 'milk', name: 'Молоко', icon: '🥛', count: 2 }, craftingXp: 2, requiredLevel: 3 },
            { ingredients: [{ id: 'sand', count: 3 }, { id: 'coal', count: 1 }], result: { id: 'glass', name: 'Стекло', icon: '🧊', count: 2 }, craftingXp: 4, requiredLevel: 5 },
			
			//Кулинария
			{ ingredients: [{ id: 'meat', count: 2 }, { id: 'coal', count: 1 }], result: { id: 'cook_meat', name: 'Жаренное мясо', icon: '🥓', count: 2 }, craftingXp: 7, requiredLevel: 3 },
			{ ingredients: [{ id: 'plant', count: 2 }], result: { id: 'flour', name: 'Мука', icon: '🍚', count: 3 }, craftingXp: 6, requiredLevel: 3 },
			{ ingredients: [{ id: 'flour', count: 2 }, { id: 'milk', count: 1 }, { id: 'water', count: 1 }], result: { id: 'dough', name: 'Тесто', icon: '🍿', count: 1 }, craftingXp: 8, requiredLevel: 3 },
			{ ingredients: [{ id: 'dough', count: 1 }, { id: 'coal', count: 1 }], result: { id: 'bread', name: 'Хлеб', icon: '🍞', count: 1 }, craftingXp: 10, requiredLevel: 3 },
            { ingredients: [{ id: 'dough', count: 1 }, { id: 'coal', count: 1 }, { id: 'meat', count: 1 }], result: { id: 'dumpling', name: 'Пельмень', icon: '🥟', count: 4 }, craftingXp: 13, requiredLevel: 3 },
            { ingredients: [{ id: 'milk', count: 2 }], result: { id: 'cheese', name: 'Сыр', icon: '🧀', count: 1 }, craftingXp: 6, requiredLevel: 3 },
            { ingredients: [{ id: 'bread', count: 1 }, { id: 'cook_meat', count: 1 }, { id: 'plant', count: 1 }, { id: 'cheese', count: 1 }], result: { id: 'burger', name: 'Бургер', icon: '🍔', count: 1 }, craftingXp: 25, requiredLevel: 3 },
            { ingredients: [{ id: 'dough', count: 1 }, { id: 'cook_meat', count: 1 }, { id: 'plant', count: 1 }, { id: 'cheese', count: 2 }], result: { id: 'pizza', name: 'Пицца', icon: '🍕', count: 1 }, craftingXp: 35, requiredLevel: 3 },
            { ingredients: [{ id: 'water', count: 2 }, { id: 'cook_meat', count: 1 }, { id: 'plant', count: 2 }], result: { id: 'soup', name: 'Суп', icon: '🥣', count: 1 }, craftingXp: 21, requiredLevel: 3 },
        ]; 
        let inventory = [];
        let craftingGrid = [null, null, null, null, null];
        let miningAreas = [
            { id: 'forest', name: 'Лес', icon: '🌲', description: 'Добывайте дерево и шерсть. Уровень 1', level: 1, cooldown: 0, progress: 0, levelR: 1, cost: [{ id: 'axe', count: 1 }, { id: 'wood', count: 5 }], yields: [{ id: 'wood', chance: 80, min: 1, max: 3 }, { id: 'wool', chance: 20, min: 1, max: 1 }] },
            { id: 'mountain', name: 'Горы', icon: '⛰️', description: 'Добывайте камень и железо. Уровень 1', level: 1, cooldown: 0, progress: 0, levelR: 1, cost: [{ id: 'pickaxe', count: 1 }, { id: 'stone', count: 5 }], yields: [{ id: 'stone', chance: 75, min: 1, max: 3 }, { id: 'iron', chance: 25, min: 1, max: 1 }] },
            { id: 'cave', name: 'Пещера', icon: '🕳️', description: 'Добывайте уголь, золото и алмазы. Уровень 1', level: 1, cooldown: 0, progress: 0, levelR: 1, cost: [{ id: 'pickaxe', count: 1 }, { id: 'iron', count: 5 }], yields: [{ id: 'coal', chance: 70, min: 1, max: 2 }, { id: 'gold', chance: 20, min: 1, max: 1 }, { id: 'diamond', chance: 10, min: 1, max: 1 }] },
            { id: 'plains', name: 'Равнины', icon: '🌄', description: 'Добывайте шерсть, кожу и нитки. Уровень 1', level: 1, cooldown: 0, progress: 0, levelR: 1, cost: [{ id: 'shovel', count: 1 }, { id: 'wool', count: 5 }], yields: [{ id: 'wool', chance: 60, min: 1, max: 2 }, { id: 'leather', chance: 30, min: 1, max: 2 }, { id: 'string', chance: 10, min: 1, max: 3 }] },
			{ id: 'natural', name: 'Природа', icon: '⛺', description: 'Добывайте растения, животных и кожу. Уровень 3', level: 1, cooldown: 0, progress: 0, levelR: 3, cost: [{ id: 'food_animal', count: 5 }], yields: [{ id: 'plant', chance: 60, min: 1, max: 3 }, { id: 'animal', chance: 30, min: 1, max: 2 }, { id: 'leather', chance: 20, min: 1, max: 2 }] },
			{ id: 'city', name: 'Древний город', icon: '🌇', description: 'Добывайте камень, технологии и растения. Уровень 4', level: 1, cooldown: 0, progress: 0, levelR: 4, cost: [{ id: 'scaner', count: 1 }, { id: 'stone', count: 7 }], yields: [{ id: 'stone', chance: 60, min: 1, max: 3 }, { id: 'tech', chance: 40, min: 1, max: 2 }, { id: 'plant', chance: 10, min: 1, max: 2 }] },
			{ id: 'desert', name: 'Пустыня', icon: '🏜', description: 'Добывайте нефть и песок. Уровень 5', level: 1, cooldown: 0, progress: 0, levelR: 5, cost: [{ id: 'oil_pump', count: 1 }, { id: 'sand', count: 5 }], yields: [{ id: 'sand', chance: 60, min: 1, max: 3 }, { id: 'oil', chance: 30, min: 1, max: 2 }] },
		];
        let player = { level: 1, xp: 0, maxXp: 100, bonuses: { miningSpeed: 0, resourceYield: 0, craftingEfficiency: 0, xpGain: 0 } };
        let achievements = [
		    //Ресурсы
            { id: 'wood_gatherer', name: 'Собиратель дерева', icon: '🌳', description: 'Соберите 50 дерева', requirement: { resource: 'wood', count: 50 }, progress: 0, unlocked: false },
            { id: 'stone_miner', name: 'Добытчик камня', icon: '🧱', description: 'Соберите 50 камня', requirement: { resource: 'stone', count: 50 }, progress: 0, unlocked: false },
            { id: 'iron_prospector', name: 'Искатель железа', icon: '⚙️', description: 'Соберите 30 железа', requirement: { resource: 'iron', count: 30 }, progress: 0, unlocked: false },
            { id: 'gold_digger', name: 'Золотой копатель', icon: '🔶', description: 'Соберите 20 золота', requirement: { resource: 'gold', count: 20 }, progress: 0, unlocked: false },
            { id: 'diamond_hunter', name: 'Охотник за алмазами', icon: '💎', description: 'Соберите 10 алмазов', requirement: { resource: 'diamond', count: 10 }, progress: 0, unlocked: false },
			
			//Инструменты
            { id: 'axe_crafter', name: 'Мастер топоров', icon: '🪓', description: 'Создайте 5 топоров', requirement: { item: 'axe', count: 5 }, progress: 0, unlocked: false },
            { id: 'pickaxe_crafter', name: 'Кирочный мастер', icon: '⛏️', description: 'Создайте 5 кирок', requirement: { item: 'pickaxe', count: 5 }, progress: 0, unlocked: false },
            { id: 'sword_crafter', name: 'Кузнец мечей', icon: '🗡️', description: 'Создайте 3 меча', requirement: { item: 'sword', count: 3 }, progress: 0, unlocked: false },
            { id: 'diamond_sword_crafter', name: 'Алмазный кузнец', icon: '⚔️', description: 'Создайте 1 алмазный меч', requirement: { item: 'diamond_sword', count: 1 }, progress: 0, unlocked: false },
            { id: 'armor_crafter', name: 'Бронник', icon: '🦺', description: 'Создайте 3 кожаных брони', requirement: { item: 'armor', count: 3 }, progress: 0, unlocked: false },
			
			//Улучшения
            { id: 'forest_upgrader', name: 'Лесной магнат', icon: '🌲', description: 'Улучшите лес до 3 уровня', requirement: { area: 'forest', level: 3 }, progress: 0, unlocked: false },
            { id: 'mountain_upgrader', name: 'Горный барон', icon: '⛰️', description: 'Улучшите горы до 3 уровня', requirement: { area: 'mountain', level: 3 }, progress: 0, unlocked: false },
            { id: 'cave_upgrader', name: 'Пещерный лорд', icon: '🕳️', description: 'Улучшите пещеру до 3 уровня', requirement: { area: 'cave', level: 3 }, progress: 0, unlocked: false },
            { id: 'plains_upgrader', name: 'Равнинный владыка', icon: '🌄', description: 'Улучшите равнины до 3 уровня', requirement: { area: 'plains', level: 3 }, progress: 0, unlocked: false },
			
			//Крафт
            { id: 'novice_crafter', name: 'Новичок-крафтер', icon: '🔨', description: 'Создайте 10 любых предметов', requirement: { craftCount: 10 }, progress: 0, unlocked: false },
            { id: 'expert_crafter', name: 'Эксперт-крафтер', icon: '🔧', description: 'Создайте 50 любых предметов', requirement: { craftCount: 50 }, progress: 0, unlocked: false },
            { id: 'level_5', name: 'Поднимающийся мастер', icon: '🌟', description: 'Достигните 5 уровня', requirement: { level: 5 }, progress: 0, unlocked: false },
            { id: 'level_10', name: 'Великий мастер', icon: '🏅', description: 'Достигните 10 уровня', requirement: { level: 10 }, progress: 0, unlocked: false },
            { id: 'resource_collector', name: 'Собиратель ресурсов', icon: '🎒', description: 'Соберите 100 любых ресурсов', requirement: { totalResources: 100 }, progress: 0, unlocked: false },
            { id: 'master_of_all', name: 'Мастер всего', icon: '👑', description: 'Разблокируйте 15 достижений', requirement: { achievementsUnlocked: 15 }, progress: 0, unlocked: false }
        ];
        let settings = { achievementsModalOpen: false };
        const itemProperties = { 
            axe: { type: 'mainHand', bonuses: { miningSpeed: 10 }, description: 'Увеличивает скорость добычи на 10%' }, 
            pickaxe: { type: 'mainHand', bonuses: { miningSpeed: 15 }, description: 'Увеличивает скорость добычи на 15%' }, 
            shovel: { type: 'mainHand', bonuses: { miningSpeed: 20 }, description: 'Увеличивает скорость добычи на 20%' } 
        };

        function escapeHTML(str) {
            const entities = { '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;' };
            return String(str).replace(/[&<>"']/g, m => entities[m] || m);
        }
        function statusMessage(msg) { document.getElementById('status-message').textContent = msg; }
        function clearStatus() { statusMessage(''); }
        function renderPlayerStats() { 
            document.getElementById('player-level').textContent = player.level; 
            document.getElementById('xp-bar').style.width = (player.xp / player.maxXp * 100) + '%'; 
            document.getElementById('player-bonuses').innerHTML = Object.entries(player.bonuses).filter(([k,v])=>v>0).map(([k,v])=>`<div>${k}: +${v}%</div>`).join(''); 
            checkAchievements();
        }
        function renderResources() { 
            const c = document.getElementById('resources'); 
            c.innerHTML = ''; 
            resources.forEach(r => { 
                const e = document.createElement('div'); 
                e.className = 'resource-item'; 
                e.dataset.id = r.id; 
                e.innerHTML = `<div class="icon">${r.icon}</div><div class="item-name">${escapeHTML(r.name)}</div><div class="item-count">${r.count}</div>`; 
                e.onclick = () => selectResource(r); 
                c.appendChild(e); 
            }); 
            checkAchievements();
        }
        function renderInventory() { 
            const c = document.getElementById('inventory'); 
            c.innerHTML = ''; 
            inventory.forEach((it,i) => { 
                const e = document.createElement('div'); 
                e.className = 'inventory-item'; 
                e.dataset.index = i; 
                e.innerHTML = `<div class="icon">${it.icon || ''}</div><div class="item-name">${escapeHTML(it.name)}</div><div class="item-count">${it.count}</div>`; 
                e.onclick = () => selectInventoryItem(i); 
                c.appendChild(e); 
            }); 
            checkAchievements();
        }
        function renderCraftingGrid() { 
            document.querySelectorAll('.crafting-slot').forEach((slot,i) => { 
                slot.innerHTML = ''; 
                const it = craftingGrid[i]; 
                if(it) slot.innerHTML = `<div class="icon">${it.icon}</div><div class="item-name">${escapeHTML(it.name)}</div><div class="item-count">${it.count}</div>`; 
            }); 
        }
        function renderAchievements() {
            const c = document.getElementById('achievements');
            c.innerHTML = '';
            achievements.forEach(a => {
                const e = document.createElement('div');
                e.className = `achievement-item ${a.unlocked ? 'unlocked' : 'locked'}`;
                e.dataset.id = a.id;
                const progress = a.unlocked ? a.requirement.count || a.requirement.level || a.requirement.craftCount || a.requirement.totalResources || a.requirement.achievementsUnlocked : a.progress;
                const max = a.requirement.count || a.requirement.level || a.requirement.craftCount || a.requirement.totalResources || a.requirement.achievementsUnlocked;
                e.innerHTML = `<div class="achievement-icon">${a.icon}</div><div class="achievement-name">${escapeHTML(a.name)}</div><div class="achievement-progress">${progress}/${max}</div>`;
                c.appendChild(e);
            });
        }
        function checkAchievements() {
            let totalResources = resources.reduce((sum, r) => sum + r.count, 0);
            let totalCrafted = inventory.reduce((sum, i) => sum + i.count, 0);
            let achievementsUnlocked = achievements.filter(a => a.unlocked).length;

            achievements.forEach(a => {
                if (a.unlocked) return;
                let progress = 0;
                if (a.requirement.resource) {
                    const res = resources.find(r => r.id === a.requirement.resource);
                    progress = res ? res.count : 0;
                } else if (a.requirement.item) {
                    const item = inventory.find(i => i.id === a.requirement.item);
                    progress = item ? item.count : 0;
                } else if (a.requirement.area) {
                    const area = miningAreas.find(m => m.id === a.requirement.area);
                    progress = area ? area.level : 0;
                } else if (a.requirement.level) {
                    progress = player.level;
                } else if (a.requirement.craftCount) {
                    progress = totalCrafted;
                } else if (a.requirement.totalResources) {
                    progress = totalResources;
                } else if (a.requirement.achievementsUnlocked) {
                    progress = achievementsUnlocked;
                }

                a.progress = progress;
                if (progress >= (a.requirement.count || a.requirement.level || a.requirement.craftCount || a.requirement.totalResources || a.requirement.achievementsUnlocked)) {
                    a.unlocked = true;
                    notify(`Достижение разблокировано: ${a.name}!`, 'achievement');
                }
            });
            renderAchievements();
        }
        function addPlayerXp(amount) {
            player.xp += amount;
            while (player.xp >= player.maxXp) {
                player.xp -= player.maxXp;
                player.level++;
                player.maxXp = Math.floor(player.maxXp * 1.5);
                renderPlayerStats();
            }
            renderPlayerStats();
        }
        document.querySelectorAll('.crafting-slot').forEach((slot, idx) => {
            slot.addEventListener('click', () => {
                const item = craftingGrid[idx];
                if (!item) return;

                const resIndex = resources.findIndex(r => r.id === item.id);
                if (resIndex !== -1) {
                    resources[resIndex].count += item.count;
                    renderResources();
                } else {
                    const invIndex = inventory.findIndex(i => i.id === item.id);
                    if (invIndex !== -1) {
                        inventory[invIndex].count += item.count;
                    } else {
                        inventory.push({ ...item });
                    }
                    renderInventory();
                }

                craftingGrid[idx] = null;
                renderCraftingGrid();
            });
        });
        function renderMiningAreas() { 
            const c = document.getElementById('mining-areas'); 
            c.innerHTML = ''; 
            miningAreas.forEach(a => { 
                const e = document.createElement('div'); 
                e.className = 'mining-area'; 
                let costTxt = a.cost.map(x=>`${x.count} ${x.id}`).join(', '); 
                e.innerHTML = `<div class="tooltip-mining">Цена: ${costTxt}</div><div class="level-badge">${a.level}</div><div class="mining-icon">${a.icon}</div><div class="mining-name">${escapeHTML(a.name)}</div><div class="mining-description">${escapeHTML(a.description)}</div><div class="mining-progress"><div class="mining-progress-bar" style="width:${a.progress}%"></div></div><div class="cooldown-text">${a.cooldown>0?'CD: '+a.cooldown+'s':''}</div><button class="upgrade-btn" data-id="${a.id}">Улучшить</button>`; 
                e.onclick = () => mineResource(a); 
                c.appendChild(e); 
            }); 
            document.querySelectorAll('.upgrade-btn').forEach(b => b.onclick = ev => { ev.stopPropagation(); upgradeArea(b.dataset.id); }); 
            checkAchievements();
        }
        function selectResource(r) { 
            if(r.count<=0){notify('Нет ресурса', 'error', { duration: 3000 });return;} 
            const idx = craftingGrid.indexOf(null); 
            if(idx<0){notify('Нет слотов', 'error', { duration: 3000 });return;} 
            craftingGrid[idx] = {...r, count:1}; 
            r.count--; 
            renderResources(); 
            renderCraftingGrid(); 
            clearStatus(); 
        }
        function selectInventoryItem(i) { 
            const it = inventory[i]; 
            if(it.count<=0)return; 
            const idx = craftingGrid.indexOf(null); 
            if(idx<0){notify('Нет слотов', 'error', { duration: 3000 });return;} 
            craftingGrid[idx] = {...it, count:1}; 
            it.count--; 
            if(it.count===0) inventory.splice(i,1); 
            renderInventory(); 
            renderCraftingGrid(); 
            clearStatus(); 
        }
        document.getElementById('craft-button').onclick = () => {
            const ingr = craftingGrid.filter(x => x);
            if (!ingr.length) {
                statusMessage('Пусто');
                return;
            }

            let result = null;
            let requiredLevel = 0;
            let craftingXp = 10;

            for (const rec of recipes) {
                const isMatching = rec.ingredients.length === new Set(ingr.map(i => i.id)).size
                    && rec.ingredients.every(ing => ingr.filter(i => i.id === ing.id).length === ing.count);
                if (isMatching) {
                    result = { ...rec.result };
                    requiredLevel = rec.requiredLevel || 0;
                    craftingXp = rec.craftingXp || 10;
                    break;
                }
            }

            if (!result) {
                notify('Неверный рецепт', 'error', { duration: 3000 });
                return;
            }

            if (player.level < requiredLevel) {
                notify(`Требуется уровень ${requiredLevel} для крафта!`, 'error', { duration: 3000 });
                return;
            }

            const ex = inventory.find(x => x.id === result.id);
            ex ? ex.count += result.count : inventory.push(result);

            craftingGrid = [null, null, null, null, null];
            renderInventory();
            renderCraftingGrid();
            addPlayerXp(craftingXp);
            notify(`Создано: ${result.name}, +${craftingXp} XP`, 'success');
            checkAchievements();
        };
        document.getElementById('clear-button').onclick = () => { 
            craftingGrid.forEach(it => { 
                if(!it) return; 
                const res = resources.find(x=>x.id===it.id); 
                if(res) res.count += it.count; 
                else inventory.push({...it}); 
            }); 
            craftingGrid = [null,null,null,null,null]; 
            renderResources(); 
            renderInventory(); 
            renderCraftingGrid(); 
            clearStatus(); 
        };
        function mineResource(a) {
            if (player.level < a.levelR) {
                notify(`Требуется уровень ${a.levelR} для добычи!`, 'error', { duration: 3000 });
                return;
            }

            if (a.cooldown > 0) {
                notify('Подождите', 'loading');
                return;
            }

            a.progress += 20;
            if (a.progress < 100) {
                renderMiningAreas();
                return;
            }

            a.progress = 0;
            const baseCooldown = 10;
            const reduction = a.level * 0.5;
            const effectiveCooldown = Math.max(1, baseCooldown - reduction);
            a.cooldown = Math.floor(effectiveCooldown); 
            const timer = setInterval(() => { 
                if(a.cooldown>0){ 
                    a.cooldown--; 
                    renderMiningAreas(); 
                } else { 
                    clearInterval(timer); 
                    renderMiningAreas(); 
                } 
            },1000); 
            a.yields.forEach(y => { 
                if(Math.random()*100 < y.chance){ 
                    const amount = Math.floor(Math.random()*(y.max-y.min+1)) + y.min; 
                    const res = resources.find(x=>x.id===y.id); 
                    res.count += amount; 
                    notify(`+${amount} ${res.name}`, 'important'); 
                } 
            }); 
            renderResources(); 
            renderMiningAreas(); 
        }
        function upgradeArea(id) {
            const area = miningAreas.find(a => a.id === id);
            let canUpgrade = true;

            area.cost.forEach(costItem => {
                const inRes = resources.find(r => r.id === costItem.id);
                if (inRes) {
                    if (inRes.count < costItem.count) canUpgrade = false;
                } else {
                    const inInv = inventory.find(i => i.id === costItem.id);
                    if (!inInv || inInv.count < costItem.count) canUpgrade = false;
                }
            });

            if (!canUpgrade) {
                notify('Недостаточно для прокачки', 'error', { duration: 3000 });
                return;
            }

            area.cost.forEach(costItem => {
                const inRes = resources.find(r => r.id === costItem.id);
                if (inRes) {
                    inRes.count -= costItem.count;
                    renderResources();
                } else {
                    const inInv = inventory.find(i => i.id === costItem.id);
                    inInv.count -= costItem.count;
                    if (inInv.count <= 0) inventory = inventory.filter(i => i.id !== costItem.id);
                    renderInventory();
                }
            });

            area.level++;
            renderMiningAreas();
            notify(`${area.name} улучшен до уровня ${area.level}`, 'success');
            checkAchievements();
        }
        function encryptData(data) {
            try {
                const jsonString = JSON.stringify(data);
                const encodedString = encodeURIComponent(jsonString).replace(/%([0-9A-F]{2})/g, (match, p1) => {
                    return String.fromCharCode(parseInt(p1, 16));
                });
                return btoa(encodedString);
            } catch (e) {
                notify('Ошибка шифрования данных', 'error', { duration: 3000 });
                console.error(e);
                return null;
            }
        }
        function decryptData(encrypted) {
            try {
                const decodedString = atob(encrypted);
                const uriEncodedString = decodedString.split('').map(char => {
                    return '%' + char.charCodeAt(0).toString(16).padStart(2, '0');
                }).join('');
                const jsonString = decodeURIComponent(uriEncodedString);
                return JSON.parse(jsonString);
            } catch (e) {
                notify('Ошибка расшифровки данных', 'error', { duration: 3000 });
                console.error(e);
                return null;
            }
        }
        function exportGame() {
            const gameState = {
                player,
                resources,
                inventory,
                miningAreas,
                achievements,
                settings
            };
            const encrypted = encryptData(gameState);
            if (!encrypted) return;

            const blob = new Blob([encrypted], { type: 'text/plain' });
            const fileName = `save_${new Date().toISOString().replace(/[:.]/g, '-')}.cfmdat`;

            if (navigator.canShare && navigator.canShare({ files: [new File([blob], fileName, { type: 'text/plain' })] })) {
                const file = new File([blob], fileName, { type: 'text/plain' });
                navigator.share({
                    files: [file],
                    title: 'Крафт-мастер сохранение',
                    text: 'Ваш файл сохранения игры'
                }).catch((err) => console.error('Ошибка при отправке файла', err));
            } else {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }

            notify('Сохранение экспортировано как .cfmdat', 'success');
        }
        function importGame() {
            const input = document.getElementById('import-file');
            input.value = '';
            input.click();
        }
        document.getElementById('import-file').addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (!file) {
                notify('Файл не выбран', 'error', { duration: 3000 });
                return;
            }
            if (!file.name.endsWith('.cfmdat')) {
                notify('Неверный тип файла', 'error', { duration: 3000 });
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                notify('Файл слишком большой', 'error', { duration: 3000 });
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const encrypted = e.target.result;
                    const gameState = decryptData(encrypted);
                    if (gameState && gameState.player && gameState.resources && gameState.inventory && gameState.miningAreas && gameState.achievements) {
                        player = gameState.player;
                        resources = gameState.resources;
                        inventory = gameState.inventory;
                        miningAreas = gameState.miningAreas;
                        achievements = gameState.achievements;
                        settings = gameState.settings || { achievementsModalOpen: false };
                        renderPlayerStats();
                        renderResources();
                        renderInventory();
                        renderMiningAreas();
                        renderAchievements();
                        toggleAchievementsModal(settings.achievementsModalOpen);
                        notify('Сохранение успешно импортировано', 'success');
                    } else {
                        notify('Неверный формат сохранения', 'error', { duration: 3000 });
                    }
                } catch (error) {
                    console.error(error);
                    notify('Ошибка при загрузке файла', 'error', { duration: 3000 });
                }
            };
            reader.onerror = () => {
                notify('Ошибка чтения файла', 'error', { duration: 3000 });
            };
            reader.readAsText(file);
        });
        function toggleTheme() {
            const isDark = document.body.classList.toggle('dark-theme');
            localStorage.setItem('craftMasterTheme', isDark ? 'dark' : 'light');
        }
        function loadTheme() {
            const theme = localStorage.getItem('craftMasterTheme');
            if (theme === 'dark') {
                document.body.classList.add('dark-theme');
                document.getElementById('theme-toggle').checked = true;
            }
        }
        function toggleSettingsPanel() {
            const panel = document.getElementById('settings-panel');
            panel.classList.toggle('open');
        }
        function toggleAchievementsModal(state = null) {
            const modal = document.getElementById('achievements-modal');
            settings.achievementsModalOpen = state !== null ? state : !settings.achievementsModalOpen;
            if (settings.achievementsModalOpen) {
                modal.classList.add('open');
            } else {
                modal.classList.remove('open');
            }
            localStorage.setItem('craftMasterAchievementsModal', settings.achievementsModalOpen ? 'open' : 'closed');
        }
        function loadAchievementsModalState() {
            const state = localStorage.getItem('craftMasterAchievementsModal');
            if (state === 'open') {
                settings.achievementsModalOpen = true;
                toggleAchievementsModal(true);
            }
        }
        document.getElementById('settings-button').onclick = toggleSettingsPanel;
        document.getElementById('close-settings').onclick = toggleSettingsPanel;
        document.getElementById('theme-toggle').addEventListener('change', toggleTheme);
        document.getElementById('export-button').onclick = exportGame;
        document.getElementById('import-button').onclick = importGame;
        document.getElementById('achievements-button').onclick = () => toggleAchievementsModal();
        document.getElementById('achievements-modal-close').onclick = () => toggleAchievementsModal(false);


        loadTheme();
        loadAchievementsModalState();
        renderPlayerStats();
        renderResources();
        renderInventory();
        renderCraftingGrid();
        renderMiningAreas();
        renderAchievements();
        const ENCRYPTED_PASSWORD = 'ZGVsdGEyMDI1';

function cheat(password) {
    // Проверка наличия пароля
    if (!password) {
        notify('Требуется пароль!', 'error', { duration: 3000 });
        return;
    }

    try {
        // Расшифровка пароля
        const decodedPassword = atob(ENCRYPTED_PASSWORD);
        if (password !== decodedPassword) {
            notify('Неверный пароль!', 'error', { duration: 3000 });
            return;
        }

        // Установка максимального количества ресурсов
        resources.forEach(resource => {
            resource.count = 9999;
        });

        // Установка максимального уровня игрока
        player.level = 100;
        player.xp = 0;
        player.maxXp = 1000000;

        // Улучшение всех зон добычи до уровня 10
        miningAreas.forEach(area => {
            area.level = 10;
            area.levelR = 1; // Минимальный уровень для доступа
        });

        // Добавление всех предметов из рецептов в инвентарь
        recipes.forEach(recipe => {
            const existing = inventory.find(i => i.id === recipe.result.id);
            if (existing) {
                existing.count = 9999;
            } else {
                inventory.push({ ...recipe.result, count: 9999 });
            }
        });

        // Разблокировка всех достижений
        achievements.forEach(achievement => {
            // Обновление прогресса для достижений
            if (achievement.requirement.resource) {
                const res = resources.find(r => r.id === achievement.requirement.resource);
                if (res) {
                    res.count = Math.max(res.count, achievement.requirement.count);
                }
            } else if (achievement.requirement.item) {
                const existingItem = inventory.find(i => i.id === achievement.requirement.item);
                const recipe = recipes.find(r => r.result.id === achievement.requirement.item);
                if (existingItem) {
                    existingItem.count = Math.max(existingItem.count, achievement.requirement.count);
                } else if (recipe) {
                    inventory.push({
                        id: recipe.result.id,
                        name: recipe.result.name,
                        icon: recipe.result.icon,
                        count: achievement.requirement.count
                    });
                } else {
                    inventory.push({
                        id: achievement.requirement.item,
                        name: achievement.requirement.item,
                        icon: achievement.icon,
                        count: achievement.requirement.count
                    });
                }
            } else if (achievement.requirement.area) {
                const area = miningAreas.find(m => m.id === achievement.requirement.area);
                if (area) {
                    area.level = Math.max(area.level, achievement.requirement.level);
                }
            } else if (achievement.requirement.level) {
                player.level = Math.max(player.level, achievement.requirement.level);
            } else if (achievement.requirement.craftCount) {
                const totalCrafted = inventory.reduce((sum, i) => sum + i.count, 0);
                if (totalCrafted < achievement.requirement.craftCount) {
                    inventory.push({
                        id: 'crafted_item',
                        name: 'Крафтовый предмет',
                        icon: '🔨',
                        count: achievement.requirement.craftCount - totalCrafted
                    });
                }
            } else if (achievement.requirement.totalResources) {
                const totalResources = resources.reduce((sum, r) => sum + r.count, 0);
                if (totalResources < achievement.requirement.totalResources) {
                    resources[0].count += achievement.requirement.totalResources - totalResources;
                }
            } else if (achievement.requirement.achievementsUnlocked) {
                achievement.progress = achievements.length;
            }

            // Установка прогресса и разблокировка
            achievement.progress = achievement.requirement.count || 
                                 achievement.requirement.level || 
                                 achievement.requirement.craftCount || 
                                 achievement.requirement.totalResources || 
                                 achievement.requirement.achievementsUnlocked || 0;
            achievement.unlocked = true;
        });

        // Обновление прогресса для достижения с количеством разблокированных достижений
        achievements.forEach(a => {
            if (a.requirement.achievementsUnlocked) {
                a.progress = achievements.filter(ach => ach.unlocked).length;
                a.unlocked = a.progress >= a.requirement.achievementsUnlocked;
            }
        });

        // Обновление интерфейса
        renderResources();
        renderInventory();
        renderMiningAreas();
        renderPlayerStats();
        renderAchievements();
        checkAchievements();

        notify('Все ресурсы, предметы, уровень и достижения установлены на максимум!', 'success', { duration: 10000 });
    } catch (e) {
        notify('Ошибка при выполнении команды!', 'error', { duration: 3000 });
        console.error(e);
    }
}

// Делаем функцию cheat доступной глобально
window.cheat = cheat;
    })
