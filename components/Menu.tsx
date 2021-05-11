import { useEffect } from 'react';
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0';
import Styled from 'styled-components';
import { ButtonGradient } from './ButtonGradient'

const Navbr = Styled.nav`
    padding: 2rem 1rem 2rem;
    background-color: none;
    
`
const List = Styled.li`
    .nav-item{
     padding: 5px 18px;
     text-align: center;
    }
    a {
        font-size: 1.2rem;
     font-family: 'Montserrat';
    }
`

type User = {
    name: string;
    email?: string;
    nickname?: string
}

type Prop = {
    fetchProfile: (data: User) => void;
}

export const Menu = ({ fetchProfile }: Prop) => {
    const { user, error, isLoading } = useUser();

    useEffect(() => {
        if (user) {
            const { name, email, nickname } = user;
            const info = { name, email, nickname };
            fetchProfile(info)
        }
    }, [user])

    return (
        <Navbr className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/cryptocurrency_3.png"
                        width="60" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <List className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#instructions">
                                <a className="nav-link">Instructions</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#cta">
                                <a className="nav-link">Download</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/simulator">
                                <a className="nav-link">Simulator</a>
                            </Link>
                        </li>
                    </List>
                    <div style={{ display: "flex-end" }}>
                        {!user && (
                            <>
                                <ButtonGradient />
                            </>
                        )}
                    </div>
                    <div >
                        {user && (
                            <>
                                <img src={user.picture} width="40" className="rounded" />{" "}
                                <a href="/api/auth/logout" className="btn btn-primary">
                                    Logout {user.email}</a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Navbr>
    );
};
