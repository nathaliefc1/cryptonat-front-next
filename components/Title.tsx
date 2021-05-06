import React from 'react';
import Styled from 'styled-components';
import { ButtonGradient } from './ButtonGradient';

const Row = Styled.div`
    with: 100%;
    height: 60vh;
    background: linear-gradient(180deg,#FF00FF 0%, #5A4FCF 100%);
    color: #fff;
`

const ImageLanding = Styled.img`
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
    padding: 8% 12%;
    text-align: center;
`

export const Title = ({ text = "Welcome to Crypto Nat" }) => {
    return (
        <Row className="row">
            <div className="container col lg-6">
                <Htitle>{text = "¿New to crypto currency? No problem"}</Htitle>
                <ButtonGradient />
            </div>
            <div className="col-lg-6">
                <p>imagen que no quiere aparecer</p>

            </div>
        </Row>
    )
}
