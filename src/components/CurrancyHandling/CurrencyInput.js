import React from "react";
import './CurrencyInput.css'

const CurrencyInput = ({ amount, currency, currencies, onAmountChange, onMoneyChange }) => {
    return (
        <div className="mainn-box">




            <div>
                <select className="currency-data" value={currency} onChange={(e => onMoneyChange(e.target.value))}>
                    {currencies.map((curency) => (
                        <option value={curency}>{curency}</option>
                    ))}
                </select>

            </div>
            <input className="input-box" value={amount} onChange={(e => onAmountChange(e.target.value))} />


        </div>
    )
};
export default CurrencyInput;