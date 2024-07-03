"use strict";
function add(a, b) {
    return a + b;
}
let add2 = function (x, y) {
    return x + y;
};
function stradd(str1, str2) {
    return str1 + str2;
}
function checknum(num) {
    return num > 10;
}
function print(message) {
    console.log("message");
    alert("322");
}
let product = {
    name: "james",
    price: 99999,
    instock: 190,
};
let numbers = [1, 2, 3];
let fruits = ['apple', 'banana', 'water'];
let any = [123, 'apple', 'number>10'];
let week = [
    ['apple', 'water'],
    ['food', 'tomatoes']
];
let person;
person = ["alice", 34, true];
let csv = [
    [1, 'apple', 3, true],
    [2, 'water', 4, false],
];
let id;
id = "1234";
id = 234;
let names;
names = "alice";
names = ["apple", "banana"];
function displayprrice(price) {
    if (typeof price === "number") {
        console.log(`價格:${price}`);
    }
    else {
        console.log(`價格範圍:${price[0]}~${price[1]}`);
    }
}
//列舉//
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["author"] = 1] = "author";
    Role[Role["readonlyuser"] = 2] = "readonlyuser";
})(Role || (Role = {}));
let user = {
    name: "alice",
    role: Role.admin
};
console.log(user);
