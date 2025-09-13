import React from "react";
import Button from "./Button";
import Chip from "./Chip";
type Job={ id:string; title:string; company?:string; score:number; missing:string[]; skills?:string[] };
export default function CardJob({j}:{j:Job}){
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{j.title}</h3>
        <span className="text-sm font-medium">{j.score}% match</span>
      </div>
      <p className="text-sm text-slate-500">Faltan: {j.missing.join(", ")}</p>
      {j.skills && (
        <div className="mt-2 flex flex-wrap gap-2">{j.skills.map(s=> <Chip key={s}>{s}</Chip>)}</div>
      )}
      <div className="mt-3 flex gap-2">
        <Button variant="secondary" onClick={()=>console.log("job_view_clicked", j.id)}>Ver vacante</Button>
        <Button variant="secondary" onClick={()=>alert("Aplicación enviada (demo)")}>Aplicar ahora</Button>
      </div>
    </div>
  );
}
