import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function CurrencyInput({ currency, value, onChange }) {
  return (
    <div>
      <label>{currency}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(currency, e.target.value)}
      />
    </div>
  );
}

function App() {
  const [state, setState] = useState({
    krw: 0,
    usd: 0,
  });
  const [exchangeRate, setExchangeRate] = useState(1300); // 기본 환율 값

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          "https://v6.exchangerate-api.com/v6/523fade1281e227667ab634a/latest/USD"
        );
        const rate = response.data.conversion_rates.KRW;
        setExchangeRate(rate);
      } catch (error) {
        console.error("환율 정보를 가져오는 데 실패했습니다.", error);
      }
    };

    fetchExchangeRate();
  }, []);

  const onChange = (currency, value) => {
    if (currency === "krw") {
      setState({
        krw: value,
        usd: (value / exchangeRate).toFixed(2),
      });
    } else {
      setState({
        krw: (value * exchangeRate).toFixed(2),
        usd: value,
      });
    }
  };

  return (
    <>
      <h2>환율 변환기 (KRW-USD)</h2>
      <CurrencyInput currency={"krw"} value={state.krw} onChange={onChange} />
      <CurrencyInput currency={"usd"} value={state.usd} onChange={onChange} />
    </>
  );
}

export default App;
