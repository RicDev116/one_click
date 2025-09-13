"use client";
import Button from "./components/Button";
import { useRouter } from "next/navigation";

export default function Page() {
  const r = useRouter();
  return (
    <main className="min-h-[80dvh] grid place-items-center">
      <section className="max-w-xl text-center bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <div className="flex justify-center">
          <div className="rounded-md p-1 w-100 h-50 flex items-center justify-center">
            <img src="/one_click.png" alt="App Icon" width={250} height={100} />
          </div>
        </div>
        <p className="mt-2 text-slate-600 text-xl">Descubre tu potencial profesional y encuentra oportunidades que se adapten a ti</p>
        <p className="text-gray-500 dark:text-gray-600 text-md pt-4">Análisis inteligente • Plan personalizado • Vacantes perfectas</p>
        <div className="mt-6">
          <Button className="w-full" onClick={()=>r.push("/login")}>Comenzar</Button>
        </div>
      </section>
    </main>
  );
}
