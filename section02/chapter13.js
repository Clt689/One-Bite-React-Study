// Promise의 3가지 상태.
// 해결(resolve) : 대기(Pending) -> 성공(Fulfilled)
// 거부(reject) : 대기(Pending) -> 실패(Rejected)

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수 = executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

// then 메서드
// = 그 후에

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
