//Decalred a variable to store regX
var patterns={
    upperCase:/[A-Z]/,
    lowerCase:/[a-z]/,
    num:/\d/,
    specialChar:/[@,.?#$%^&*]/,
    minLength:/.{6,}/,
    userEmail:/^([a-z\.-\d]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})$/,
    userName:/^[a-z0-9]{5,12}$/i,
}

function PasswordCheck(input){
    //We will get all the h3 of password
    var message=document.getElementsByClassName("pvalidationMessage");

    if(patterns.upperCase.test(input)){
        message[0].style.color='green';
        //console.log("Uppern Case entered")
    }
    else{
        message[0].style.color='red';
    }

    if(patterns.lowerCase.test(input)){
     message[1].style.color='green';
    }
    else{
        message[1].style.color='red';
    }

    if(patterns.num.test(input)){
        message[2].style.color='green';
       }
       else{
           message[2].style.color='red';
       }

    
    if(patterns.specialChar.test(input)){
        message[3].style.color='green';
       }
    else{
           message[3].style.color='red';
       }

    if(patterns.minLength.test(input)){
        message[4].style.color='green';
       }
    else{
           message[4].style.color='red';
       }

    
    }


function UserNameCheck(uInput){

    var uMessage=document.getElementsByClassName("ivalidationMessage")[0];
    if(patterns.userEmail.test(uInput) || patterns.userName.test(uInput)){
        uMessage.style.color='green';
    }else{
        uMessage.style.color='red';
    }
   
}

