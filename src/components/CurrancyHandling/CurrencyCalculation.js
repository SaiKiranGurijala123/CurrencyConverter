import CurrencyInput from './CurrencyInput';
import React, { useState, useEffect, } from 'react';
import './CurrencyCalculation.css'


function CurrencyCalculation() {

    const [amount1, settAmount1] = useState(1);
    const [amount2, settAmount2] = useState(1);
    const [money1, setMoney1] = useState("USD");
    const [money2, setMoney2] = useState("INR");


    const [currencyAmount, setCurrentAmount] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP';


                const response = await fetch(url, {
                    method: 'GET',  // You can change the HTTP method (GET, POST, etc.)
                    headers: {
                        'X-RapidAPI-Key': 'd8f3dd1cf9mshb0c2585c599915fp1346a1jsnaa4955d615cb',
                        'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log(result)
                setCurrentAmount(result.rates);
            } catch (error) {
                //setError(error.message);
            }
        };

        fetchData();
    }, []);


    const changeHandlerAmount1 = (amount1 => {
        settAmount2(
            (amount1 * currencyAmount[money2]) / currencyAmount[money1]
        );
        settAmount1(amount1)

    });

    useEffect(() => {
        if (!!currencyAmount) {
            changeHandlerAmount1(1)
        }
    }, [currencyAmount])

    const changeHandlerAmount2 = (amount2 => {
        settAmount1(
            (amount2 * currencyAmount[money1]) / currencyAmount[money2]
        )
        settAmount2(amount2)
    });

    const changeHandlerMoney1 = (money1) => {
        settAmount2(
            (amount1 * currencyAmount[money2]) / currencyAmount[money1]
        )
        setMoney1(money1)
    };

    const changeHandlerMoney2 = (money2) => {
        settAmount1(
            (amount2 * currencyAmount[money1]) / currencyAmount[money2]
        )
        setMoney2(money2)
    };

    return (
        <div className="mainBox">
            <div className='convertion-box'>
                <CurrencyInput
                    amount={amount1}
                    currency={money1}
                    currencies={Object.keys(currencyAmount)}
                    onAmountChange={changeHandlerAmount1}
                    onMoneyChange={changeHandlerMoney1} />

                <div className='arrows'>
                    &#8592;<br />
                    &rarr;
                </div>


                <CurrencyInput
                    amount={amount2}
                    currency={money2}
                    currencies={Object.keys(currencyAmount)}
                    onAmountChange={changeHandlerAmount2}
                    onMoneyChange={changeHandlerMoney2} />
            </div>

            <p>1{money1} equals</p>
            <p>{amount2 / amount1} {money2}</p>


        </div>
    );
}

export default CurrencyCalculation;