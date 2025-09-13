"use client";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Import(){
  const r = useRouter();
  const [cv,setCv]=useState("");

  const oneClick=()=>{
    console.log("time_to_plan", Date.now(), cv.length);
    r.push("/result");
  };

  return (
    <main className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">Pega tu LinkedIn o CV</h2>
      <p className="text-slate-600 mb-4">https://linkedin.com/in/... o pega tu CV aquí.</p>
      <textarea value={cv} onChange={e=>setCv(e.target.value)}
        rows={8} className="w-full rounded-2xl border border-slate-300 p-3 outline-none focus:ring-2 focus:ring-[var(--p)]" />
      <div className="mt-4">
        <Button onClick={oneClick}>One Click</Button>
      </div>
    </main>
  );
}
