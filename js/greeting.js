document.getElementById('nameOfUser').innerHTML = (localStorage.getItem('name'));

function greeting(){
    let name = document.getElementById('h').value;
    localStorage.setItem('name', name.toString());
    
    if(name.length == 0){
        alert('Ничего не было введено :с');
    }else if(name.length != 0){
        document.getElementById('nameOfUser').innerHTML = (name);
    }
}

document.getElementById('enterName').addEventListener('click', greeting);