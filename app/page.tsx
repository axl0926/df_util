"use client"
import InputBox from "@/components/InputBox";
import React, { useState } from 'react';

export default function Home() {

  const [count, setCount] = useState({
    legendary: 0,
    unique: 0,
    epic: 0,
    rare: 0,
  });
  const total=parseInt((count.rare/6000+count.epic/150+count.unique/6+count.legendary).toFixed(2));
  return (
  <div className=" h-screen flex flex-col flex-wrap content-center justify-center items-center">
    <h1 className=" text-4xl font-bold">480-&gt;720작 계산기</h1>
    <p className=" text-lg font-bold mt-4">현재 파편 보유 개수 입력</p>
    <InputBox grade={"legendary"} count={count} setCount={setCount}/>
    <InputBox grade={"unique"}count={count}  setCount={setCount}/>
    <InputBox grade={"epic"} count={count} setCount={setCount}/>
    <InputBox grade={"rare"} count={count}  setCount={setCount}/>
    
    <p>= 레전더리 파편 {total}</p>
    <p>진행도(480작기준) : {total? (total/550*100).toFixed(2)+"%" :null}</p>
    <p>남은 레전더리 파편 필요량 : {total? total>550?"목표치 달성" : 550-total+"개" :null}</p>

  </div>
  );
}
