import { useState, useRef } from "react";

const OrderEditor = () => {
  const [order, setOrder] = useState({
    menu: "",
    address: "",
    request: ""
  });

  const addressRef = useRef();

  const onChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = () => {
    if (addressRef.current.value === "") {
      addressRef.current.focus();
      alert('주소를 입력해주세요.');
      return;
    }
    alert(`주문이 완료되었습니다. 메뉴 : ${order.menu}, 주소 : ${order.address}, 요청사항 : ${order.request}`);
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          메뉴 선택
        </div>
        <select
          name="menu"
          style={{ width: 300, padding: 5 }}
          value={order.menu}
          onChange={onChange}
        >
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          배달 주소
        </div>
        <input
          ref={addressRef}
          name="address"
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
          value={order.address}
          onChange={onChange}
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>
          배달 요청사항
        </div>
        <textarea
          name="request"
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
          value={order.request}
          onChange={onChange}
        />
      </div>
      <div>
        <button
          onClick={onSubmit}
          style={{ width: 300, padding: 5 }}
        >
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;