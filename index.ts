#! /usr/bin/env node


import inquirer from "inquirer";



console.log("Game:Lets guess a number between 1-50  in 5 tries")




let random_num=Math.floor(Math.random() *50+1);
//console.log("random num is ",random_num)

let actual_Answer:number=random_num; // rendom  nbr auto genrated
let num_tries:number=5;

interface typ_Ans{
    Myguess :number
}

while(num_tries>0){
const answer:typ_Ans =await inquirer.prompt([

{name: "Myguess",
message: "insert a number",
type: "number",
},

])

//console.log(answer)

if (answer.Myguess=== actual_Answer)
{console.log("Yaa Hooo.. You guess the right nbr... Game End!");
num_tries=0
}else{
    console.log("Attempt your next try...")};
    if (actual_Answer>answer.Myguess){console.log("Think higher")}
    else{console.log("Think lower")}
    console.log(`You have ${num_tries-1} left`)

num_tries--;// num_tries = num_tries-1

};


