document.querySelector('button').addEventListener('click', function() {
    alert('Added to cart!');
});
function toggleLogin() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    loginForm.classList.toggle('hidden');
    registerForm.classList.add('hidden');
}

function toggleRegister() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    registerForm.classList.toggle('hidden');
    loginForm.classList.add('hidden');
}
