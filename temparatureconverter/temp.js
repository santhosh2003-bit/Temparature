let btn = document.querySelector('#btn');
let degree = document.querySelector('#degree');
let result = document.querySelector('#result');
let fres = document.querySelector('#Farenhite');
degree.addEventListener('input', function() {
    let d = parseFloat(this.value); // Parse the input value as a float
    if (!isNaN(d)) {
        let c = (d * 9/5) + 32;
        fres.value = c; // Use innerHTML to set the result content
    } else {
        fres.value = "please Enter Number Only"; // Handle invalid input
    }
    let s=fres.value
    if (!isNaN(s)) {
       
        let c =  (s- 32) * 5/9 + 273.15;
        result.value = c; // Use innerHTML to set the result content
    } else {
        result.value = "please Enter Number Only"; // Handle invalid input
    }
    
});
fres.addEventListener('input',function(){
    let r=parseFloat(this.value)
    if (!isNaN(r)) {
       
       let c =  (r- 32) * 5/9 + 273.15;
       result.value = c; // Use innerHTML to set the result content
   } else {
       result.value = "please Enter Number Only"; // Handle invalid input
   }
})
btn.addEventListener('click',function(){
    degree.value=''
    fres.value=''
    result.value=''
})
