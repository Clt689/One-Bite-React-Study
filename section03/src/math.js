// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// module.exports = {
//   add,
//   sub,
// };

// default => math 모듈을 대표하는 단 하나의 기본 값이 된다.
export default function multiply(a, b) {
  return a * b;
}
