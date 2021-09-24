var readLineSync=require('readline-sync');
var score=0;
function welcome()
{
var userAns=readLineSync.question("What is ur name?");
console.log("Welcome "+userAns+" Do u know abt bollywood");
}
var queBank = [
    {
        question: `
    Bhai of bollywood?
    a: Salman
    b: ShahRukh
    c: Aamir\n`,
        answer: "a"
    },
    {
        question: `
    Badshaah of Bollywood?
    a: Imran Khan
    b: Salim khan
    c: Shahrukh khan\n`,
        answer: "c"
    },
  {
        question: `
    Khalynayak of industry?
    a: Salman khan
    b: Sanjay Dutt
    c: Fardeen khan\n`,
        answer: "b"
    },
  {
    question: `
    Angry young man of Bollywood?,
    a: Amitabh
    b: rishi Kapoor\n`,
    answer: "a"
 }



];
function play(question,answer)
{

var userAns=readLineSync.question(question);
if(userAns==answer)
{
  console.log("You are correct!!");
  score=score+1;
}
else
{
console.log("You are wrong!!");
}
console.log("Current Score= ",score)
console.log("********************************")
}
welcome();
for(var i=0;i<queBank.length;i=i+1)
{
  currentQuestion=queBank[i]
  play(currentQuestion.question,currentQuestion.answer);
}
console.log("Yay! Your Total score is",score);