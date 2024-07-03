
// //介面型別
// interface book{
//     isbn:string,
//     title:string,
//     author:string,
//     year:number
// }

// let mybook :book={
//     isbn:"321456789",
//     title:"james",
//     author:"TOM",
//     year:2002
// }

// function printbook(book:book){
//     console.log(`title:${book.title}`)
// }

// printbook(mybook);


//介面型別
interface Task{
    name:string,
    status:TaskStatus
}

// 定義任務狀態列舉

enum TaskStatus {
    Todo,
    InProgress,
    Done
}

// 空任務陣列

let tasks:Task[] = [];

document.querySelector(".addTask")!.addEventListener('click',()=>{
    const taskNameInput = <HTMLInputElement>document.querySelector(".taskName");
    const taskName = taskNameInput.value;

   if(taskName){
    const taskItem:Task={
        name:taskName,
        status: TaskStatus.Todo
    }
    createTask(taskItem);
   }
})

// 新增陣列
function createTask(task:Task){
    tasks.push(task);
    
    updateTaskList();
}

function updateTaskList(){
    let taskListHTML = '';
    tasks.forEach(task =>{
        taskListHTML  += `<li>${task.name} - 狀態: ${TaskStatus[task.status]}</li>`;
    })
    document.querySelector(".taskList")!.innerHTML = taskListHTML;

    const input = <HTMLInputElement> document.querySelector(".taskName");
    input.value = '';
}




// //顯示任務

// console.log(tasks);

// const txt = document.querySelector(".taskName") as HTMLInputElement;
// console.log(txt.value)

// //介面型別
// interface book{
//     isbn:string,
//     title:string,
//     author:string,
//     year:number
// }

// let mybook={
//     isbn:"12352987",
//     title:"ASCDF",
//     author:"TOM",
//     year:2002,
// }
// function printbook(book:book){
//     console.log(`title:${book.title}`);
// }
// printbook(mybook);

