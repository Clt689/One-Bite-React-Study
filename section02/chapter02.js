// JavaScript의 단락 평가
// = 논리 연산자에서 첫 번째 값만으로도 결과가 나오면 두 번째 값에 접근조차 X

// function returnFalse() {
//   console.log("False 함수");
//   return undefined;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return 10;
// }

// console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이한빈" });
