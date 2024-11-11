
/*Reservation starts*/
document.getElementById('book-now-btn').addEventListener('click', function() {
    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const persons = document.getElementById('persons').value;

    // Validation to ensure all fields are filled
    if (!name || !email || !date || !time || persons === 'Persons') {
        alert('Please fill out all fields before booking.');
        return;
    }

    // Validation for name: only letters (no numbers or special characters)
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces allowed
    if (!nameRegex.test(name)) {
        alert('Name should only contain letters and spaces.');
        return;
    }

    // Validation for email: must contain '@'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email format check
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address (must contain "@").');
        return;
    }

    // Show a confirmation alert if all fields are valid
    alert(`Your table has been successfully booked!\n\nDetails:\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nPersons: ${persons}`);
    window.location.href="menu.html";
});
