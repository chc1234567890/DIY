function cs142MakeMultiFilter(originalArray){
    let currentArray = originalArray;
    let arrayFilter = function(filterCriteria,callback){
        if(typeof filterCriteria != "function") return currentArray;
        let tmp = Array();
        for(let i of currentArray) if(filterCriteria(i)) tmp.push(i);
        currentArray = tmp;
        if(typeof callback == "function") {
            Array.prototype.callback=callback;
            originalArray.callback(currentArray);
        }
        return arrayFilter;
    };
    return arrayFilter;
}