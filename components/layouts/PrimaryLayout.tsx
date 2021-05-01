import { Menu } from "../Menu";
import Head from "next/head";
import styled from "styled-components";
import { useUser } from '@auth0/nextjs-auth0';
import React from "react";
import { Footer } from '../Footer';
import { Calltoaction } from '../Calltoaction';

const Title = styled.h1`
  color: #f46044;
`;

export const PrimaryLayout: React.FC<{ children: React.ReactNode }> = ({ children, }) => {
    const { user, error, isLoading } = useUser();
    return (

        <div >
            <Head>
                <title>Cripto Nat</title>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
                    crossOrigin="anonymous"
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,200;1,400;1,600;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
                    crossOrigin="anonymous"
                />

            </Head>
            <body>
                <Menu />
                <Title>Welcome to CRYPTO NAT </Title>
                <div style={{ padding: "20px 0", textAlign: "center" }}>
                    {children}
                </div>
                <Calltoaction />
                <Footer />
            </body>
        </div>

    )
};

