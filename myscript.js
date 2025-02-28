
function validate_password(){
    var password = document.getElementById('password');
    var upper = document.getElementById('upper');
    var lower = document.getElementById('lower');
    var num = document.getElementById('number');
    var len = document.getElementById('length');
    var special_char = document.getElementById('special_char');

    
    if(password.value.match(/[0-9]/)){
        num.style.color = 'green';
     }
     else{
        num.style.color = 'red';
     }

    if(password.value.match(/[A-Z]/)){
       upper.style.color = 'green';
    }
    else{
       upper.style.color = 'red';
    }

    if(password.value.match(/[a-z]/)){
       lower.style.color = 'green';
    }
    else{
       lower.style.color = 'red';
    }
    
    if(password.value.match(/[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\>\<\.\,\/]/)){
        special_char.style.color = 'green';
     }
     else{
        special_char.style.color = 'red';
     }
}

function validation(){
    let password = document.getElementById('password').value;
    let conf_pass = document.getElementById('conf_pass').value;
    console.log(password,conf_pass);
    let message = document.getElementById('message');
    
    if(password != 0){
        if(password==conf_pass){
            message.textContent = "Οι κωδικοί ταιριάζουν";
            message.style.backgroundColor="green"; 
        }
        else{
            message.textContent = "Οι κωδικοί δεν ταιριάζουν";
            message.style.backgroundColor="red"; 
        }
    }
    else{
        alert("Δεν μπορεί να είναι κενός ο κωδικός");
        message.textContent = "";
    }
}