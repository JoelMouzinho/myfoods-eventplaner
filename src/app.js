"use strict";
// ============================================
// TYPE DEFINITIONS
// ============================================
// ============================================
// INITIALIZATION & UTILITY FUNCTIONS
// ============================================
/**
 * Initialize all event listeners based on current page
 */
function initializeEventListeners() {
    // Check which page we're on and initialize accordingly
    const currentPage = window.location.pathname;
    if (currentPage.includes('unterhaltung')) {
        initUnterhaltung();
    }
    else if (currentPage.includes('mobilliar')) {
        initMobilliar();
    }
    else if (currentPage.includes('menue')) {
        initMenue();
    }
    else if (currentPage.includes('energieversorgung')) {
        initEnergie();
    }
    else if (currentPage.includes('termin')) {
        initTermin();
    }
    else if (currentPage.includes('uebersicht')) {
        displayOverview();
    }
}
/**
 * Save array data to localStorage
 */
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Saved to localStorage: ${key}`, value);
    }
    catch (error) {
        console.error(`Error saving to localStorage: ${key}`, error);
    }
}
/**
 * Load array data from localStorage
 */
function loadFromLocalStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    }
    catch (error) {
        console.error(`Error loading from localStorage: ${key}`, error);
        return [];
    }
}
/**
 * Save simple string data to localStorage
 */
function saveSingleValue(key, value) {
    try {
        localStorage.setItem(key, value);
        console.log(`Saved to localStorage: ${key} = ${value}`);
    }
    catch (error) {
        console.error(`Error saving to localStorage: ${key}`, error);
    }
}
/**
 * Load simple string data from localStorage
 */
function loadSingleValue(key) {
    try {
        return localStorage.getItem(key) || '';
    }
    catch (error) {
        console.error(`Error loading from localStorage: ${key}`, error);
        return '';
    }
}
// ============================================
// UNTERHALTUNG PAGE
// ============================================
function initUnterhaltung() {
    console.log('Initializing Unterhaltung page...');
    // Load existing selections
    const savedUnterhaltung = loadFromLocalStorage('unterhaltung');
    console.log('Loaded from localStorage:', savedUnterhaltung);
    // Get all entertainment checkboxes
    const checkboxes = document.querySelectorAll('input[name="entertainment"]');
    // Pre-check saved items
    checkboxes.forEach((checkbox) => {
        if (savedUnterhaltung.includes(checkbox.value)) {
            checkbox.checked = true;
        }
        // Add change listener
        checkbox.addEventListener('change', function () {
            updateUnterhaltung();
        });
    });
    // Initial display
    displayUnterhaltungLabels(savedUnterhaltung);
}
function updateUnterhaltung() {
    const checkboxes = document.querySelectorAll('input[name="entertainment"]:checked');
    const selected = Array.from(checkboxes).map((cb) => cb.value);
    saveToLocalStorage('unterhaltung', selected);
    displayUnterhaltungLabels(selected);
}
function displayUnterhaltungLabels(items) {
    // This is optional - shows which items are selected
    const labels = {
        'sound': '🎵 Sound / Musik',
        'tv': '📺 TV / Filme',
        'karaoke': '🎤 Karaoke',
        'band': '🎸 Live Band',
        'spiele': '🎮 Spiele / Quiz',
        'comedy': '🎭 Comedy / Show'
    };
    console.log('Displaying Unterhaltung:', items);
}
// ============================================
// MOBILLIAR PAGE
// ============================================
function initMobilliar() {
    console.log('Initializing Mobilliar page...');
    // Load existing selections
    const savedMobilliar = loadFromLocalStorage('mobilliar');
    console.log('Loaded from localStorage:', savedMobilliar);
    // Get all furniture checkboxes
    const checkboxes = document.querySelectorAll('input[name="mobilliar"]');
    // Pre-check saved items
    checkboxes.forEach((checkbox) => {
        if (savedMobilliar.includes(checkbox.value)) {
            checkbox.checked = true;
        }
        // Add change listener
        checkbox.addEventListener('change', function () {
            updateMobilliar();
        });
    });
    displayMobilliarLabels(savedMobilliar);
}
function updateMobilliar() {
    const checkboxes = document.querySelectorAll('input[name="mobilliar"]:checked');
    const selected = Array.from(checkboxes).map((cb) => cb.value);
    saveToLocalStorage('mobilliar', selected);
    displayMobilliarLabels(selected);
}
function displayMobilliarLabels(items) {
    const labels = {
        'stuehle': '🪑 Stühle',
        'tische': '📋 Tische',
        'grill': '🔥 Grill',
        'bar': '🍹 Bar'
    };
    console.log('Displaying Mobilliar:', items);
}
// ============================================
// MENÜ PAGE
// ============================================
function initMenue() {
    console.log('Initializing Menü page...');
    // Load existing menu selection
    const savedMenue = loadSingleValue('menue');
    console.log('Loaded from localStorage:', savedMenue);
    // Get the input field
    const menuInput = document.querySelector('.menu-input');
    if (menuInput) {
        // Set existing value
        if (savedMenue) {
            menuInput.value = savedMenue;
        }
        // Add change listener
        menuInput.addEventListener('change', function () {
            updateMenue();
        });
        menuInput.addEventListener('input', function () {
            updateMenue();
        });
    }
}
function updateMenue() {
    const menuInput = document.querySelector('.menu-input');
    if (menuInput && menuInput.value.trim()) {
        saveSingleValue('menue', menuInput.value);
        console.log('Menu saved:', menuInput.value);
    }
}
// ============================================
// ENERGIEVERSORGUNG PAGE
// ============================================
function initEnergie() {
    console.log('Initializing Energieversorgung page...');
    // Load existing selections
    const savedEnergie = loadFromLocalStorage('energie');
    console.log('Loaded from localStorage:', savedEnergie);
    // Get all energy checkboxes
    const checkboxes = document.querySelectorAll('input[name="energie"]');
    // Pre-check saved items
    checkboxes.forEach((checkbox) => {
        if (savedEnergie.includes(checkbox.value)) {
            checkbox.checked = true;
        }
        // Add change listener
        checkbox.addEventListener('change', function () {
            updateEnergie();
        });
    });
    displayEnergieLabels(savedEnergie);
}
function updateEnergie() {
    const checkboxes = document.querySelectorAll('input[name="energie"]:checked');
    const selected = Array.from(checkboxes).map((cb) => cb.value);
    saveToLocalStorage('energie', selected);
    displayEnergieLabels(selected);
}
function displayEnergieLabels(items) {
    const labels = {
        'stromanschluss': '⚡ Stromanschluss',
        'generator': '⚙️ Generator',
        'verlaengerung': '🔌 Verlängerungskabel',
        'beleuchtung': '💡 Beleuchtung',
        'notstrom': '🆘 Notstrom',
        'technik': '🎚️ Technik-Anschlüsse'
    };
    console.log('Displaying Energie:', items);
}
// ============================================
// TERMIN PAGE
// ============================================
function initTermin() {
    console.log('Initializing Termin page...');
    // Load existing values
    const savedDate = loadSingleValue('date');
    const savedTime = loadSingleValue('time');
    const savedEndTime = loadSingleValue('endTime');
    const savedNotes = loadSingleValue('notes');
    console.log('Loaded from localStorage:', { savedDate, savedTime, savedEndTime, savedNotes });
    // Get input fields
    const dateInput = document.querySelector('.date-input');
    const timeInput = document.querySelector('.time-input');
    const endTimeInputs = document.querySelectorAll('.time-input');
    const endTimeInput = endTimeInputs.length > 1 ? endTimeInputs[1] : null;
    const noteInput = document.querySelector('.note-input');
    // Set existing values
    if (dateInput && savedDate)
        dateInput.value = savedDate;
    if (timeInput && savedTime)
        timeInput.value = savedTime;
    if (endTimeInput && savedEndTime)
        endTimeInput.value = savedEndTime;
    if (noteInput && savedNotes)
        noteInput.value = savedNotes;
    // Add listeners
    if (dateInput) {
        dateInput.addEventListener('change', updateTermin);
    }
    if (timeInput) {
        timeInput.addEventListener('change', updateTermin);
    }
    if (endTimeInput) {
        endTimeInput.addEventListener('change', updateTermin);
    }
    if (noteInput) {
        noteInput.addEventListener('change', updateTermin);
    }
}
function updateTermin() {
    const dateInput = document.querySelector('.date-input');
    const timeInputs = document.querySelectorAll('.time-input');
    const noteInput = document.querySelector('.note-input');
    if (dateInput) {
        saveSingleValue('date', dateInput.value);
    }
    if (timeInputs[0]) {
        saveSingleValue('time', timeInputs[0].value);
    }
    if (timeInputs[1]) {
        saveSingleValue('endTime', timeInputs[1].value);
    }
    if (noteInput) {
        saveSingleValue('notes', noteInput.value);
    }
    console.log('Termin updated');
}
// ============================================
// OVERVIEW PAGE
// ============================================
function displayOverview() {
    console.log('Loading overview...');
    // Load all data from localStorage
    const unterhaltung = loadFromLocalStorage('unterhaltung');
    const mobilliar = loadFromLocalStorage('mobilliar');
    const energie = loadFromLocalStorage('energie');
    const menue = loadSingleValue('menue');
    const date = loadSingleValue('date');
    const time = loadSingleValue('time');
    const endTime = loadSingleValue('endTime');
    const notes = loadSingleValue('notes');
    // Labels for display
    const unterhaltungLabels = {
        'sound': '🎵 Sound / Musik',
        'tv': '📺 TV / Filme',
        'karaoke': '🎤 Karaoke',
        'band': '🎸 Live Band',
        'spiele': '🎮 Spiele / Quiz',
        'comedy': '🎭 Comedy / Show'
    };
    const mobilliarLabels = {
        'stuehle': '🪑 Stühle',
        'tische': '📋 Tische',
        'grill': '🔥 Grill',
        'bar': '🍹 Bar'
    };
    const energieLabels = {
        'stromanschluss': '⚡ Stromanschluss',
        'generator': '⚙️ Generator',
        'verlaengerung': '🔌 Verlängerungskabel',
        'beleuchtung': '💡 Beleuchtung',
        'notstrom': '🆘 Notstrom',
        'technik': '🎚️ Technik-Anschlüsse'
    };
    // Display Unterhaltung
    const unterhaltungList = document.getElementById('overview-unterhaltung');
    if (unterhaltungList) {
        unterhaltungList.innerHTML = '';
        if (unterhaltung.length > 0) {
            unterhaltung.forEach((item) => {
                const li = document.createElement('li');
                li.textContent = unterhaltungLabels[item] || item;
                unterhaltungList.appendChild(li);
            });
        }
        else {
            unterhaltungList.innerHTML = '<li style="color: #999;">Keine Auswahl getroffen</li>';
        }
    }
    // Display Mobilliar
    const mobilliarList = document.getElementById('overview-mobilliar');
    if (mobilliarList) {
        mobilliarList.innerHTML = '';
        if (mobilliar.length > 0) {
            mobilliar.forEach((item) => {
                const li = document.createElement('li');
                li.textContent = mobilliarLabels[item] || item;
                mobilliarList.appendChild(li);
            });
        }
        else {
            mobilliarList.innerHTML = '<li style="color: #999;">Keine Auswahl getroffen</li>';
        }
    }
    // Display Energie
    const energieList = document.getElementById('overview-energie');
    if (energieList) {
        energieList.innerHTML = '';
        if (energie.length > 0) {
            energie.forEach((item) => {
                const li = document.createElement('li');
                li.textContent = energieLabels[item] || item;
                energieList.appendChild(li);
            });
        }
        else {
            energieList.innerHTML = '<li style="color: #999;">Keine Auswahl getroffen</li>';
        }
    }
    // Display Menü
    const menuText = document.getElementById('overview-menue');
    if (menuText) {
        menuText.textContent = menue ? '📄 Menü Nummer: ' + menue : '❌ Kein Menü gewählt';
    }
    // Display Termin
    const terminText = document.getElementById('overview-termin');
    if (terminText) {
        let terminDisplay = '';
        if (date && time) {
            terminDisplay = `📅 ${date} um ${time}`;
            if (endTime) {
                terminDisplay += ` - ${endTime}`;
            }
        }
        else {
            terminDisplay = '❌ Kein Termin festgelegt';
        }
        if (notes) {
            terminDisplay += `\n📝 Notizen: ${notes}`;
        }
        terminText.innerHTML = terminDisplay.replace(/\n/g, '<br>');
    }
    console.log('Overview displayed with data:', {
        unterhaltung,
        mobilliar,
        energie,
        menue,
        date,
        time,
        endTime,
        notes
    });
}
// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing...');
    initializeEventListeners();
});
// Also run on page load in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEventListeners);
}
else {
    initializeEventListeners();
}
