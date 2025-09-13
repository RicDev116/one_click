"use client";
import { useEffect, useState } from "react";
import { userSkills, gaps, coursesByWeek, jobs } from "@/lib/mock";
import { savePlan, loadPlan } from "@/lib/store";
import Tabs from "../components/Tabs";
import Chip from "../components/Chip";
import CardCourse from "../components/CardCourse";
import CardJob from "../components/CardJob";
import Button from "../components/Button";

export default function Result(){
  const [tab,setTab]=useState("perfil");
  const [saved,setSaved]=useState(false);

  useEffect(()=>{ setSaved(!!loadPlan()); },[]);

  const doSave=()=>{
    savePlan({ weeks:coursesByWeek, savedAt:Date.now() });
    setSaved(true);
    console.log("plan_saved");
  };

  return (
    <main>
      <header className="mb-4">
        <h2 className="text-2xl font-semibold">Resultado One Click</h2>
        <p className="text-sm text-slate-600">Hola, Ricardo 👋 · Meta: Backend Jr · Inglés: B1</p>
      </header>

      <Tabs
        tabs={[{key:"perfil",label:"Perfil"},{key:"plan",label:"Plan"},{key:"vacantes",label:"Vacantes"}]}
        value={tab} onChange={setTab as any}
      />

      {tab==="perfil" && (
        <section className="mt-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="font-medium">Fortalezas</p>
            <div className="mt-2 flex flex-wrap gap-2">{userSkills.map(s=> <Chip key={s}>{s}</Chip>)}</div>
            <p className="font-medium mt-4">Gaps</p>
            <div className="mt-2 flex flex-wrap gap-2">{gaps.map(s=> <Chip key={s}>{s}</Chip>)}</div>
          </div>
        </section>
      )}

      {tab==="plan" && (
        <section className="mt-4 space-y-3">
          {coursesByWeek.map((week,i)=>(
            <div key={i} className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-500">Semana {i+1}</h3>
              {week.map((c,idx)=><CardCourse key={idx} c={c} />)}
            </div>
          ))}
          <Button className="mt-2" onClick={doSave}>{saved? "Plan guardado ✔️":"Guardar plan"}</Button>
        </section>
      )}

      {tab==="vacantes" && (
        <section className="mt-4 grid gap-3">
          {jobs.map(j=> <CardJob key={j.id} j={j} />)}
        </section>
      )}

      <div className="fixed right-4 bottom-4">
        <Button variant="primary" onClick={()=>{ console.log("schedule_clicked"); alert("Evento creado en Google Calendar (demo)"); }}>
          Agendar mentoría
        </Button>
      </div>
    </main>
  );
}
