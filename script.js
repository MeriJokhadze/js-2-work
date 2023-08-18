// შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და 
//დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function sumPositiveNumbers(sequence) {
    let positiveSum = 0;
    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] > 0) {
        positiveSum += sequence[i];
      }
    }
    return positiveSum;
  }

function posNum(sequence) {
    let sum = 0;
    for (let i in sequence){
        if (sequence[i] > 0 ){
            sum += sequence[i];
        }

    }
    return sum;
}
let sequence = [
    2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8
]

let secondVersion = posNum(sequence);
//   let fun = sumPositiveNumbers(sequence);
console.log(secondVersion);

// ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
//10, 50, 6, 7, 8, 11, 6, 3, 9
 
var numbers = [10, 50, 6, 7, 8, 11, 6, 3, 9,100, 333];

function numbersSum (numbers){
    let result = 0;  
    for (let item in numbers){
         result += numbers[item] ;
    }
    return result;
}

let resultOfFunction=numbersSum(numbers);
console.log(resultOfFunction);



 // ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin 
 //არის true და false თუ isloggedin ფროფერთი არის false;


let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  function userName (user){
    if (user.isloggedin == true){
        // console.log(user.firstname + " "+user.lastname + " " +true);
        return `${user.firstname} ${user.lastname}`
      } return false;
   }
console.log(  userName(user));
      
  

//   შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. 
//   ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

function newF(...parametr){
     let value = 0 ;
     for (let i of parametr){
        if (i > value){
            value = i;
        }
     }
     return value;
}

let resultOf = newF(3,4,6,84,3);
console.log(resultOf);

// დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი;
//  თუ ლუწია დააბრუნოს - ‘this number is even; თუ კენტია დააბრუნოს - this number is odd

function oddOrEven(numberValue){
    if (numberValue % 2 == 0) {
        return "this number is even";
    } else {
        return "this number is odd";
    }
}

let resultOfOdd = oddOrEven(5);
console.log(resultOfOdd);

//
// მოცემულია მასივი:
// let array = [1,2,3,4,5];

// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array = [1,2,3,4,5];

for (let i= 0; i < array.length; i++){
    console.log(array[i]);
    
}


// // 
// ფუნქციის საშუალებით გამოთვალეთ უსერის ასაკი და დაამატეთ შემდეგი პირობა, 
//თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;


let userAge = (age) => age > 18 ? "srulwlovani" : "arasrulwlovanu";
userAge(4);
console.log(userAge(99));

// calke userAge-s ar aqvs rame mnishvneloba ? parametris gadacemis gareshe ar ibechdeba


//მოცემულია მასივი
let array2 = [1, 2, 3, 4,5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი
for (let item of array2){
    if (item == 5){
        console.log("aris");
        break;
    }
}


// მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
 let array5 = [1, 2, 3, 7, 6, 9];

 for (let item of array5){
    if (item == 7){
        continue;
    }
    console.log(item);
 }




