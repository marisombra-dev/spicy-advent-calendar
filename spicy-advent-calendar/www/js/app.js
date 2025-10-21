// App state management
let openedDoors = JSON.parse(localStorage.getItem('adventDoors') || '{}');
let storedDice = JSON.parse(localStorage.getItem('adventDice') || '{}');
let userMode = localStorage.getItem('adventMode');
let contentData = {};

// Mode selection
function selectMode(mode) {
    userMode = mode;
    localStorage.setItem('adventMode', mode);
    contentData = mode === 'single' ? singleContent : partnerContent;
    
    document.getElementById('setupScreen').classList.add('hidden');
    document.getElementById('calendarView').classList.remove('hidden');
    createCalendar();
}

// Get current day (December 1-24)
function getCurrentDay() {
    const now = new Date();
    const december = now.getMonth() === 11 ? now.getFullYear() : now.getFullYear() - 1;
    const adventStart = new Date(december, 11, 1);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    if (today >= adventStart && today <= new Date(december, 11, 24)) {
        return today.getDate();
    }
    return -1; // Not in December 1-24
}

// Create the calendar grid
function createCalendar() {
    const calendar = document.getElementById('calendar');
    const currentDay = getCurrentDay();
    
    calendar.innerHTML = ''; // Clear existing content
    
    for (let i = 1; i <= 24; i++) {
        const door = document.createElement('div');
        door.className = 'door';
        door.textContent = i;
        
        // Add content type icon if door is opened
        if (openedDoors[i] && contentData[i]) {
            const iconSpan = document.createElement('span');
            iconSpan.className = 'door-icon';
            const type = contentData[i].type;
            if (type === 'assignment') iconSpan.textContent = '📝';
            else if (type === 'story') iconSpan.textContent = '📖';
            else if (type === 'suggestion') iconSpan.textContent = '💕';
            else if (type === 'dice') iconSpan.textContent = '🎲';
            door.appendChild(iconSpan);
        }
        
        // Lock future doors
        if (currentDay === -1 || i > currentDay) {
            door.classList.add('locked');
        } else {
            if (openedDoors[i]) {
                door.classList.add('opened');
            }
            door.onclick = () => openDoor(i);
        }
        
        calendar.appendChild(door);
    }
}

// Open a door and show modal
function openDoor(day) {
    openedDoors[day] = true;
    localStorage.setItem('adventDoors', JSON.stringify(openedDoors));
    
    const modal = document.getElementById('modal');
    const header = document.getElementById('modalHeader');
    const body = document.getElementById('modalBody');
    
    header.textContent = `Day ${day}`;
    
    const data = contentData[day];
    
    if (data.type === 'dice') {
        // Dice roll day
        const currentDay = day;
        let diceHTML = `
            <p style="text-align: center; font-size: 1.2em; margin-bottom: 20px;">Tonight, let the dice decide your adventure!</p>
            <button class="roll-btn" onclick="rollDice(${currentDay})">🎲 Roll the Dice</button>
            <div class="dice-container" id="diceResult">`;
        
        // Show stored dice result if it exists
        if (storedDice[currentDay]) {
            diceHTML += `
                <div class="die">${storedDice[currentDay].activity}</div>
                <div class="die">${storedDice[currentDay].location}</div>`;
        }
        
        diceHTML += `</div>`;
        body.innerHTML = diceHTML;
    } else {
        // Regular content with heat level selection
        body.innerHTML = `
            <p style="text-align: center; font-size: 1.2em; margin-bottom: 30px;">Choose your heat level:</p>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px;">
                <button class="heat-btn" onclick="showContent(${day}, 'mild')" title="Sweet and tender">🔥🔥</button>
                <button class="heat-btn" onclick="showContent(${day}, 'medium')" title="More intimate, a little bolder">🔥🔥🔥</button>
                <button class="heat-btn" onclick="showContent(${day}, 'hot')" title="Unleashed, raw, no apologies">🔥🔥🔥🔥</button>
                <button class="heat-btn" onclick="showContent(${day}, 'surprise')" title="Surprise Me">🎲</button>
            </div>
            <div id="contentDisplay"></div>
        `;
    }
    
    modal.classList.add('active');
    
    // Update door appearance
    const doors = document.querySelectorAll('.door');
    doors[day - 1].classList.add('opened');
}

// Show content based on heat level selection
function showContent(day, level) {
    const data = contentData[day];
    const contentDisplay = document.getElementById('contentDisplay');
    
    let typeLabel = '';
    switch(data.type) {
        case 'assignment': typeLabel = '📝 Assignment'; break;
        case 'story': typeLabel = '📖 Story Prompt'; break;
        case 'suggestion': typeLabel = '💕 Romantic Suggestion'; break;
    }
    
    let content = '';
    let actualLevel = level;
    
    // Handle surprise selection
    if (level === 'surprise') {
        const levels = ['mild', 'medium', 'hot'];
        actualLevel = levels[Math.floor(Math.random() * levels.length)];
    }
    
    // Get content for selected level
    if (actualLevel === 'mild') content = data.mild;
    else if (actualLevel === 'medium') content = data.medium;
    else content = data.hot;
    
    contentDisplay.innerHTML = `
        <div class="content-type">${typeLabel}</div>
        <p>${content}</p>
    `;
}

// Roll the dice for activity and location
function rollDice(day) {
    const result = document.getElementById('diceResult');
    const activity = activities[Math.floor(Math.random() * activities.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    
    // Store the dice result for this day
    storedDice[day] = { activity, location };
    localStorage.setItem('adventDice', JSON.stringify(storedDice));
    
    result.innerHTML = `
        <div class="die">${activity}</div>
        <div class="die">${location}</div>
    `;
}

// Reset calendar (clear all progress)
function resetCalendar() {
    if (confirm('Are you sure you want to reset the calendar? This will clear all progress.')) {
        localStorage.removeItem('adventDoors');
        localStorage.removeItem('adventMode');
        localStorage.removeItem('adventDice');
        location.reload();
    }
}

// Close the modal
function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

// Initialize app on page load
window.addEventListener('DOMContentLoaded', function() {
    if (userMode) {
        contentData = userMode === 'single' ? singleContent : partnerContent;
        document.getElementById('setupScreen').classList.add('hidden');
        document.getElementById('calendarView').classList.remove('hidden');
        createCalendar();
    }
});
