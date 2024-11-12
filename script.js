const password = document.getElementById("password");

password.addEventListener("keyup", function(){

    /*==================== check length ====================*/
    const len = document.getElementById("len");
    if(password.value.length >= 8){
        len.classList.remove('unvalid');
        len.classList.add('valid');
        
    }else {
        len.classList.remove('valid');
        len.classList.add('unvalid');
    }

    /*==================== check lowercase ====================*/
    const lower = document.getElementById("lower");
    if(password.value.match(/[a-z]/g)){
        lower.classList.remove('unvalid');
        lower.classList.add('valid');
    }else {
        lower.classList.remove('valid');
        lower.classList.add('unvalid');
    }

    /*==================== check uppercase ====================*/
    const upper = document.getElementById("upper");
    if(password.value.match(/[A-Z]/g)){
        upper.classList.remove('unvalid');
        upper.classList.add('valid');
    }else {
        upper.classList.remove('valid');
        upper.classList.add('unvalid');
    }

    /*==================== check numbers ====================*/
    const numbers = document.getElementById("num");
    if(password.value.match(/[0-9]/g)){
        numbers.classList.remove('unvalid');
        numbers.classList.add('valid');
    }else {
        numbers.classList.remove('valid');
        numbers.classList.add('unvalid');
    }

    /*==================== check special characters ====================*/
    const special = document.getElementById("symbol");
    if(password.value.match(/[^A-Za-z0-9]/i)){
        special.classList.remove('valid');
        special.classList.add('valid');
    }else {
        special.classList.remove('valid');
        special.classList.add('unvalid');
    }
})