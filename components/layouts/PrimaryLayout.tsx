import { Menu } from "../Menu";
import Head from "next/head";
import styled from "styled-components";
import { useUser } from '@auth0/nextjs-auth0';
import React from "react";

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
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
                    crossOrigin="anonymous"
                />
            </Head>
            <div className="container">
                <Menu />
                <div style={{ padding: "20px 0", textAlign: "center" }}>
                    <Title>Bienvenido a CRIPTO NAT </Title>
                    <div style={{ padding: "40px 0" }}>
                        {!user && (
                            <>
                                <a href="/api/auth/login" className="btn btn-primary">Login</a>
                            </>
                        )}
                    </div>
                    <div style={{ padding: "40px 0" }}>
                        {user && (
                            <>
                                <img src={user.picture} width="40" className="rounded" />{" "}
                                <a href="/api/auth/logout" className="btn btn-primary">
                                    Logout {user.email}</a>
                            </>
                        )}
                    </div>
                    {children}
                </div>
                <footer>
                    <p>Gracias! &copy; 2021 - CRIPTO NAT</p>
                </footer>
            </div>
        </div>

    )
};

