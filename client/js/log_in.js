function logIn(event)
{
    event.preventDefault();

    let email = document.querySelector('#logInEmail').value;
    let password = document.querySelector('#logInPassword').value;
    let message = document.querySelector('#message');

    // Get stored user data
    let storedData = localStorage.getItem("userData");

    if (!storedData)
    {
        message.innerText = "No account found. Please sign up first!";
        alert('No account found. Please sign up first!');
    }

    let user = JSON.parse(storedData);

    // Check credentials
    if (password == user.password && email == user.email)
    {
        message.innerText = "Log In successful!";
        document.getElementById('message').style.color = 'green';
        
        // Wait 2 seconds (2000 milliseconds) before going to index.html
        setTimeout( function() {
            window.location.href="/client/html/index.html";
        }, 2000);
    }
    else
    {
        message.innerText = "Invalid email or password!";
        document.getElementById('message').style.color = 'red';
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", user.username);

}

document.addEventListener('DOMContentLoaded', function(){
    let form = document.querySelector('form');
    form.addEventListener('submit', logIn);
});