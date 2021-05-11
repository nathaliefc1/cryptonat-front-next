import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Styled from 'styled-components';

const FooterStyle = Styled.div` 
    padding: 2% 10%;
    text-align: center;
    color: #8f8f8f
`
const Icono = Styled.i`
    pading: 20px;
    margin: 20px
`
const Copyright = Styled.p`
    margin: 10px
`

export const Footer = () => {
    return (
        <FooterStyle id="footer">
            <Icono className="social-icon"><FaFacebookF /></Icono>
            <Icono className="social-icon"><FaTwitter /></Icono>
            <Icono className="social-icon"><FaInstagram /></Icono>
            <Icono className="social-icon"><FaEnvelope /></Icono>

            <Copyright>© Copyright 2021 CryptoNat</Copyright>

        </FooterStyle>
    )
};
