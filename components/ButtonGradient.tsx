import Styled from 'styled-components';

const Bgradient = Styled.a`
    background: linear-gradient(180deg,#FD749B 0%, #5A4FCF 100%);
    font-weight: bold;
    padding: 0.75em 1.75em;
    border: none;
    outline: none;
    color: white;
    border-radius: 50px;
    box-shadow: 2px 2px 4px #000000;
    user-select: none;
`

export const ButtonGradient = ({ text = "Login" }) => {
    return (
        <Bgradient href="/api/auth/login" className="btn btn-light" role="button" > {text} </Bgradient >
    )
}
