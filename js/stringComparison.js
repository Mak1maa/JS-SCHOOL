function stringComparison(){
    let stringFirst = document.getElementById(`s1`).value;
    let stringSecond = document.getElementById(`s2`).value;

    if(stringFirst.length == 0 && stringSecond.length == 0){
        document.getElementById(`rescom`).innerHTML = (`Ничего не было введено :c`);
    }else if((stringFirst.length == 0 && stringSecond.length != 0) || (stringFirst.length != 0 && stringSecond.length == 0)){
        document.getElementById(`rescom`).innerHTML = (`В одной из ячеек не была введена строка :c`);
    }else if(stringFirst.length == stringSecond.length){
        document.getElementById(`rescom`).innerHTML = (`Результат сравнения по количеству символов - ${true}`);
    }else if(stringFirst.length > stringSecond.length || stringSecond.length > stringFirst.length){
        document.getElementById(`rescom`).innerHTML = (`Результат сравнения по количеству символов - ${false}`);
    }
}

document.getElementById(`strings`).addEventListener(`click`, stringComparison);