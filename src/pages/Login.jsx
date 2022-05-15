import React from 'react'
import styled from "styled-components"
const Container =styled.div`
width: 100vw;
height: 100vh;
/*background: linear-gradient(
 rgba(255,255,255,0.5),
 rgba(255,255,255,0.5)
),
 url("/Shihab/pic222.jpg") center;
 background-size:cover;*/
background-color: aliceblue;

 display: flex;
 align-items: center;
 justify-content: center;


`
const Wrapper = styled.div`
padding: 20px;
width: 26%;
background-color: white;




    
`
const Title=styled.h1`
font-size: 24px;
font-weight: 700;
color: #ab0788; 
text-align: center;
`
const Form=styled.form`
display: flex;
flex-direction: column;

    
`
const Input=styled.input`
flex: 1;
min-width: 40%;
margin:10px 0 ;
padding: 15px;
`

const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #ab0788;
    color: white;
    cursor: pointer;
    display: block;  //this two lines to make the button center horizontally
    margin: auto;   //this two lines to make the button center horizontally
`

const Link =styled.a`
margin: 5px 0;
font-size: 12px;
text-decoration  :underline ;
cursor: pointer;
`

function Login() {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder='user name' ></Input>
            <Input placeholder='password' ></Input>
            <Button>LOGIN</Button>
            <Link>DO YOU NOT REMEMBER THE PASSWORD ?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
        
    </Wrapper>


      
</Container>
   
  )
}

export default Login