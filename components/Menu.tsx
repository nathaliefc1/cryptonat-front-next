import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0';


export const Menu = () => {
    const { user, error, isLoading } = useUser();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://www.flaticon.com/svg/vstatic/svg/1442/1442444.svg?token=exp=1619648050~hmac=e66249f35bf128218f59425adbf287d2" alt="" width="30" height="24"></img>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active" aria-current="page">
                                    Home
                            </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/page1">
                                <a className="nav-link">Página 1</a>
                            </Link>
                        </li>
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
        </nav>
    );
};
