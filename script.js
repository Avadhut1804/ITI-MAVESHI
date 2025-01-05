// script.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('धन्यवाद, ' + name + '! आपला संदेश पाठवला गेला आहे.');
        document.getElementById('contactForm').reset(); // Reset the form
    } else {
        alert('कृपया सर्व माहिती भरा.');
    }
});
