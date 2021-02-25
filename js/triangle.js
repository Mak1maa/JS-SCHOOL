function areaOfTriangle(){
    let h = document.getElementById('height').value;
    let a = document.getElementById('a').value;
    let area = 0.5 * a * h;

    if(h == 0 && a == 0){
        document.getElementById('restri').innerHTML = ('Ничего не было введено :c');
    }else if((h == 0 && a != 0) || (h != 0 && a == 0)){
        document.getElementById('restri').innerHTML = ('В одной ячейке не было введено значение :c');
    }else{
        document.getElementById('restri').innerHTML = (`Площадь треугольника равна ${area}`);
    }
}

document.getElementById('areaThisTriangle').addEventListener('click', areaOfTriangle);