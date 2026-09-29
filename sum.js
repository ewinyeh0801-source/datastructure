function sum(n){     var result=0;
    let index = 1; 
    
do{       result += index;
    index++;

 }while(index<=n);
      return result; 
    }
      console.log("1+2+...+1000000="+sum(1000000)); 