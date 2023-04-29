import './Expenseitem.css'
import React from 'react';
function Title(){
    return(
        <div>
            <div className="title">
            <div>Date</div>
            <div>Purpose</div>
            <div>Amount(in $)</div>
            </div>
        </div>
    );
}
export default Title;