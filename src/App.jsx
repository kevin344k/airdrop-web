import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";
import data from "./data/data";

function App() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(data);
  }, []);

  console.log(arr);

  return (
    <div className="w-screen-md mx-auto">
      <h1 className="text-3xl font-bold mb-3">💵 Airdrops 💵 </h1>
      <div className="flex flex-wrap gap-6 pt-8 pb-8">
        {arr.length === 0 ? <h1>No hay Airdrops</h1> : ""}
        {arr.map((element) => (
          <Card data={element}></Card>
        ))}
      </div>
      <p className="read-the-docs">made by kevin344k...</p>
    </div>
  );
}

export default App;
