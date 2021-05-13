import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Styled from 'styled-components';

const FooterStyle = Styled.div` 
    padding: 2% 10%;
    text-align: center;
    color: #8f8f8f;
    bottom: 0px;
    a {
        color: #8f8f8f;
        padding: 5px;
        margin: 20px
    },
    p {
        margin: 10px
    }
`

export const Footer = () => {
    return (
        <FooterStyle id="footer">
            <a className="social-icon" href="https://www.facebook.com/" ><FaFacebookF /></a>
            <a className="social-icon" href="https://www.twitter.com/"><FaTwitter /></a>
            <a className="social-icon" href="https://www.instagram.com/" ><FaInstagram /></a>
            <a className="social-icon"><FaEnvelope /></a>

            <p>© Copyright 2021 CryptoNat</p>

        </FooterStyle>
    )
};
