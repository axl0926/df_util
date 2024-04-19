"use clinet"

import { Dispatch, SetStateAction } from "react";
type CountType = {
  legendary: number;
  unique: number;
  epic: number;
  rare: number;
};


export default function InputBox({grade,count,setCount}:{grade:string,count:CountType,setCount:Dispatch<SetStateAction<CountType>>}) {
  const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount({
        ...count,
        [grade]: Number(event.target.value),
    });
};
  return (
    <div className="flex m-3 border-2 gap-4 p-3 w-1/3 items-center">
      <p className=" w-1/6 text-center">{{legendary:"레전더리",unique:"유니크",epic:"에픽",rare:"레어"}[grade]}</p>
      <input onChange={handleCountChange} type="number" className=" h-10 border-2 w-full p-2"/>
    </div>
    );
  }
  