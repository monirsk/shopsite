
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
width: 40%;
background-color: white;




    
`
const Title=styled.h1`
font-size: 24px;
font-weight: 700;
color: #ab0788; 
margin-left: 180px;
`
const Form=styled.form`
display: flex;
flex-wrap:wrap;

    
`
const Input=styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 15px;
    
`
const Aggrement=styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #ab0788;
    color: white;
    cursor: pointer;
    margin-left: 180px;
`


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder='name' ></Input>
                <Input placeholder='last name' ></Input>
                <Input placeholder='user name' ></Input>
                <Input placeholder='email' ></Input>
                <Input placeholder='password' ></Input>
                <Input placeholder='confirm password' ></Input>
                <Aggrement>By creating an account you are aggring to the privacy tearms and condition of our site.Read More.</Aggrement>
                <Button>CREATE</Button>
            </Form>
            
        </Wrapper>


          
    </Container>
  )
}

export default Register