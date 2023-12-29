import axios from "axios";
import { useEffect, useState } from "react";
export default function QuoteBorder() {
  const [quote, setQuote] = useState([]);
  const [length, setLength] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  useEffect(() => {
    const getQuotes = async () => {
      setIsReady(false);
      try {
        const { data } = await axios.get("https://type.fit/api/quotes");
        console.log(data);
        const length = data.length;
        setIsReady(true);
        setQuote(data);
        setLength(length);
      } catch (err) {
        console.log(err);
      }
    };
    getQuotes();
    randomNumber_()
  }, []);

  const randomNumber_ = () => {
    const number = Math.floor(Math.random() * length);
    setRandomNumber(number);
    console.log(number);
  };
  return (
    <span
      className="min-w-[500px] w-fit h-[400px] bg-white rounded-2xl flex flex-col gap-[50px] items-center justify-center px-9"
      onClick={() => {
        randomNumber_();
      }}
    >
      {/* <h1 className="text-[20px] font-[600] ">{`"${quote[randomNumber()]}"`}</h1>
    <p>{quote[randomNumber()]}</p> */}
      {isReady && (
        <h2 className="text-[24px] font-[600]">{quote[randomNumber].text}</h2>
      )}
      {isReady && (
        <p className="text-[16px] font-[500]">{quote[randomNumber].author}</p>
      )}
    </span>
  );
}
