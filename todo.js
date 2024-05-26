
todoList=[];

function addtodoList(){
  let todoListHTML='';
for (let i=0;i<todoList.length;i++){
  const todoObject=todoList[i];
  // const name=todoObject.name;
  // const date=todoObject.date;
const {name,date}=todoObject;
  const html =`
  <div>${name}</div> <div>${date}</div>
  <button class="delate-button" ;onclick="todoList.splice(${i},1);addtodoList() ">Delete</button>`;
  todoListHTML +=html;
}
//console.log(todoListHTML);
document.querySelector('.js-todo-list').innerHTML=todoListHTML;

}
function addTodo(){
  const inputEle= document.querySelector('.js-name-input');
  const dateEle=document.querySelector('.js-date-input');
 const date=dateEle.value;
  const name=inputEle.value;
  //console.log(name);
  todoList.push({
    //name:name,
    //date:date
    name,
    date
});
  console.log(todoList);
  inputEle.value='';
  addtodoList();
}