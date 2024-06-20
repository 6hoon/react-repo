import { useState } from "react";

const Blub = () => {
  let [light, setLight] = useState("OFF");

  console.log(light);

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "OFF" ? "ON" : "OFF");
          }}
        >
          {light === "OFF" ? "ON" : "OFF"}
        </button>
      </div>
    </>
  );
};
export default Blub;
