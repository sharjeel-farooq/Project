document.addEventListener('DOMContentLoaded', function () {
    // Retrieve login state and username
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const username = localStorage.getItem("loggedInUser");

    // Fallback: Try getting from userData if available
    let finalUsername = username;
    const userData = localStorage.getItem("userData");
    if (!finalUsername && userData) {
        try {
            finalUsername = JSON.parse(userData).username;
        } catch (e) {
            console.error("Invalid userData in localStorage");
        }
    }

    // DOM elements
    const loginBtn = document.getElementById("login-button");
    const signupBtn = document.getElementById("signup-button");
    const userIcon = document.getElementById("user-info"); // Should contain <span id="userName">...</span>
    const userNameSpan = document.getElementById("userName");
    const authButtonsWrapper = document.getElementById("authButtons");

    if (isLoggedIn === "true" && finalUsername) {
        // Hide login/signup buttons
        if (loginBtn) loginBtn.style.display = "none";
        if (signupBtn) signupBtn.style.display = "none";
        if (authButtonsWrapper) authButtonsWrapper.style.display = "none";

        // Show user icon only (username will be in dropdown)
        if (userIcon) userIcon.style.display = "flex";
        if (userNameSpan) userNameSpan.innerText = finalUsername;
    } else {
        // User is logged out - hide user icon and show login/signup buttons
        if (userIcon) userIcon.style.display = "none";
        if (loginBtn) loginBtn.style.display = "block";
        if (signupBtn) signupBtn.style.display = "block";
        if (authButtonsWrapper) authButtonsWrapper.style.display = "flex";
    }
});




document.addEventListener("DOMContentLoaded", function () {
    const userInfo = document.getElementById("user-info");
    const dropdown = document.getElementById("dropdown");
    const logoutBtn = document.getElementById("logoutButton");

    userInfo.addEventListener("click", function (e) {
        dropdown.classList.toggle("hidden");
        e.stopPropagation(); // Prevent event from bubbling to window
    });

    // Hide dropdown when clicking outside
    window.addEventListener("click", function () {
        dropdown.classList.add("hidden");
    });

    // Logout handler
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("loggedInUser");
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("loggedInUser");
        location.reload(); // Or redirect to login
    });
});

