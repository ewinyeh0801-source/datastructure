var weight=50;
var height=160;

var readline = require("readline-sync");

while(true){
var weight = readline.question('your weight (10~200 kg)?');
if(weight < 10 && weight > 200)
  continue;
else
    break;
  }


var bmi = weight/((height/100)**2);
console.log("your BMI:"+ bmi);


 var bmi = weight / (height / 100 ** 2);
 console.log("Your BMI:" + bmi); 

 function test(weight=70)
 {    
     var weight=62;     
     console.log("weight="+weight)   
       return weight;
     }  

     var resuit=test(80); 
      console.log("weight="+weight)
