import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0';
import Styled from 'styled-components';

const Navbr = Styled.nav`
    padding: 2rem 1rem 3rem;
    
`
const List = Styled.li`
    padding: 5px 18px;
    text-align: center;
`
const Aref = Styled.a`
    font-size: 1.2rem;
    font-family: 'Montserrat';
`

export const Menu = () => {
    const { user, error, isLoading } = useUser();
    return (
        <Navbr className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://www.flaticon.com/svg/vstatic/svg/1442/1442444.svg?token=exp=1619648050~hmac=e66249f35bf128218f59425adbf287d2"
                        alt="" width="50" height="30" />
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <List className="nav-item">
                            <Link href="/">
                                <Aref className="nav-link">Home</Aref>
                            </Link>
                        </List>
                        <List className="nav-item">
                            <Link href="#cta">
                                <Aref className="nav-link">Download</Aref>
                            </Link>
                        </List>
                        <List className="nav-item">
                            <Link href="/uma">
                                <Aref className="nav-link">Simulator</Aref>
                            </Link>
                        </List>
                    </ul>
                    <div style={{ display: "flex-end" }}>
                        {!user && (
                            <>
                                <a href="/api/auth/login" className="btn btn-primary">Login</a>
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
