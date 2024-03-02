import axios from "axios";
import { useEffect } from "react";

// 업비트 - quotation api - 마켓 코드 조회
// docs: https://docs.upbit.com/reference/%EB%A7%88%EC%BC%93-%EC%BD%94%EB%93%9C-%EC%A1%B0%ED%9A%8C
// get
// https://api.upbit.com/v1/market/all
// {market: 'KRW-BTC', korean_name: '비트코인', english_name: 'Bitcoin'}
// https://api.upbit.com/v1/market/all?isDetails=true
// {market: 'KRW-BTC', korean_name: '비트코인', english_name: 'Bitcoin', market_warning: 'NONE', market_event: {…}}

const MarketCode = () => {
  /* // 모든 데이터 어레이로 가져오기
  const getAllMarkets = async () => {
    const response = await axios.get(
      `https://api.upbit.com/v1/market/all?isDetails=true`
    );
    var data = response.data;
    console.log(data);
  };

  useEffect(() => {
    getAllMarkets();
  }, []);
  */

  /* // 마켓 이름 가져오기: KRW, BTC, USDT 마켓 존재 
  const getMarket = async () => {
    const response = await axios.get(`https://api.upbit.com/v1/market/all`);
    var data = response.data;
    data.map((v, i) => {
      console.log(i, v.market);
    });
  };

  useEffect(() => {
    getMarket();
  }, []);
  */

  /* //KRW 마켓 가져오기
  const getKRWMarket = async () => {
    const response = await axios.get(`https://api.upbit.com/v1/market/all`);
    var data = response.data;

    var KRWMarket = [];
    var BTCMarket = [];
    var USDTMarket = [];
    var undefinedMarket = [];

    data.map((v, i) => {
      switch (v.market.split("-")[0]) {
        case "KRW":
          KRWMarket.push(v.market.split("-")[1]);
          break;
        case "BTC":
          BTCMarket.push(v.market.split("-")[1]);
          break;
        case "USDT":
          USDTMarket.push(v.market.split("-")[1]);
          break;
        default:
          undefinedMarket.push(v.market.split("-")[1]);
          break;
      }
    });
    console.log("KRW Market", KRWMarket);
  };

  useEffect(() => {
    getKRWMarket();
  }, []);
  */

  /* // 코인의 한국어 이름 가져오기
  const getKoreanNames = async () => {
    const response = await axios.get(`https://api.upbit.com/v1/market/all`);
    var data = response.data;
    data.map((v, i) => {
      console.log(i, v.korean_name);
    });
  };

  useEffect(() => {
    getKoreanNames();
  }, []);
  */

  /* // 코인의 영어 이름 가져오기
  const getEnglishNames = async () => {
    const response = await axios.get(`https://api.upbit.com/v1/market/all`);
    var data = response.data;
    data.map((v, i) => {
      console.log(i, v.english_name);
    });
  };

  useEffect(() => {
    getEnglishNames();
  }, []);
  */

  /* // 코인 경보 정보 가져오기
  const getMarketEvents = async () => {
    const response = await axios.get(
      `https://api.upbit.com/v1/market/all?isDetails=true`
    );
    var data = response.data;
    data.map((v, i) => {
      console.log(i, v.market_event);
    });
  };

  useEffect(() => {
    getMarketEvents();
  }, []);
  */

  return <div>market code!</div>;
};

export default MarketCode;
