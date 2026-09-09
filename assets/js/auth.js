// Global LinguaAuth object
window.LinguaAuth = {
    socialLogin: function(provider) {
        const mockNames = {
            'Google': 'Alex Morgan (Google)',
            'Apple': 'Jordan Lee (Apple)'
        };
        const mockEmails = {
            'Google': 'alex.morgan@gmail.com',
            'Apple': 'jordan.apple.id@icloud.com'
        };

        const user = {
            name: mockNames[provider] || 'Registered Student',
            email: mockEmails[provider] || 'student@linguaacademy.com',
            role: 'Student',
            enrolledProgram: 'Spoken English & IELTS Prep',
            isLoggedIn: true,
            authProvider: provider,
            joinedDate: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        };

        localStorage.setItem('lingua_user', JSON.stringify(user));
        if (window.LinguaApp) {
            LinguaApp.showToast(`Signed in with ${provider}! Redirecting to student dashboard...`, 'Sign In Successful', 'bi-check-circle-fill text-success');
        }
        setTimeout(() => {
            window.location.href = 'student-profile.html';
        }, 1000);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Password Visibility Toggle
    const togglePasswordBtns = document.querySelectorAll('.toggle-password-btn');
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling;
            if (input && (input.type === 'password' || input.type === 'text')) {
                const isPassword = input.type === 'password';
                input.type = isPassword ? 'text' : 'password';
                btn.querySelector('i').className = isPassword ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill';
            }
        });
    });

    // 2. Demo Login Credentials Quick-Fill (Fallback if present)
    const demoFillBtn = document.querySelector('#fillDemoCredentialsBtn');
    if (demoFillBtn) {
        demoFillBtn.addEventListener('click', () => {
            const emailInput = document.querySelector('#loginEmail');
            const passInput = document.querySelector('#loginPassword');
            if (emailInput) emailInput.value = 'student@languagehub.com';
            if (passInput) passInput.value = 'Student@123';
            if (window.LinguaApp) {
                LinguaApp.showToast('Demo student credentials filled!', 'Quick Fill', 'bi-info-circle-fill text-info');
            }
        });
    }

    // 3. Student Login Form Submission
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.querySelector('#loginEmail').value.trim();
            const password = document.querySelector('#loginPassword').value.trim();

            if (!email || !password) {
                if (window.LinguaApp) {
                    LinguaApp.showToast('Please enter both your email address and password.', 'Required Fields', 'bi-exclamation-triangle-fill text-warning');
                }
                return;
            }

            // Extract display name from email (e.g. sarah.jenkins@... -> Sarah Jenkins)
            let rawName = email.split('@')[0].replace(/[._]/g, ' ');
            let formattedName = rawName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            if (formattedName.length < 2) formattedName = 'Sarah Jenkins';

            const user = {
                name: formattedName,
                email: email,
                role: 'Student',
                enrolledProgram: 'Business English & Public Speaking',
                isLoggedIn: true,
                joinedDate: 'August 2026'
            };
            localStorage.setItem('lingua_user', JSON.stringify(user));
            if (window.LinguaApp) {
                LinguaApp.showToast(`Welcome back, ${formattedName}! Redirecting to student profile...`, 'Login Successful');
            }
            setTimeout(() => {
                window.location.href = 'student-profile.html';
            }, 1000);
        });
    }

    // 3b. Admin Portal Login Form Submission
    const adminLoginForm = document.querySelector('#adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.querySelector('#adminEmail')?.value.trim();
            const password = document.querySelector('#adminPassword')?.value.trim();
            const pin = document.querySelector('#adminPin')?.value.trim();

            if (!email || !password) {
                if (window.LinguaApp) {
                    LinguaApp.showToast('Please enter administrator credentials.', 'Admin Authentication', 'bi-shield-exclamation text-danger');
                }
                return;
            }

            const adminUser = {
                name: 'Administrator',
                email: email,
                role: 'SuperAdmin',
                isLoggedIn: true,
                securityLevel: 'Tier 1 - Full Access',
                loginTime: new Date().toLocaleTimeString()
            };
            localStorage.setItem('lingua_admin', JSON.stringify(adminUser));
            if (window.LinguaApp) {
                LinguaApp.showToast('Admin authorization verified! Welcome to Lingua Academy Admin Suite.', 'Admin Access Granted', 'bi-shield-check text-success');
            }
            setTimeout(() => {
                window.location.href = 'student-profile.html';
            }, 1200);
        });
    }

    // 4. Register Form Submission
    const registerForm = document.querySelector('#registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.querySelector('#regName').value.trim();
            const email = document.querySelector('#regEmail').value.trim();
            const program = document.querySelector('#regProgram') ? document.querySelector('#regProgram').value : 'French Language A1';

            const user = {
                name: name || 'New Learner',
                email: email,
                role: 'Student',
                enrolledProgram: program,
                isLoggedIn: true,
                joinedDate: new Date().toLocaleDateString()
            };
            localStorage.setItem('lingua_user', JSON.stringify(user));
            if (window.LinguaApp) {
                LinguaApp.showToast('Account registered successfully! Redirecting...', 'Welcome to Lingua Academy');
            }
            setTimeout(() => {
                window.location.href = 'student-profile.html';
            }, 1200);
        });
    }

    // 5. Student Profile Loader (on student-profile.html)
    const profileNameEl = document.querySelector('#profileStudentName');
    const profileEmailEl = document.querySelector('#profileStudentEmail');
    const profileProgramEl = document.querySelector('#profileEnrolledProgram');

    if (profileNameEl) {
        const user = JSON.parse(localStorage.getItem('lingua_user') || 'null');
        if (!user || !user.isLoggedIn) {
            window.location.href = 'login.html';
            return;
        }

        profileNameEl.innerText = user.name;
        if (profileEmailEl) profileEmailEl.innerText = user.email;
        if (profileProgramEl) profileProgramEl.innerText = user.enrolledProgram || 'General Communication';

        // Load Bookings & Enquiries
        const demoBookingsContainer = document.querySelector('#userDemoBookingsList');
        if (demoBookingsContainer && window.LinguaApp) {
            const bookings = LinguaApp.getDemoBookings();
            if (bookings.length === 0) {
                demoBookingsContainer.innerHTML = '<div class="alert alert-secondary">No upcoming demo class bookings yet. <a href="courses.html" class="alert-link">Explore courses</a></div>';
            } else {
                demoBookingsContainer.innerHTML = bookings.map(b => `
                    <div class="card p-3 mb-2 border-0 shadow-sm bg-surface">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <h6 class="font-heading mb-1 text-orange"><i class="bi bi-camera-video-fill me-2"></i> ${b.course || 'Demo Class'}</h6>
                                <span class="small text-muted"><i class="bi bi-clock me-1"></i> Preferred Time: ${b.preferredTime || 'Morning Slot'} | Ref: ${b.id}</span>
                            </div>
                            <span class="badge bg-success">Confirmed</span>
                        </div>
                    </div>
                `).join('');
            }
        }

        const enquiriesContainer = document.querySelector('#userEnquiriesList');
        if (enquiriesContainer && window.LinguaApp) {
            const list = LinguaApp.getEnquiries();
            if (list.length === 0) {
                enquiriesContainer.innerHTML = '<div class="alert alert-secondary">No course enquiries submitted yet.</div>';
            } else {
                enquiriesContainer.innerHTML = list.map(e => `
                    <div class="card p-3 mb-2 border-0 shadow-sm bg-surface">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <h6 class="font-heading mb-1">${e.name || 'Enquiry'} (${e.id})</h6>
                                <span class="small text-muted">Submitted: ${e.createdAt} | Phone: ${e.phone || 'N/A'}</span>
                            </div>
                            <span class="badge bg-warning text-dark">${e.status}</span>
                        </div>
                    </div>
                `).join('');
            }
        }

        // Load Saved / Wishlisted Courses
        const savedCoursesContainer = document.querySelector('#userSavedCoursesList');
        if (savedCoursesContainer) {
            const renderSavedCourses = () => {
                let saved = JSON.parse(localStorage.getItem('lingua_favorites') || '[]');
                if (!Array.isArray(saved) || saved.length === 0) {
                    saved = ['German Language A2', 'IELTS Academic Masterclass'];
                    localStorage.setItem('lingua_favorites', JSON.stringify(saved));
                }

                if (saved.length === 0) {
                    savedCoursesContainer.innerHTML = '<div class="col-12"><div class="alert alert-secondary mb-0">You have no saved courses yet. <a href="courses.html" class="alert-link">Browse courses to add favorites</a></div></div>';
                    return;
                }

                const courseDetails = {
                    'Spoken English & Communication': { tag: 'English', color: 'orange', level: 'Beginner to Advanced', link: 'course-spoken-english.html', price: '$299' },
                    'French Language (DELF A1-B2)': { tag: 'French', color: 'blue', level: 'DELF Accredited', link: 'course-french.html', price: '$349' },
                    'German Language (Goethe A1-B2)': { tag: 'German', color: 'teal', level: 'Goethe Exam Track', link: 'course-german.html', price: '$349' },
                    'German Language A2': { tag: 'German', color: 'teal', level: 'Goethe Exam Track', link: 'course-german.html', price: '$349' },
                    'IELTS Academic & General Masterclass': { tag: 'IELTS', color: 'purple', level: 'Target Band 8.0+', link: 'course-ielts.html', price: '$399' },
                    'IELTS Academic Masterclass': { tag: 'IELTS', color: 'purple', level: 'Target Band 8.0+', link: 'course-ielts.html', price: '$399' },
                    'Public Speaking & Leadership': { tag: 'Executive', color: 'orange', level: 'Speech Mastery', link: 'course-public-speaking.html', price: '$299' }
                };

                savedCoursesContainer.innerHTML = saved.map(courseName => {
                    const info = courseDetails[courseName] || { tag: 'Language', color: 'orange', level: 'Certified Course', link: 'courses.html', price: '$299' };
                    return `
                        <div class="col-md-6 col-lg-6">
                            <div class="p-3 rounded-3 border bg-alt h-100 d-flex flex-column justify-content-between">
                                <div class="d-flex justify-content-between align-items-start mb-2">
                                    <span class="badge bg-${info.color} text-white">${info.tag}</span>
                                    <button class="btn btn-sm text-danger p-0 remove-fav-btn" data-course="${courseName}" title="Remove from Wishlist">
                                        <i class="bi bi-trash3"></i>
                                    </button>
                                </div>
                                <h6 class="font-heading mb-1">${courseName}</h6>
                                <p class="small text-muted mb-3"><i class="bi bi-award me-1"></i> ${info.level} • <strong class="text-main">${info.price}</strong></p>
                                <div class="d-flex gap-2">
                                    <a href="${info.link}" class="btn btn-xs btn-outline-theme w-50 text-center">Details</a>
                                    <a href="schedule.html" class="btn btn-xs btn-primary-theme w-50 text-center">View Batches</a>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');

                savedCoursesContainer.querySelectorAll('.remove-fav-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const targetCourse = btn.getAttribute('data-course');
                        let currentFavs = JSON.parse(localStorage.getItem('lingua_favorites') || '[]');
                        currentFavs = currentFavs.filter(c => c !== targetCourse);
                        localStorage.setItem('lingua_favorites', JSON.stringify(currentFavs));
                        if (window.LinguaApp) {
                            LinguaApp.showToast(`Removed "${targetCourse}" from saved courses.`, 'Wishlist Updated', 'bi-bookmark-x text-warning');
                        }
                        renderSavedCourses();
                    });
                });
            };

            renderSavedCourses();
        }
    }
});
