import React from 'react';
import styled from 'styled-components';


const Row = styled.div`
    height: 75vh;
    background: linear-gradient(180deg,#FD749B 5%, #281AC8 100%);
    color: #fff;
    position: relative;
    h1 {
        font-family: "Montserrat", sans-serif;
        font-size: 3rem;
        line-height: 1.5;
        font-weight: bolder;
        padding: 8% 12%;
        text-align: center;
    }
    img {
        width: 68%;
        margin: 5%;
    }
   .custom-shape-divider-bottom-1620419817 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
    }

    .custom-shape-divider-bottom-1620419817 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 113px;
    }   

    .custom-shape-divider-bottom-1620419817 .shape-fill {
        fill: #ffffff;
    }



`

export const TitleSimulator = ({ text = "Welcome to Crypto Nat" }) => {
    return (
        <Row className="row">
            <div className="container col lg-6 lg-3">
                <h1>{text = "Check our cryptocurrency simulator"}</h1>
                <h2>Now you can create your alerts for especific dates</h2>

            </div>
            <div className="col lg-6 lg-3">
                <img src="/notification_phone_person.png" />
            </div>

            <div className="custom-shape-divider-bottom-1620419817"
                style={{
                    margin: '0',
                    padding: '0',
                }}
            >
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>

        </Row >
    )
}
