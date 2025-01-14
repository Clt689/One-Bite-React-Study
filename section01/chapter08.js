// 1. null 병합 연산자
// = 존재하는 값을 추려내는 기능을 함.
// = null, undefined가 아닌 값을 찾아내는 연산자

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
// console.log(var5);

let userName = "이한빈";
let userNickName = "Nadnerde";

// 의도
// : 이름값이 있으면 이름을 출력하고, 아니면 닉네임으로 출력
let displayName = userName ?? userNickName;
// console.log(displayName);

// 2. typeof 연산자
// = 값의 타입을 문자열로 반환하는 기능을 하는 연산자
// console.log(typeof "hel");

// 3. 삼항 연산자
