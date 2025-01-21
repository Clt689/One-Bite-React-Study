// 1. 동기 방식
// A:0.1초, B:10초, C:0.2초 -> 치명적인 단점 존재
// => 멀티스레드 방식 사용, JS에는 스레드가 1개 밖에 없음

console.log(1);

setTimeout(() => {
  // 3초 뒤에 2가 출력
  console.log(2);
}, 3000);

console.log(3);
