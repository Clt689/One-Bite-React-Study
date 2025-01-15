// 함수 선언

function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();
  let area = width * height;

  return area;
}

console.log(getArea(10, 20));
