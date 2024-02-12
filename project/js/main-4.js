document.addEventListener("DOMContentLoaded",()=>{
    var inputs=document.querySelectorAll('input');
    var suggestion=document.getElementById('suggestion');

    var ageValue=inputs[0];
    var weightValue=inputs[1];
    var heightValue=inputs[2];

    //So that the value gets check for all the three input
    inputs.forEach(input=>{

    input.addEventListener('input',()=>{

    var ageI=parseInt(ageValue.value);
    var weightI=parseInt(weightValue.value);
    var heightI=parseInt(heightValue.value);

 if(isNaN(ageI) || isNaN(weightI) || isNaN(heightI)){
      suggestion.textContent="Please Enter Valid Input"
}
 else{

 
    if(ageI>=18&& weightI>=60&& heightI>=160){
        suggestion.textContent="Large";
    }else if(ageI>=16 && weightI>=50 && heightI>=150){
        suggestion.textContent="Medium";
    }
    else if(ageI>=18 && weightI>=70 && heightI>=160){
        suggestion.textContent="EXtra Large";
    }
    else if(ageI>16 && weightI<=40 && heightI<150){ 
        suggestion.textContent="Small";
    }
    else{
        suggestion.textContent="Sorry we cannot find your size";
    }
}
        });
    });
    
});