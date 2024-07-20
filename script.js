'use strict';
///******************************Section7 Dom & Events V70*********************/
//Selecting Elememnt in JavaScript
//query Selector is a method a vailable in document Object
//in to this method we need to pass in a selector ,this selector is excatly the same selector that we would use in css
//class
// console.log(document.querySelector(".message").textContent);
//id
// document.querySelector("#message");
///******************************Section7 Dom & Events V71*********************/
///******************************Dom and Dom Manipulation*********************/
//Dom Manipulation ==> java Script interact with webPage
//Dom Document Object Model:Sturctured Representation of HTML Documents
//Allows Javascript to Access Html Elements and Styles to Mainpulate Them(change text,html attributes ,css style from javascript)
//Dom is a connection point between html documents and javascript code
//Dom automatically created by the browser as soon as the html page loadsand it is stored in a tree sturctre like
//in this tree each html element is one object
//Dom tree Corresponding to this HTML tree Sturcture looks like a family tree,child element ,parent element ,sibling element
// for each element in the HTML there is one element node we can access with each of these nodes using javascript
//The Dom always start with the documents object & document is a Special Object that we have access to in javascript
//and this object serves as an entry point into the DOM(Query selector method is available on the document object)
//thet we say the document is the entry point to the DOM because we need it to start selecting elements
//the first child element of document is usually the HTML Element because that is usually the root element in all html DOCUMENTS
//Next HTML usually has two child elements head and body they are adjacent elements and they are siblings in our DOM
//we adding more and more children to the DOM tree inside head and body you have more child elements 
//and the two sections and the body even have child elements themselves //the fisrt paragraph also has a child

//DOM !== JAVASCRIPT
//DOM Methods and Properties for DOM Manipulation (for ex. document.querySelector() )not part of javascript (ecma)
// 
///******************************Section7 Selecting and Mainpulating Elements V72*********************/
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';
// //this already real DOM Manipulation because here we mainpulated the text document of one of the dom notes
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = '!';
// document.querySelector('.score').textContent='10';=
// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);
///******************************Section7 Handling Click Events V73*********************/
// event listener
// an event is something happen in the page (mouse Click , mouse moving ,key press)
// within an Event Lisner we can wait for certain event to happen and then react to it 
//in order to listen to events we first need to select the element where the event should happen
// document.querySelector('.check');//we select the button element itself and this will return an element &
//now in this element we can call EventLisner method & addEventIisner is a method we need to call it
// document.querySelector('.check').addEventListener('click', function() {
//    const guess =Number(document.querySelector('.guess').value);
//    console.log(guess , typeof(guess));
//    // document.querySelector('.message').textContent = 'correct answer';

//    if(!guess){
//       document.querySelector('.message').textContent="no number";
//    }
// })
// in addEventListener we first need to pass the type of Event (click) as a (first argument in the function)
// we need now to tell the event lisner what to do we need to spicify the reaction 
//as a second argument we need to pass in a function value as an argument 
//function is just a value and if function is a value we can pass it into another function as an argument just like any other value like string or number
 ///******************************Section7 Implementing the Game Logic V74*********************/
//what happen if guess is correct when its equal to the sercet number 
//Implement when it is go when its too low or too high
//***************************his solution *************************************/
let secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let score = 20;//this variable here called a state variable because this score is part
let highScore = 0;
function dispalyMessage(message){
   document.querySelector('.message').textContent=message;
}
//of so called application state which is bicaslly all the data that is relevant to the application
//state ======= all the data that is relevant to the application
//we want all data be available some where on the code not only on the dom
document.querySelector('.check').addEventListener('click', function() {
   const guess =Number(document.querySelector('.guess').value);
   console.log(guess , typeof(guess));
   // document.querySelector('.message').textContent = 'correct answer';
   //there were no input
   if(!guess){
      dispalyMessage("⛔ no Number");
      // document.querySelector('.message').textContent="⛔ no Number";
   }
   //when player wins
   else if(guess === secretNumber){
      dispalyMessage("🎉 Correct Number");
      // document.querySelector('.message').textContent="🎉 Correct Number";
      document.querySelector('.number').textContent=secretNumber;
      document.querySelector('body').style.backgroundColor ='#60b347';//inline style
      document.querySelector('.number').style.width='30rem';//inline style
      if(score > highScore){
          highScore = score;
         document.querySelector('.highscore').textContent=highScore;
      }
   }
   //when player loss
   else if(guess!==secretNumber){

      if(score > 1){
        dispalyMessage(guess > secretNumber ?"📉 Too High":"📈 Too Low");
      //   document.querySelector('.message').textContent="📉 Too High";
         score--;
         document.querySelector('.score').textContent=score;
      }
      else{
         dispalyMessage("💥 You Lost the Game");
         // document.querySelector('.message').textContent="💥 You Lost the Game";
         document.querySelector('.score').textContent=0;
      }
   }
   //when guess is too high
   // else if(guess > secretNumber){
   //    if(score > 1){
   //       document.querySelector('.message').textContent="📉 Too High";
   //       score--;
   //       document.querySelector('.score').textContent=score;
   //    }
   //    else{
   //       document.querySelector('.message').textContent="💥 You Lost the Game";
   //       document.querySelector('.score').textContent=0;
   //    }
   // }
   //    //when guess is too low
   // else if(guess < secretNumber){
   //    if(score > 1){
   //       document.querySelector('.message').textContent="📈 Too Low";
   //       score--;
   //       document.querySelector('.score').textContent=score;
   //    }
   //    else{
   //       document.querySelector('.message').textContent="💥 You Lost the Game";
   //       document.querySelector('.score').textContent=0;
   //    }
   // }
})
document.querySelector('.again').addEventListener('click',function(){
   let score=20;//wrong
    secretNumber = Math.trunc(Math.random()*20)+1;//wrong //without let because we wan't to do new sercet number variable
   document.querySelector('.number').textContent='?';
   document.querySelector('.guess').value='';//wrong
   dispalyMessage('Start guessing...');
   // document.querySelector('.message').textContent='Start guessing...';
   document.querySelector('.score').textContent=score;//wrong
   document.querySelector('body').style.backgroundColor='#222';
   document.querySelector('.number').style.width='15rem';
})
// Math is object javascript gives us and on  there we have a lot of differnt methods and random is one of them
//andd it gives us number between zero and one
//if i want number between 0 and 20 i will multiply it by 20
//to remove decimal we use Math.trunc

//we store his score bicaslly in the Dom but we use variable to hold our data and we dont depend on the Dom

//***************************his solution *************************************/
