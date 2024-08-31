const removeFromArray = function(...ary) {
    let ne=ary[0];
    let v=ne.length;
    let c=ary.length;
    for(let z=1;z<c;z++){
    for (let y=0;y<v;y++){
        if (ne[y]===ary[z]){
            let p=ne.splice(y,1);
        }
        else if(ne[y]===ary[z]){
            let p=ne.splice(y,1);
        }
        }
    };
    return ne
};

// Do not edit below this line
module.exports = removeFromArray;
