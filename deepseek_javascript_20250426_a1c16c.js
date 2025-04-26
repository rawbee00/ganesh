document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const navLinks = {
        home: document.querySelector('.nav-home'),
        menu: document.querySelector('.nav-menu'),
        reservation: document.querySelector('.nav-reservation'),
        takeout: document.querySelector('.nav-takeout'),
        about: document.querySelector('.nav-about')
    };

    const sections = {
        home: document.getElementById('home-section'),
        menu: document.getElementById('menu-section'),
        reservation: document.getElementById('reservation-section'),
        takeout: document.getElementById('takeout-section'),
        about: document.getElementById('about-section')
    };

    // Set up navigation
    for (const [key, link] of Object.entries(navLinks)) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide all sections
            for (const section of Object.values(sections)) {
                section.classList.remove('active-section');
            }
            
            // Show the selected section
            sections[key].classList.add('active-section');
        });
    }

    // Menu tabs
    const menuTabs = document.querySelectorAll('.menu-tab');
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            menuTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all menu contents
            document.querySelectorAll('.menu-content').forEach(content => {
                content.style.display = 'none';
            });
            
            // Show selected menu content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).style.display = 'block';
        });
    });

    // Reservation tabs
    const reservationTabs = document.querySelectorAll('.reservation-tab');
    reservationTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            reservationTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all reservation contents
            document.querySelectorAll('.reservation-content').forEach(content => {
                content.style.display = 'none';
            });
            
            // Show selected reservation content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).style.display = 'block';
        });
    });

    // Quick menu buttons
    document.querySelector('.show-nepali-menu')?.addEventListener('click', function() {
        // Show menu section
        for (const section of Object.values(sections)) {
            section.classList.remove('active-section');
        }
        sections.menu.classList.add('active-section');
        
        // Activate Nepali menu tab
        document.querySelector('.menu-tab[data-tab="nepali-menu"]').click();
    });

    document.querySelector('.show-indian-menu')?.addEventListener('click', function() {
        // Show menu section
        for (const section of Object.values(sections)) {
            section.classList.remove('active-section');
        }
        sections.menu.classList.add('active-section');
        
        // Activate Indian menu tab
        document.querySelector('.menu-tab[data-tab="indian-menu"]').click();
    });

    // Nepali reservation validation
    document.getElementById('nepali-reservation-form')?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const dateInput = document.getElementById('nepali-date');
        const timeInput = document.getElementById('nepali-time');
        
        if (!dateInput.value || !timeInput.value) {
            alert('Please select both date and time');
            return;
        }
        
        const reservationDateTime = new Date(`${dateInput.value}T${timeInput.value}`);
        const now = new Date();
        const sixHoursInMs = 6 * 60 * 60 * 1000;
        
        if (reservationDateTime - now < sixHoursInMs) {
            alert('Nepali cuisine reservations require at least 6 hours notice.');
            return;
        }
        
        alert('Reservation submitted successfully!');
        this.reset();
    });

    // Initialize first tab as active
    if (document.querySelector('.menu-tab.active')) {
        document.querySelector('.menu-tab.active').click();
    }
    
    if (document.querySelector('.reservation-tab.active')) {
        document.querySelector('.reservation-tab.active').click();
    }
});