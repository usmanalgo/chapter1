// function greetuser(){
//     console.log('assalam allikum')
//     console.log('how are you')
//     console.log('what are you doing')
//     console.log('where are you from')
// }
// greetuser()



// function greetuser(){
//     console.log('hello world')
// }
// greetuser()


// function greet(){
//     console.log('hello ')
// }
// greet()

// function menu(item1 , item2 , item3){
//     console.log('sab sy pehly ' +  item1  + ' phir ' + item2 + ' or '  +  item3 )
// }

// menu("biryani" , "qorma" , "7up" )
// menu("biryani" , "qorma" , "7up" )


// // if or else
//  var num1 =12
//  var num2 =10
//  console.log( num1 > num2 || num2 < num1) 

//  var usman =2000
//     if (usman > 2100){
//         console.log('happy')
//     }else {console.log('sad')

//     } 


//     var value = 3
//     if (value === 8 ){
//         console.log('value is divisible by 3')
//     }else {
//         console.log('value is not divisible by 3')
//     }



// var number = prompt ('enter any number')
// if(number % 2 === 0 ){
//     console.log('no is even')
// }else{
//     console.log('no is odd')
// }
// var usman = prompt ('enter your name') ;
// console.log(usman)

// var  no = prompt ("enter your age")
// if (no > 18 ){
//     console.log('old enough')
// }else {(no < 18)
//     console.log('to young')
// }   


// var myname = 'usman'
// var user = prompt('enter your name')
// if(user == myname){
//     console.log('ohh good to see you another usman is here')
// }else{
//     console.log('')
// }





// function checkOddEven(){
//     alert("hello")
// }


// function usman(item){
//     console.log(item)
// }




// function menu(item , item2){
//     console.log('ye hy ' + item +  item2)
// }


// var name = prompt("Enter student name: ");
// var age = prompt("Enter student age: ");
// var gender = prompt("Enter student gender (Male/Female): ");


// alert(name)
// alert(' your age is ' + age)
// alert('your gender is ' + gender)



// var name = prompt("Enter your name:");
// var age = prompt("Enter your age:");
// var occupation = prompt("Enter your occupation:");


// var bioData = "Name: " + name + "\nAge: " + age + "\nOccupation: " + occupation;

// // Display the bio data in an alert box
// alert("Bio Data:\n\n" + bioData);


// var message = "helloworld!"
// console.log(message);


// var age=17;
// alert('your age is ' + age)


// var birthyear='1998';

// document.write('my birthyear is' + birthyear)

// var num1=5;
// var num2=8;
// var result= num1 + num2;
// console.log(result)
// document.write('sum of ' + num1 + " and " + num2  + ' is '  + result )


// function buttton(){
//     console.log('hello')
// }



// vat visitCount = 0;


// function trackVisits() {
//     visitCount++;
//     console.log(`You have visited this page`);
// }

// document.write()



// alert('Welcome to our website! We hope you enjoy your visit.');



// var text = "pizza"; 
// var result = text.slice(3);


// function user(){
//     console.log('hello world!')
// }





// var h1 = document.querySelector("#head");
// var para = document.querySelector('#para');
// var div = document.querySelector('div');



// function changeHead(){
//     h1.innerHTML = "change through javascript"
//     para.innerHTML = "para through <br/> javascript"
//     div.innerHTML = "<h1>Hello world</h1><ul><li>Home</li><li>about</li><li>contact</li></ul>"
// }

// var num = 0;

// function addNumber(){
//     if(num < 10)
//         num += 1;
//         console.log(num)
//         addNumber()
// }

// addNumber()

// var h1 =document.querySelector('h1')
// h1.addEventListener('click' , function(){
//     h1.innerHTML='hello to the world'
// h1.style.fontSize='8rem'
// h1.style.background='red'
// h1.style.color='white'
// }
// )


// var bulb = document.querySelector('#buld')
// var btn = document.querySelector('button')
// btn.addEventListener('click' , function(){
//     bulb.Style.background='red'
// })



// var h1 = document.querySelector('h1')
// var p = document.querySelector('p')
// var div = document.querySelector('div')

// function headchange(){
//     h1.innerHTML="change head"
//     p.innerHTML="para changed"
// }


var h1 = document.querySelector("#head");
var para = document.querySelector('#para');
var div = document.querySelector('div');


function changeHead(){
    h1.innerHTML = "change javascript"
    para.innerHTML = "para change javascript"
    div.innerHTML = "<h1>Hello world!</h1>"
}
changeHead()
