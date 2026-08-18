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
    }
});
