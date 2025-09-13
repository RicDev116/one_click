"use client";
import Button from "../components/Button";
import Chip from "../components/Chip";
import { useRouter } from "next/navigation";
import { useState } from "react";

const metas = ["Backend Jr","Data Analyst Jr","QA Automation","Flutter Dev","Soporte IT"];
const ingles = ["A2","B1","B2","C1"];

export default function Onboarding(){
  const r = useRouter();
  const [meta,setMeta]=useState(metas[0]);
  const [eng,setEng]=useState("B1");

  return (
    <main className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-2">¿A dónde quieres llegar?</h2>
      <p className="text-slate-600 mb-4">Selecciona tu meta y tu nivel de inglés.</p>

      <div>
        <p className="text-sm font-medium mb-2">Meta</p>
        <div className="flex flex-wrap gap-2">
          {metas.map(m=>(
            <button key={m}
              onClick={()=>setMeta(m)}
              className={`px-3 py-1 rounded-full border ${meta===m?"bg-indigo-600 text-white border-indigo-600":"bg-white border-slate-300"}`}>{m}</button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium mb-2">Inglés</p>
        <div className="flex gap-2">
          {ingles.map(l=>(
            <button key={l}
              onClick={()=>setEng(l)}
              className={`px-3 py-1 rounded-full border ${eng===l?"bg-indigo-600 text-white border-indigo-600":"bg-white border-slate-300"}`}>{l}</button>
          ))}
        </div>
      </div>

      <div className="mt-6"><Chip>Elegido: {meta} · Inglés {eng}</Chip></div>

      <div className="mt-6">
        <Button onClick={()=>r.push("/import")}>Continuar</Button>
      </div>
    </main>
  );
}
