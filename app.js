 const addForm = document.querySelector('.add');
 const list = document.querySelector('.todos');
 const search = document.querySelector('.search input');


 const generateTemplate = todo =>{
    
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
`;
   
    list.innerHTML += html;
   
 }


addForm.addEventListener('submit' , e =>{
  e.preventDefault();
  const todo = addForm.add.value.trim();
  console.log(todo); 

  if(todo.length){
  generateTemplate(todo);
  addForm.reset(); 
  }

});


//  4. Deleting Todos
list.addEventListener('click' , e => {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});


const filterTodos = (term) =>{


    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
      .forEach((todo) => todo.classList.add('filtered'));
        
      // console.log(todo.textContent); 
      // return true;
    


    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
        
      // console.log(todo.textContent); 
      // return true;
    

};

//  5. Searching & Filtering Todos
search.addEventListener('keyup' , () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});


//  1. Dates & Times in JavaScript

const now = new Date();

console.log(now);
console.log('getFullYear:' , now.getFullYear());
console.log('getMonth:' , now.getMonth());
console.log('getDate:' , now.getDate());
console.log('getDay:' , now.getDay());
console.log('getHours:' , now.getHours());
console.log('getMinutes:' , now.getMinutes());
console.log('getSeconds:' , now.getSeconds());


console.log(now.toLocaleString());

//  2. Timestamps & Comparisons
const before = new Date('February 1 2021 7:30:30');

const diff= now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);
console.log(`the blog was written ${days} ago`);















































































































































































































