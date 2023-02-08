//var select = document.querySelector('select');
//select.addEventListener('input', runEvent);

var form = document.querySelector('form');

form.addEventListener('submit', runEvent);

function runEvent(e){
    e.preventDefault();
    //console.log(e.target.value);
}

var itemInput = document.querySelector('input[type="text"]');
itemInput.addEventListener("keydown", runEvent);
function runEvent(e){
    console.log(e.target.value);
    document.getElementById("title").innerHTML='<li>'+e.target.value+'</li>';
}