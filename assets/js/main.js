/**
 * Lingua Academy - Main Interactive JavaScript Engine
 * Handles Theme Switching, RTL Layouts, LocalStorage Persistence,
 * Toast Notifications, Modal Binding, and Form Validations.
 */

window.LinguaApp = {
    // 1. INITIALIZATION
    init: function() {
        this.initTheme();
        this.initRTL();
        this.initStickyHeader();
        this.initNavbarHover();
        this.initCounters();
        this.bindModals();
        this.bindFormHandlers();
        this.updateAuthNavUI();
    },

    // 1.5 NAVBAR HOVER CONTROLLER
    initNavbarHover: function() {
        const dropdowns = document.querySelectorAll('.navbar-menu .home-dropdown, .navbar-menu .nav-item.dropdown');
        dropdowns.forEach(item => {
            const menu = item.querySelector('.home-hover-menu, .dropdown-menu');
            if (!menu) return;

            let hideTimer;
            item.addEventListener('mouseenter', () => {
                clearTimeout(hideTimer);
                menu.classList.add('show-hover');
            });
            item.addEventListener('mouseleave', () => {
                hideTimer = setTimeout(() => {
                    menu.classList.remove('show-hover');
                }, 120);
            });
        });
    },

    // 2. THEME CONTROLLER
    initTheme: function() {
        const savedTheme = localStorage.getItem('lingua_theme') || 'light';
        this.setTheme(savedTheme);

        const themeToggles = document.querySelectorAll('.theme-toggle-btn');
        themeToggles.forEach(btn => {
            btn.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                this.setTheme(newTheme);
            });
        });
    },

    setTheme: function(theme) {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('lingua_theme', theme);
        
        // Update icons
        const icons = document.querySelectorAll('.theme-toggle-btn i');
        icons.forEach(icon => {
            if (theme === 'dark') {
                icon.className = 'bi bi-sun-fill text-warning';
            } else {
                icon.className = 'bi bi-moon-stars-fill';
            }
        });
    },

    // 3. RTL LAYOUT CONTROLLER
    initRTL: function() {
        const savedRTL = localStorage.getItem('lingua_rtl') === 'true';
        this.setRTL(savedRTL);

        const rtlToggles = document.querySelectorAll('.rtl-toggle-btn');
        rtlToggles.forEach(btn => {
            btn.addEventListener('click', () => {
                const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
                this.setRTL(!isRTL);
            });
        });
    },

    setRTL: function(isRTL) {
        if (isRTL) {
            document.documentElement.setAttribute('dir', 'rtl');
            localStorage.setItem('lingua_rtl', 'true');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            localStorage.setItem('lingua_rtl', 'false');
        }

        const rtlToggles = document.querySelectorAll('.rtl-toggle-btn');
        rtlToggles.forEach(btn => {
            if (isRTL) {
                btn.classList.add('is-active');
                btn.setAttribute('title', 'Switch to LTR Layout');
            } else {
                btn.classList.remove('is-active');
                btn.setAttribute('title', 'Switch to RTL Layout');
            }
        });
    },

    // 4. STICKY HEADER
    initStickyHeader: function() {
        const navbar = document.querySelector('.navbar-main');
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    },

    // 5. ANIMATED COUNTERS
    initCounters: function() {
        const counters = document.querySelectorAll('.counter-value');
        if (!counters.length) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target') || '0', 10);
                    let count = 0;
                    const speed = Math.ceil(target / 40);

                    const timer = setInterval(() => {
                        count += speed;
                        if (count >= target) {
                            entry.target.innerText = target.toLocaleString() + '+';
                            clearInterval(timer);
                        } else {
                            entry.target.innerText = count.toLocaleString();
                        }
                    }, 30);

                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => observer.observe(c));
    },

    // 6. TOAST NOTIFICATION SYSTEM
    showToast: function(message, title = 'Success', icon = 'bi-check-circle-fill text-success') {
        let container = document.querySelector('.toast-container-custom');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container-custom';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = 'toast-custom';
        toast.innerHTML = `
            <i class="bi ${icon} fs-4"></i>
            <div class="flex-grow-1">
                <strong class="d-block font-heading">${title}</strong>
                <span class="small">${message}</span>
            </div>
            <button type="button" class="btn-close ms-auto" onclick="this.parentElement.remove()"></button>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            if (toast.parentElement) toast.remove();
        }, 4000);
    },

    // 7. LOCALSTORAGE DATA MANAGERS
    getDemoBookings: function() {
        return JSON.parse(localStorage.getItem('lingua_demo_bookings') || '[]');
    },

    saveDemoBooking: function(booking) {
        const bookings = this.getDemoBookings();
        booking.id = 'DEMO-' + Math.floor(1000 + Math.random() * 9000);
        booking.createdAt = new Date().toLocaleDateString();
        bookings.unshift(booking);
        localStorage.setItem('lingua_demo_bookings', JSON.stringify(bookings));
        return booking;
    },

    getEnquiries: function() {
        return JSON.parse(localStorage.getItem('lingua_enquiries') || '[]');
    },

    saveEnquiry: function(enquiry) {
        const list = this.getEnquiries();
        enquiry.id = 'ENQ-' + Math.floor(1000 + Math.random() * 9000);
        enquiry.createdAt = new Date().toLocaleDateString();
        enquiry.status = 'Pending Review';
        list.unshift(enquiry);
        localStorage.setItem('lingua_enquiries', JSON.stringify(list));
        return enquiry;
    },

    getFavorites: function() {
        return JSON.parse(localStorage.getItem('lingua_favorites') || '[]');
    },

    toggleFavorite: function(courseId) {
        let favs = this.getFavorites();
        const index = favs.indexOf(courseId);
        if (index > -1) {
            favs.splice(index, 1);
            this.showToast('Course removed from your saved list.', 'Favorites Updated', 'bi-bookmark-x-fill text-warning');
        } else {
            favs.push(courseId);
            this.showToast('Course added to your saved favorites!', 'Favorites Updated', 'bi-bookmark-star-fill text-success');
        }
        localStorage.setItem('lingua_favorites', JSON.stringify(favs));
        this.updateFavoriteButtonsUI();
    },

    updateFavoriteButtonsUI: function() {
        const favs = this.getFavorites();
        document.querySelectorAll('.card-favorite-btn').forEach(btn => {
            const id = btn.getAttribute('data-course-id');
            if (favs.includes(id)) {
                btn.classList.add('active');
                btn.innerHTML = '<i class="bi bi-heart-fill"></i>';
            } else {
                btn.classList.remove('active');
                btn.innerHTML = '<i class="bi bi-heart"></i>';
            }
        });
    },

    // 8. MODAL BINDING & FORM SUBMISSIONS
    bindModals: function() {
        document.addEventListener('click', (e) => {
            const demoBtn = e.target.closest('[data-bs-target="#demoClassModal"]');
            if (demoBtn) {
                const courseName = demoBtn.getAttribute('data-course-name') || '';
                const courseInput = document.querySelector('#demoClassModal select[name="course"]');
                if (courseInput && courseName) {
                    courseInput.value = courseName;
                }
            }

            const enrollBtn = e.target.closest('[data-bs-target="#enrollModal"]');
            if (enrollBtn) {
                const courseName = enrollBtn.getAttribute('data-course-name') || '';
                const modalCourseNameSpan = document.querySelector('#enrollModal .selected-course-title');
                if (modalCourseNameSpan) {
                    modalCourseNameSpan.innerText = courseName || 'Selected Language Program';
                }
            }
        });
    },

    bindFormHandlers: function() {
        // Demo Class Form
        const demoForm = document.querySelector('#demoClassForm');
        if (demoForm) {
            demoForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(demoForm);
                const data = Object.fromEntries(formData.entries());

                const booking = this.saveDemoBooking(data);
                this.showToast(`Your free demo class is scheduled! Booking ID: ${booking.id}`, 'Demo Class Booked');
                
                const modalEl = document.querySelector('#demoClassModal');
                if (modalEl && window.bootstrap) {
                    const modalInstance = bootstrap.Modal.getInstance(modalEl);
                    if (modalInstance) modalInstance.hide();
                }
                demoForm.reset();
            });
        }

        // Quick Enrollment Form
        const enrollForm = document.querySelector('#enrollForm');
        if (enrollForm) {
            enrollForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(enrollForm);
                const data = Object.fromEntries(formData.entries());

                const enquiry = this.saveEnquiry(data);
                this.showToast(`Enrollment request submitted! Reference ID: ${enquiry.id}`, 'Enquiry Submitted');

                const modalEl = document.querySelector('#enrollModal');
                if (modalEl && window.bootstrap) {
                    const modalInstance = bootstrap.Modal.getInstance(modalEl);
                    if (modalInstance) modalInstance.hide();
                }
                enrollForm.reset();
            });
        }

        // Newsletter Form
        const newsForm = document.querySelector('#newsletterForm');
        if (newsForm) {
            newsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.showToast('Thank you for subscribing to Lingua Academy updates!', 'Subscribed');
                newsForm.reset();
            });
        }
    },

    // 9. AUTH NAVIGATION UI UPDATER
    updateAuthNavUI: function() {
        const user = JSON.parse(localStorage.getItem('lingua_user') || 'null');
        const authContainer = document.querySelectorAll('.auth-nav-container');

        authContainer.forEach(container => {
            if (user && user.isLoggedIn) {
                container.innerHTML = `
                    <div class="dropdown">
                        <button class="btn btn-outline-theme btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            <i class="bi bi-person-circle text-orange"></i> Hi, ${user.name.split(' ')[0]}
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end shadow">
                            <li><a class="dropdown-item" href="student-profile.html"><i class="bi bi-person me-2"></i> My Profile & Status</a></li>
                            <li><a class="dropdown-item" href="schedule.html"><i class="bi bi-calendar-event me-2"></i> My Batches</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><button class="dropdown-item text-danger" onclick="LinguaApp.logout()"><i class="bi bi-box-arrow-right me-2"></i> Logout</button></li>
                        </ul>
                    </div>
                `;
            } else {
                container.innerHTML = `
                    <a href="login.html" class="btn btn-primary-theme btn-sm text-nowrap">
                        <i class="bi bi-person-lock me-1"></i> Log In
                    </a>
                `;
            }
        });
    },

    logout: function() {
        localStorage.removeItem('lingua_user');
        this.showToast('You have been logged out.', 'Session Ended', 'bi-info-circle-fill text-info');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    },

    // 10. BROCHURE DOWNLOAD HELPER
    downloadBrochure: function(courseName) {
        this.showToast(`Downloading official brochure for ${courseName}... Check your downloads.`, 'Brochure Downloaded', 'bi-file-earmark-pdf-fill text-danger');
        const content = `=====================================================
LINGUA ACADEMY - OFFICIAL COURSE BROCHURE & SYLLABUS
=====================================================
Program: ${courseName}
Accreditation: CEFR Aligned & Global Language Council Certified
Delivery: Live Interactive Labs, 1-on-1 Feedback & Smart LMS Access
Faculty: Native & Cambridge/Goethe/Alliance Française Certified

ADMISSIONS & ENQUIRIES:
Hotline: +1 (800) 555-LANG | +1 (800) 555-5264
Email: admissions@linguaacademy.com
Website: https://linguaacademy.com
Address: 104 Knowledge Boulevard, Downtown Campus & Virtual Labs

Thank you for choosing Lingua Academy!
=====================================================`;
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${courseName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-brochure.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

// Auto initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    LinguaApp.init();
});
