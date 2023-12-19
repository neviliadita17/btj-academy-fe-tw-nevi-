// Toggle Responsive Menu
const toggleBtn = document.getElementById('toggleBtn');
const navigationMenu = document.getElementById('mobileNav');

toggleBtn.addEventListener('click', () => {
    navigationMenu.classList.toggle('hidden');
});

// Close menu when clicking anywhere on the page
document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (!targetElement.closest('#toggleBtn') && !targetElement.closest('#mobileNav')) {
        navigationMenu.classList.add('hidden');
    }
});

// Rotation Logo
var rotationCount = 0;

function rotateLogo() {
    var logoImage = document.getElementById('logoImage');

    // Mengatur transisi menggunakan JavaScript
    logoImage.style.transition = 'transform 0.5s ease-in-out';

    rotationCount++;

    var rotationAngle = 360 * rotationCount;

    logoImage.style.transform = 'rotate(' + rotationAngle + 'deg)';

    // Menghilangkan transisi setelah 500ms
    setTimeout(function() {
        logoImage.style.transition = '';
    }, 500);
}

// Login
function validateUsername() {
    var username = document.getElementById('username').value;

    if (username === "") {
        document.getElementById('usernameError').innerHTML = "Field Username!";
    } else if (username.trim() == "") {
        document.getElementById('usernameError').innerHTML = "Username cannot be just spaces!";
    } else {
        document.getElementById('usernameError').innerHTML = "";
    }
}

function validatePassword() {
    var password = document.getElementById('password').value;
    var hasUppercase = /[A-Z]/.test(password);
    var hasLowercase = /[a-z]/.test(password);
    var hasNumber = /\d/.test(password);
    // var hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    var passwordError = "";

    if (!hasUppercase) passwordError += " 1 Uppercase,";
    if (!hasLowercase) passwordError += " 1 Lowercase,";
    if (!hasNumber) passwordError += " 1 Number,";
    // if (!hasSpecialChar) passwordError += " 1 Special Character,";

    // Menghapus koma terakhir
    passwordError = passwordError.slice(0, -1);

    if (password === "") {
        document.getElementById('passwordError').innerHTML = "Field Password!";
    } else if (password.length < 4 || passwordError !== "") {
        document.getElementById('passwordError').innerHTML = "Password must be at least 4 characters with: " + passwordError;
    } else {
        document.getElementById('passwordError').innerHTML = "";
    }
}

function validateForm(event) {
    event.preventDefault();
    validateUsername();
    validatePassword();

    var usernameErrorMessage = document.getElementById('usernameError').innerHTML;
    var passwordErrorMessage = document.getElementById('passwordError').innerHTML;

    if (usernameErrorMessage === "" && passwordErrorMessage === "") {
        // Get username and password only if there are no errors
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Call your API with the username and password
        authenticateUser(username, password);
    }
}

function authenticateUser(username, password) {
    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Data from API:', data);

        if (data && data.token) {
            console.log('Login successful. Redirecting...');
            // Perform redirection or other actions upon successful login
            window.location.href = 'about.html';
        } else {
            alert('Login failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error connecting to the authentication API:', error);
        alert('Error connecting to the authentication API. Please check your username and password.');
    });
}
// Show Password
function showPassword() {
    var passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

// CapsLock
function checkCapsLock(event) {
    var capsLockWarning = document.getElementById('capsLockWarning');
    if (event.getModifierState && event.getModifierState('CapsLock')) {
        capsLockWarning.textContent = 'Caps Lock is ON';
    } else {
        capsLockWarning.textContent = '';
    }
}

// Zoom Profile Picture on aboutme 
function zoomImage() {
    var profilePicture = document.querySelector('.profile-picture');
    var photo = document.getElementById('photo');

    // Tambahkan atau hapus kelas 'zoomed'
    profilePicture.classList.toggle('zoomed');

    // Jika kelas 'zoomed' ada, berikan efek zoom dengan transform scale
    if (profilePicture.classList.contains('zoomed')) {
        photo.style.transition = 'transform 0.3s';
        photo.style.transform = 'scale(1.2)';
    } else {
        // Jika kelas 'zoomed' tidak ada, kembalikan ke skala normal
        photo.style.transition = 'transform 0.3s';
        photo.style.transform = 'scale(1)';
    }

    // Hapus efek transisi setelah selesai
    setTimeout(function() {
        photo.style.transition = '';
    }, 300);
}
