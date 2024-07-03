"use strict";
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
let tasks = [];
document.querySelector(".addTask").addEventListener('click', () => {
    const taskNameInput = document.querySelector(".taskName");
    const taskName = taskNameInput.value;
    console.log(taskName);
});
// 新增陣列
function createTask(name) {
    tasks.push({
        name: name,
        status: TaskStatus.Todo
    });
}
// 新增任務到任務列表
createTask("學習TS");
createTask("去超市購物");
//顯示任務
console.log(tasks);
