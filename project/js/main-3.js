document.addEventListener("DOMContentLoaded",()=>{
    var inputs=document.querySelectorAll('input');
    var form=document.getElementById('payment');
    var patterns={
        name: /^[a-z ,.'-]+$/i,
       cardNumber: /^4[0-9]{12}(?:[0-9]{3})?$/,
       expireyDate: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
       cvv: /^[0-9]{3,4}$/
    };
    function validate(field,regEx){
        if(regEx.test(field.value)){
            field.className='valid';
        }
        else{
            field.className='invalid';
        }
    }
    
    inputs.forEach((input)=>{
        input.addEventListener('keyup',(event)=>{
            validate(event.target,patterns[event.target.attributes.name.value]);
        });
    });

    form.addEventListener('submit',()=>{
        alert('Your Payment Was Successfull');
    })
});