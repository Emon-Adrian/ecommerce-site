import styled from 'styled-components'
//import blob from '../images/blob.png'
import {mobile} from "../responsive"

const Container = styled.div`
    width:100vw;
    height:100vh;
    background: url("./images/blob.png");
  
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    display:flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
     width:40%;
     padding: 20px;
     background-color: white;
     display: flex;
     flex-direction: column;
     ${mobile({width: "75%"})}
`
const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size:12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width:40%;
    border: none;
    padding:15px 20px;
    background-color: teal;
    color:white;
    cursor: pointer;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="lastname"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="passowrd"/>
                    <Input placeholder="confirm password"/>
                </Form>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement> 
                    <Button>CREATE</Button>
            </Wrapper>
        </Container>
    )
}

export default Register