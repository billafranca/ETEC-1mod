function createLoginForm() {
    const form = document.createElement('form');
    form.setAttribute('id', 'loginForm');

    const usernameLabel = document.createElement('label');
    usernameLabel.textContent = 'Username:';
    form.appendChild(usernameLabel);

    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('name', 'username');
    form.appendChild(usernameInput);

    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Password:';
    form.appendChild(passwordLabel);

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('name', 'password');
    form.appendChild(passwordInput);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Login';
    submitButton.setAttribute('type', 'submit');
    form.appendChild(submitButton);

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;
        if (username === 'admin' && password === '12345') {
            alert('Login successful');
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        } else {
            alert('Login failed');
        }
    });

    return form;
}

document.body.appendChild(createLoginForm());
