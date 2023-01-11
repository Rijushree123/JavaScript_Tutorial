var add = document.getElementById('addToDo');
var inputtext = document.getElementById('inputField');
var toDoContainer = document.getElementById('toDoContainer');
//console.log(inputtext.innerHTML);

var deleteBtn = document.createElement('button');

// Add classes to del button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

// Append text node
deleteBtn.appendChild(document.createTextNode('X'));


add.addEventListener('click',addItem);
inputtext.addEventListener('keypress',function(e){
    if(e.key=="Enter"){
        addItem();
    }
});
function addItem(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputtext.value;
    paragraph.appendChild(deleteBtn);
    toDoContainer.appendChild(paragraph);
    //console.log(paragraph.innerText);
    inputtext.value='';
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    deleteBtn.addEventListener('click', removeItem);
}

function removeItem(e){
    //if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        //var li = e.target.parentElement;
        toDoContainer.removeChild(paragraph);
      }
    //}
  }
