import { useState } from "react";

export default function App() {
  const [onBulb, setOnBulb] = useState(false);

  function toggle() {
    setOnBulb(prev => !prev);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5  ">
      {onBulb ? (
        <img 
        
          src="https://5.imimg.com/data5/WL/SG/MY-8835990/10w-gls-light-bulb.jpg"
          alt="Bulb On"
          className= "w-72 h-80 object-contain "
        />
      ) : (
        <img
          src="https://thumbs.dreamstime.com/b/    d-illustration-empty-light-bulb-isolated-white-background-realistic-d-rendering-electric-lamp-inside-d-103349315.jpg"
          alt="Bulb Off"
          className= "w-72 h-80 object-contain"
        />
      )}

      <button
        onClick={toggle}
         className="px-6 py-3 rounded-lg bg-stone-800 hover:bg-yellow-500 text-white font-bold"
      >
        {onBulb ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}






