// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  {
    name: "이한빈",
    hobby: "풋살",
  },
  {
    name: "이정환",
    hobby: "테니스",
  },
  {
    name: "김효빈",
    hobby: "테니스",
  },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
// console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고
// 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
let mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});
// console.log(mapResult1, arr2);
let namesArr = arr1.map((item) => {
  return item.name;
});
// console.log(namesArr);

// 3. sort
// 배열을 '사전순'으로 정렬하는 메서드
let arr3 = [20, 5, 1, 3];
arr3.sort();
// console.log(arr3);
// for (let i = 0; i < arr3.length; i++) {
//   console.log(arr3[i].toString().charCodeAt(0));
// }
// console.log(arr3);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// sort와 달리, 원본 배열은 건들지 않고 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
let arr6 = ["Hello,", "I'm", "Nadnerde."];
const joined = arr6.join(" ");
console.log(joined);
