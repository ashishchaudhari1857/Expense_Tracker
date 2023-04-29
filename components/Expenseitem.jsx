import React from "react";
import "./Expenseitem.css";
import AddExpenses from "./AddExpenses";
import Title from "./Title";

function Expenseitem() {
  const a = [
    { date: new Date().toLocaleDateString(), purpose: "education", amount: 150 },
    { date: new Date().toLocaleDateString(), purpose: "travel", amount: 200 },
    { date: new Date().toLocaleDateString(), purpose: "food ", amount: 2121 },
    { date: new Date().toLocaleDateString(), purpose: "skincare", amount: 1210 },
    { purpose:"health"},
    { date: new Date().toLocaleDateString(), amount: 2121 }
    

  ];
  return (
    <>
      <h1 className="header">ExpenseTracker</h1>
      <Title></Title>
      {a.map((item, i) => {
        return <AddExpenses  key={i} data={item}></AddExpenses>
      })}
    </>
  );
}
export default Expenseitem;
