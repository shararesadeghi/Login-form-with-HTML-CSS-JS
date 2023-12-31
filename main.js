const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const signinMsg = document.querySelector(".signin-status");
const signinBtn = document.querySelector(".signin-button");

signinBtn.addEventListener("click",signIn);

function signIn(event){
    event.preventDefault();
    usernameMsg.innerText = "";
    passwordMsg.innerText = "";
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    let ifSendData = true;

    if(usernameValue.length === 0 || usernameValue.indexOf("@") === -1 || usernameValue.indexOf(".") === -1 ){
        usernameMsg.innerText = "Please enter a valid Email."
        ifSendData = false;
    }  

    if(passwordValue.length === 0){
        passwordMsg.innerText = "Please enter yourpassword.";
        ifSendData = false;
    }else if(passwordValue.length <= 4){
        passwordMsg.innerText = "Your password is too short."
        ifSendData = false;
    }

    if(ifSendData){
        const body = JSON.stringify({
            username : usernameValue,
            password : passwordValue,
        })
        const headers = {
            "Content-Type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method : "POST",
            body,
            headers
        })
          .then(response => {
              if(response.ok){
                  signinMsg.innerText = "You signed in successfully."
              }
          })
    }
}

