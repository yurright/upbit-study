import axios from "axios";
import { useEffect } from "react";
import MarketCode from "./components/MarketCode";

const App = () => {
  return (
    <div className="bg-red-100">
      <div>Hi upbit!</div>
      <MarketCode />
    </div>
  );
};

export default App;
