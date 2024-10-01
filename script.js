document.addEventListener('DOMContentLoaded', function() {
    // Phone number validation
    const phoneInput = document.getElementById('phno');
    const otpInput = document.querySelector('input[type="number"]');
    const verifyButton = document.querySelector('button[type="submit"]');

    // Simple phone number validation
    phoneInput.addEventListener('input', function() {
        const phoneValue = phoneInput.value;
        if (phoneValue.length !== 10 || isNaN(phoneValue)) {
            phoneInput.style.borderColor = 'red';
        } else {
            phoneInput.style.borderColor = 'green';
        }
    });

    // OTP input validation
    otpInput.addEventListener('input', function() {
        if (otpInput.value.length !== 4) {
            otpInput.style.borderColor = 'red';
        } else {
            otpInput.style.borderColor = 'green';
        }
    });

    // Prevent form submission if validation fails
    verifyButton.addEventListener('click', function(event) {
        if (phoneInput.value.length !== 10 || otpInput.value.length !== 4) {
            alert('Please enter a valid phone number and 4-digit OTP');
            event.preventDefault(); // Prevent submission if invalid
        }
    });
});
