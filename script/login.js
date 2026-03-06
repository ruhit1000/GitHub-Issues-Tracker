document.getElementById('login-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (userName === 'admin' && password === 'admin123') {
        alert('login Success')
        window.location.href = './home.html';
    } else {
        alert('Invalid Credentials')
    }
})