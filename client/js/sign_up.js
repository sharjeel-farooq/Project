function signUp(event) 
{

    event.preventDefault();

    let username = document.querySelector('#signUpUsername').value;
    let email = document.querySelector('#signUpEmail').value;
    let password = document.querySelector('#signUpPassword').value;
    let confirmPassword = document.querySelector('#signUpConfirmPassword').value;
    let message = document.querySelector('#message');

    // Store data in localstorage as JSON
    if (!username || !email || !password || !confirmPassword) 
    {
        message.innerText = "Please enter all the fields!";
        return;   
    }

    if (password != confirmPassword)
    {
        message.innerText = "Passwords do not match!";
        return;
    }

    // Store data in local Storage
    localStorage.setItem("userData", JSON.stringify({username, email, password, confirmPassword}));
    document.querySelector('form').reset(); // Clear the form


    // Set loggedin status
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", username);
    
    // Show success message with username
    document.getElementById('successUsername').textContent = username;
    document.getElementById('successOverlay').style.display = 'flex';

    // Wait 3 seconds (3000 milliseconds) before going to index.html
    setTimeout( function() {
        window.location.href="/client/html/index.html";
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function(){
    let form = document.querySelector('form'); 
    form.addEventListener('submit', signUp);
});