import React from 'react';
import './Expenseitem.css';
function AddExpenses(props){
  const our_date =props.data.date;;
  const our_Purpose=props.data.purpose;
  const our_amount=props.data.amount;
  console.log(our_date , our_Purpose,our_amount)
    return(
<div className='title'>
    <div>{our_date}</div>
    <div>{our_Purpose}</div>
    <div>{our_amount}</div>
</div>

        );
}
export default AddExpenses;