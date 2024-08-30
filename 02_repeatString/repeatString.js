const repeatString = function(st,i) {
    if(i==0){
        return ""
    }
    else if(i<0){
        return "ERROR";
    }
    else{
    let stri=st;
    for (let v=0;v<i-1;v++){
     stri +=st;
    }
    return stri;
    }
};
// Do not edit below this line
module.exports = repeatString;
