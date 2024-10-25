
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    

    if (username === 'Entri Elevate' && password === 'admin123') 
    {
        alert('Login successful!');
         window.open('https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en')
        return true;
    
    } 
    else 
    {
        alert( `Invalid username or password.`);
        return false;
    }

}

function fo() {

    let Forgot=prompt(`Enter your Email: `);
    alert(`please enter your OTP: `);
    alert(`your new password is sucess fully`);
}
