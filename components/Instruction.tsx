import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
    .row {
        width: 100%;
        height: 70vh;
    }
    h1 {
        font-family: "Montserrat", sans-serif;
        font-size: 3rem;
        line-height: 1.5;
        font-weight: bolder;
        padding: 7% 10%;
        text-align: center;
        color: #5A4FCF;
    }
    p {
       padding: 1% 15%;
        line-height: 1.5;
        font-family: "Montserrat", sans-serif;
        text-align: center;
        color: #696969;
    }
   
`

export const Instructions = ({ text = "Welcome to CryptoNat" }) => {
    return (
        <Row>
            <div className="row" id="instructions">
                <div className="col lg-6 lg-4">
                    <img src="/landing_4.png"></img>
                </div>
                <div className="container col lg-6 lg-4">
                    <h1>{text}</h1>
                    <p>
                        This is a CRYPTOCURRENCY CALCULATOR where you can check the price of a particular cryptocurrency on a certain date.
                    </p>
                    <p>
                        You will be able to save your results in your profile and compare prices on certain dates.
                    </p>
                    <p>
                        The objective is that you can know which cryptocurrencies fluctuate more or which ones favor you when making a "possible investment".
                    </p>
                </div>
            </div>
        </Row>
    )
}