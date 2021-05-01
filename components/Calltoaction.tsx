import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Styled from 'styled-components';

const DownloadButton = Styled.button`
    margin: 5% 3% 5% 0;
    text-align: center;
`
const Cta = Styled.section`
    background-color: #ff4c68;
    color: #fff;
    padding: 7% 15%;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
`
const CtaHeading = Styled.h3`
    font-family: "Montserrat";
    font-size: 3.5rem;
    line-height: 1.5;
`


export const Calltoaction = () => {
    return (
        <Cta id="cta">

            <CtaHeading className="cta-heading">¿Are you ready to try it out?</CtaHeading>
            <DownloadButton className="download-button btn btn-lg btn-dark"
                type="button">
                <i className="fab fa-apple" /><FaApple /> Download</DownloadButton>
            <DownloadButton className="btn btn-lg btn-light" type="button">
                <i className="fab fa-google-play" /><FaGooglePlay />
      Download</DownloadButton>

        </Cta>
    )
}