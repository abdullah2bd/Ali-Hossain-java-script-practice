/*

function myFunction() {
  console.log('Hello Function');

}


myFunction();
myFunction();
myFunction();


function myFunction(fullName, age, dateOfBirth) {
  
  console.log('Hello ' + fullName +  'i am '+ age + 'my date of birth ' + dateOfBirth);
}

myFunction('ali', 30,  2000);
myFunction('hossain', 32,  true);


*/



function isSubscribed() {
  console.log('Subscribed');
}

document.getElementById('btn').addEventListener('click', isSubscribed);



function clickMe() {
  console.log('Done');
}
document.getElementById('Clickme').addEventListener('click', clickMe);






(function(massage) {
  console.log('I am self-involved function', massage);
})('hello');
let math = function (x, y){
   console.log('I am working')
 
  // return x * y;
  // console.log('I am working')
};

console.log(math(3, 4));
console.log(math(4, 4));
console.log(math(4, 5));



function newFunc() {
  let firstName = 'ali';
  console.log(firstName);

  
}

newFunc();





let numbers = [4, 5, 6, 7];
let sqNumbers = numbers.map(function(number) {
  return number * number

 })

console.log(sqNumbers);



/* let add = function (x ,y){
   return x + y;

}
 console.log(5, 6);

*/

let add = (x ,y) => x + y;
console.log(5, 6);







function greet(firstName) {
  function sayHello() {
    alert('hello '+ firstName)
  }
  return sayHello();
}

greet('shovo');