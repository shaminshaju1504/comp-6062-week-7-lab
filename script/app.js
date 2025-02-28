let number=document.querySelector('#numberInput');
console.log(number);
number.addEventListener('input',()=>{
    console.log(number.value);
    if( number.value <= -10 || number.value >= 10)
        {
            alert("The number should be between -10 and 10");
        }

})
const fruit={
    Name:"Apple",
    Color:"Red",
    Taste:"Sweet"

};
let Fname =document.querySelector('#FruitName');
let Fcolor =document.querySelector('#FruitColor');
let FTaste =document.querySelector('#FruitTaste');

Fname.innerHTML=`Name:${fruit.Name}`;
Fcolor.innerHTML=`Color:${fruit.Color}`;
FTaste.innerHTML=`Taste:${fruit.Taste}`;
