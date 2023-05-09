document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

document.querySelector('.sign-up .submit').addEventListener('click', function() {
    const name = document.querySelector('.sign-up input[type="text"]').value;
    const email = document.querySelector('.sign-up input[type="email"]').value;
    const password = document.querySelector('.sign-up input[type="password"]').value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/users');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            // Show success message or redirect to login page
        } else {
            console.error(xhr.statusText);
            // Show error message
        }
    };

    xhr.send(JSON.stringify({name:name, email: email, password: password }));
});

document.querySelector('.sign-in .submit').addEventListener('click', function() {
    const email = document.querySelector('.sign-in input[type="email"]').value;
    const password = document.querySelector('.sign-in input[type="password"]').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:8080/login?email=${email}&password=${password}`);

    xhr.onload = function() {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
            window.location.href="taxsystem.html";
        } else {
            // Show error message
            console.error(response.message);
        }
    };

    xhr.send();
});

