/*function maxArraysNumber(){
    let array = document.getElementById(`arr`).value;
    let max = array[0];
    let min = array[0];
    
    for(i = 0; i < array.length; i++){
        if(array[i] >= max) max = array[i];
        else if(array[i] < min) min = array[i];
    }
    
    if(array.length == 0){
        document.getElementById('resarr1').innerHTML = (`Ничего не было введено :с`);
        document.getElementById('resarr2').innerHTML = (`Ничего не было введено :с`);
    }else{
        document.getElementById('resarr1').innerHTML = (`Минимальное число массива: ${min}`);
        document.getElementById('resarr2').innerHTML = (`Максимальное число массива: ${max}`);
    }
}*/
            
/*function pushData(){
    var array = document.getElementById(`arr`).value;
    
    var pval = [];
    
    for(var i = 0; i < array.length; i++){
        pval = pval + array[i];
        var max = pval[0];
        var min = pval[0];
        if(pval[i] >= max) max = pval[i];
        if(pval[i] < min) min = pval[i];
    }
    
    document.getElementById(`whatInsideTheArray`).innerHTML = (`Массив: ${pval}`);
    document.getElementById(`resarr1`).innerHTML = (`Минимальное число массива: ${min}`);
    document.getElementById(`resarr2`).innerHTML = (`Максимальное число массива: ${max}`);
}*/

function array(){
    let nums = new Array();
    size = 5;
    let i = 0, s = 0;
    for(i = 0; i < size; i++){
        nums[i] = parseInt(prompt("Введи числа в массив: "));
        s += nums[i];
        var max = Math.max(... nums);
        var min = Math.min(... nums);
        //innerHTML = ("Number you chose: " + nums[i] + "<br/>");
    }

    document.getElementById(`whatInsideTheArray`).innerHTML = (`Элементы массива: ${nums}`);
    document.getElementById(`resarr1`).innerHTML = (`Минимальное значение массива: ${min}`);
    document.getElementById(`resarr2`).innerHTML = (`Максимальное значение массива: ${max}`);    
}

document.getElementById(`mm`).addEventListener(`click`, array);