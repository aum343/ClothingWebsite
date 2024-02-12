//This js is for valiation of help.html
document.addEventListener("DOMContentLoaded",()=>{
    var inputs=document.querySelectorAll('input');
    
    var patterns={
        oid:/^[0-9]{3}[A-Za-z]{3}$/,
        email:/^([a-z\.-\d]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})$/
    }
    function validate(field, regEx){
        if(regEx.test(field.value)){
            field.className='valid';
            console.log("The value is valid");
        }
        else{
            field.className='invalid';
            console.log("The value ios invalid");
        }
	}

    inputs.forEach((input)=>{
        input.addEventListener('keyup',(event)=>{
            validate(event.target,patterns[event.target.attributes.name.value]);
        })
    })
})