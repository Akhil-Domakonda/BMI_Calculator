var type1=document.getElementById("si");
var type2=document.getElementById("metric");
var weight=document.getElementById("weight");
var height=document.getElementById("height");
var weightDisplay=document.getElementById("weightDisplay");
var heightDisplay=document.getElementById("heightDisplay");
var calculate=document.getElementById("calculate");
var message=document.getElementById("message");
var w;
var h;
var bmi;
var method1;
var method2;

type1.addEventListener("click",function(){
    weightDisplay.textContent=" Kgs";
    heightDisplay.textContent=" Meters";
    type1.checked;
    method1=true;
});

type2.addEventListener("click",function(){
    weightDisplay.textContent=" Lbs";
    heightDisplay.textContent=" Inches";
    method1=false;
});

calculate.addEventListener("click",function(){
    if(method1){
        w=Number(weight.value);
        h=Number(height.value);
        bmi=(w)/(h*h);
        bmi=Math.round(bmi*100)/100;
        result();
    }
    else if(method1 === false){
        w=Number(weight.value);
        h=Number(height.value);
        bmi=(703*w)/(h*h);
        bmi=Math.round(bmi*100)/100;
        result();
    }  
    else{
        message.innerHTML="Fill in the inputs above"
    } 
});
function result(){
    if(bmi<=18.5 && bmi>0){
        message.innerHTML="Your BMI is "+bmi +" <br> & <br> You are Underweight";
    }
    else if(18.5<bmi && bmi<24.9){
        message.innerHTML="Your BMI is "+bmi +"<br> &<br> You are Normal";
    }

    else if(25<bmi && bmi<29.9){
        message.innerHTML="Your BMI is "+bmi +"<br> &<br> You are Overweight";
    }
    else if(bmi>=30){
        message.innerHTML="Your BMI is "+bmi +"<br> &<br> You are Obese";
    }
    else if(bmi === 0){
        message.innerHTML="invalid input";
    }
}