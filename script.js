
//Performing a task function;
function salutations(firstName,lastName){
    console.log("Hello my name is" + firstName,lastName);
}

salutations("Wema","Midecha")

//Calculating a value function;
function areaSquare(lenght,width){
    return lenght*width;
}
areaSquare(10,15);
console.log(areaSquare(10,15));

//for loop;
for(let number=1; number <=20; number+=2){
    console.log(number);
}


//while loop;
let age=5;
while(age<=50){
    console.log(age); age+=5;
}

//Conditions;
let grade=50;
if (grade <=50){
    console.log("You have to resit this paper to move on");
}
else{
    console.log("You have passed!");
}



//DOM Manipulation;
const welcome=document.getElementById("welcome");
welcome.textContent="The heading has been Manipulated";

const learn=document.getElementById("learn");
learn.textContent="This paragragh has been manipulated";

const magicWand= document.createElement('div');
magicWand.setAttribute('id','wand1');
magicWand.setAttribute('class','itemWand');
magicWand.textContent="My Magic World";
learn.append(magicWand);

const body= document.body;
body.append("Hi cousins I'm back!");

const highlight= document.querySelector(".highlight");
highlight.append("We live and learn");












