//1
var processNumbers = function(num1, num2, callback){
    return callback(num1, num2);
};
var result = processNumbers(3, 4, function(x, y){
    return x + y;
});
console.log("Sum: " + result);
  
//2
var greet = function(callback){
    return callback("Alice");
};
var result;
greet(function(name){
    result = "Hello, " + name + "!";
});
console.log(result);

//3
var calculate = function(num1, num2, callback){
    return callback(num1, num2);
};
var result;
calculate(10, 5, function(x, y) {
    result = x - y;
});
console.log("Difference: " + result);
  
  

