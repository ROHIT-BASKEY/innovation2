document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.aside');
    
    menu.onclick = () => {
        menu.classList.toggle('#menu-icon');
        navlist.classList.toggle('open');
    };
});

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('#register-btn');
    let register = document.querySelector('.register');
    
    menu.onclick = () => {
        login.classList.toggle('#register-btn');
        register.classList.toggle('open');
    };
});


const sr = ScrollReveal({
    distance:'65px',
    duration:2600,
    delay:450,
    reset:true
});
sr.reveal('.hero-text',{delay:200,origin:'top'});
sr.reveal('.hero-image',{delay:200,origin:'top'});
sr.reveal('.scroll-down',{delay:200,origin:'top'});
//====================================================
// Function to send OTP for registration
function sendOTP() {
  const mobileNumber = document.getElementById('registerMobileNumber').value;

  // Send a POST request to backend to send OTP for registration
  fetch('/send-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mobileNumber }),
  })
  .then(response => {
    if (response.ok) {
      alert('OTP sent successfully for registration!');
    } else {
      alert('Failed to send OTP for registration. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// Function to register user
function register() {
  const mobileNumber = document.getElementById('registerMobileNumber').value;
  const otp = document.getElementById('registerOTP').value;
  const aadharNumber = document.getElementById('aadharNumber').value;
  const bankAccountNumber = document.getElementById('bankAccountNumber').value;
  const age = document.getElementById('age').value;

  // Send a POST request to backend to verify OTP and register user
  fetch('/verify-otp-and-register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mobileNumber, otp, aadharNumber, bankAccountNumber, age }),
  })
  .then(response => {
    if (response.ok) {
      alert('Registration successful!');
    } else {
      alert('Failed to register. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// Function to login
function login() {
  const mobileNumber = document.getElementById('loginMobileNumber').value;
  const otp = document.getElementById('loginOTP').value;

  // Send a POST request to backend to verify OTP for login
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ mobileNumber, otp }),
  })
  .then(response => {
    if (response.ok) {
      alert('Login successful!');
    } else {
      alert('Failed to login. Please check your mobile number and OTP.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

