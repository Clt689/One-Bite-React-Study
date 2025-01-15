// 1. 콜백 함수
function main(value) {
  value();
}

// 콜백 함수
// = 뒷전에 실행되는, 나중에 실행된다는 뜻

main(() => {
  // console.log("I am sub.");
});

// 2. 콜백 함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});
