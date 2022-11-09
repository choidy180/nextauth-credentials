import cookie from 'js-cookie';
import styled from 'styled-components';

export default function TokenManager({token}){
    return (
        <Main>
            <h1>Cookies</h1>
            <h2>Token: {token}</h2>
            <ButtonBox>
                <Button
                    type="button"
                    onClick={()=> {
                        // cookie.set("token", "ABCD", { expires: 1 / 24 });
                        fetch('/api/login', {
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ token: 'ABCDE' }),
                        });
                    }}
                >
                    Login
                </Button>
                <Button
                    type="button"
                    onClick={()=> {
                        fetch('/api/logout', {
                            method: 'post',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({}),
                        });
                    }}
                >
                    Logout
                </Button>
            </ButtonBox>
        </Main>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || '' } };
}

const Main = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-size: 42px;
    }
`

const ButtonBox = styled.div`
    width: 500px;
    gap: 16px;
    display: flex;
    margin-top: 14px;
`

const Button = styled.button`
    border: 1.4px solid #000000;
    width: 100%;
    height: 40px;
    padding: 0 10.5px;
`