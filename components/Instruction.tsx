import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
    .row {
        width: 100%;
        height: 70vh;
    }
    h1 {
        font-family: "Montserrat", sans - serif;
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
        font-family: "Montserrat", sans - serif;
        text-align: center;
        color: #696969;
    }
   
`

export const Instructions = ({ text = "Welcome to Crypto Nat" }) => {
    return (
        <Row>
            <div className="row" id="instructions">
                <div className="col-lg-6">
                    <img src="/landing_4.png"></img>
                </div>
                <div className="container col lg-6">
                    <h1>{text}</h1>
                    <p>
                        Free cryptocurrency purchase simulator, where you can select your favorites, check their value in future days and review their real fluctuation.
                        You can set time alerts to check the growth of your fictitious investment.
                    </p>
                </div>
            </div>
        </Row>
    )
}