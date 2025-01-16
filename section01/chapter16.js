const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 메서드
// = 값이 함수인 프로퍼티를 말함. 객체의 동작을 정의.
const person = {
  name: "이한빈",

  // 메서드 선언
  sayHi() {
    console.log("hello!");
  },
};

person.sayHi();
