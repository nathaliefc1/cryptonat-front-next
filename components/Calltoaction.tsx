import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Styled from 'styled-components';
import { useUser } from '@auth0/nextjs-auth0';


const Cta = Styled.div`
    background: linear-gradient(180deg,#FD749B 0%, #5A4FCF 100%);
    color: #fff;
    text-align: center;
    font-family: 'Montserrat', sans-serif;

    
    button {
        margin: 5% 3% 5% 0;
        text-align: center;
    }
    h3 {
        font-family: "Montserrat";
        font-size: 3rem;
        line-height: 1.5;
        margin: 3% 2% 3% 0%;
        padding: 30px 0 30px;
    }
    
    .custom-shape-divider-top-1620567913 {
    position: relative;
    margin-top: 0;    
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    }

    .custom-shape-divider-top-1620567913 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 124px;
    }

    .custom-shape-divider-top-1620567913 .shape-fill {
    fill: #ffffff;
    }
`


export const Calltoaction = () => {
    const { user, error, isLoading } = useUser();
    return (
        <Cta id="cta">
            <div className="custom-shape-divider-top-1620567913">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
            <section >
                {!user && (
                    <>
                        <h3>¿Are you ready to try it out?</h3>
                        <button className="download-button btn btn-lg btn-dark"
                            type="button">
                            <i className="fab fa-apple" /><FaApple /> Download</button>
                        <button className="btn btn-lg btn-light" type="button">
                            <i className="fab fa-google-play" /><FaGooglePlay />
                    Download
                </button>
                    </>
                )}
                {user && (
                    <>
                        <h3>¡GOOD LUCK!</h3>
                    </>
                )}
            </section>
        </Cta>
    )
}