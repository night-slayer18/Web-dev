document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const message = document.querySelector('#message').value;


    if (name === '' || email === '' || phone === '' || message === '') {
        alert('Please fill out all fields');
    }
    else if (name.length < 3) {
        alert('Please enter a valid name');
    }
    else if (phone.length !== 10) {
        alert('Please enter a valid phone number');
    }
    else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Please enter a valid email address');
    }
    else {
        alert('Thank you for your submission');
        this.reset();
    }
});