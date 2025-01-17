// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
// console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "이한빈",
  age: 27,
  hobby: "풋살",
};

let { name, age: myAge, hobby, extra = "hi" } = person;

// 3. 객체 구조 분해 할당을 이용해서, 함수의 매개변수를 받는 방법
// 매개변수 부분에 { } 중괄호를 사용해서 구조 분해 할당이라는 것을 명시해줘야 함.
const func = ({ name, age, hobby, extra = "hi" }) => {
  console.log(name, age, hobby, extra);
};

func(person);
