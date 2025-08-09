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
    }

    let user = JSON.parse(storedData);

    // Check credentials
    if (password == user.password && email == user.email)
    {
        // Show success message with username
        // document.querySelector('successUsername').textContent = username;
        document.getElementById('successOverlay').style.display = 'flex';
        
        // Wait 3 seconds (3000 milliseconds) before going to index.html
        setTimeout( function() {
            window.location.href="/client/html/index.html";
        }, 3000);
    }
    else
    {
        message.innerText = "Invalid email or password!";
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", user.username);

}

document.addEventListener('DOMContentLoaded', function(){
    let form = document.querySelector('form');
    form.addEventListener('submit', logIn);
});