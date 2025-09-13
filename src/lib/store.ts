"use client";
export const savePlan = (plan:any)=> localStorage.setItem("plan", JSON.stringify(plan));
export const loadPlan = ()=> {
  try { return JSON.parse(localStorage.getItem("plan")||"null"); }
  catch { return null; }
};