function add(a, b) {
    return a + b;
}
var add2 = function (x, y) {
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
var product = {
    name: "james",
    price: 99999,
    instock: 190,
};
var numbers = [1, 2, 3];
var fruits = ['apple', 'banana', 'water'];
var any = [123, 'apple', 'number>10'];
var week = [
    ['apple', 'water'],
    ['food', 'tomatoes']
];
var person;
person = ["alice", 34, true];
var csv = [
    [1, 'apple', 3, true],
    [2, 'water', 4, false],
];
var id;
id = "1234";
id = 234;
var names;
names = "alice";
names = ["apple", "banana"];
function displayprrice(price) {
    if (typeof price === "number") {
        console.log("\u50F9\u683C:".concat(price));
    }
    else {
        console.log("\u50F9\u683C\u7BC4\u570D:".concat(price[0], "~").concat(price[1]));
    }
}
//列舉//
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["author"] = 1] = "author";
    Role[Role["readonlyuser"] = 2] = "readonlyuser";
})(Role || (Role = {}));
var user = {
    name: "alice",
    role: Role.admin
};
console.log(user);
