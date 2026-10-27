function brackMatch(inputString){
    var strack = [];
    var isMatched = true;
    var i=0;
    var symbol = inputString.charAt(0);
    while(isMatched && symbol!=undefined){
        if(symbol=='{' || symbol=='[' || symbol=='('){
            //push
            strack.push(symbol);
        }
        else if(symbol=='}' || symbol==']' || symbol==')'){
            if(strack.length>0){
                var openBracket = strack.pop();
                if(openBracket=='{' && symbol=='}')
                    isMatched = true;
                else if(openBracket=='[' && symbol==']')
                    isMatched = true;
                else if(openBracket=='(' && symbol==')')
                    isMatched = true;
                else
                    isMatched = false;
            }
            else
                isMatched = false;
        }
        i++;
        symbol = inputString.charAt(i);
    }
    if(strack.length>0)
        isMatched = false;
    return isMatched;
}        
                   



       