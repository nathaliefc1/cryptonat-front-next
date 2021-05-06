import React from 'react';
import Styled from 'styled-components';
import { ButtonGradient } from './ButtonGradient';

const Row = Styled.div`
    with: 100%;
    height: 60vh;
`

const ImageInstructions = Styled.img`
    width: 60 %;
    transform: rotate(25deg);
    position: absolute;
    right: 30 %;
    
`
const Htitle = Styled.h1`
    font-family: "Montserrat", sans - serif;
    font-size: 3rem;
    line-height: 1.5;
    font-weight: bolder;
    padding: 7% 10%;
    text-align: center;
    color: #5A4FCF;
`
const Paragraph = Styled.p`
    padding: 1% 15%;
    line-height: 1.5;
    font-family: "Montserrat", sans - serif;
    text-align: center;
    color: #696969;
`


export const Instructions = ({ text = "Welcome to Crypto Nat" }) => {
    return (
        <Row className="row" id="instructions">
            <div className="col-lg-6">
                <p>imagen que no aparece</p>
            </div>
            <div className="container col lg-6">
                <Htitle>{text}</Htitle>
                <Paragraph> Free cryptocurrency purchase simulator, where you can select your favorites, check their value in future days and review their real fluctuation.
                You can set time alerts to check the growth of your fictitious investment.
                </Paragraph>
                <ButtonGradient />
            </div>

        </Row>
    )
}