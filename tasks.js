// //介面型別
// interface book{
//     isbn:string,
//     title:string,
//     author:string,
//     year:number
// }
// 定義任務狀態列舉
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["Todo"] = 0] = "Todo";
    TaskStatus[TaskStatus["InProgress"] = 1] = "InProgress";
    TaskStatus[TaskStatus["Done"] = 2] = "Done";
})(TaskStatus || (TaskStatus = {}));
// 空任務陣列
var tasks = [];
document.querySelector(".addTask").addEventListener('click', function () {
    var taskNameInput = document.querySelector(".taskName");
    var taskName = taskNameInput.value;
    if (taskName) {
        var taskItem = {
            name: taskName,
            status: TaskStatus.Todo
        };
        createTask(taskItem);
    }
});
// 新增陣列
function createTask(task) {
    tasks.push(task);
    updateTaskList();
}
function updateTaskList() {
    var taskListHTML = '';
    tasks.forEach(function (task) {
        taskListHTML += "<li>".concat(task.name, " - \u72C0\u614B: ").concat(TaskStatus[task.status], "</li>");
    });
    document.querySelector(".taskList").innerHTML = taskListHTML;
    var input = document.querySelector(".taskName");
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
