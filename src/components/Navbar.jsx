import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'




const Container =styled.div`
   height: 60px;
   background-color: #fee9fb;
  
`;

const Wrapper= styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left= styled.div`
flex: 1;
display: flex;
align-items: center;
    
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;

`
const SearchContainer=styled.div`
border: .5px solid lightgrey;
border-radius: 15px;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
    
`;

const Input = styled.input`
    border: none;
    background: transparent;
`


const Center= styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    color: #620485;
`

const Right= styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;     //to put them in the end side
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>Search</Language>
                <SearchContainer>
                    <Input></Input>
                    <Search style={{color:"gray", fontSize:16}}></Search> 
                    
                </SearchContainer>

            </Left>
            <Center><Logo>E-Commerce</Logo> </Center>
             <Right>
                 <MenuItem>REGISTER</MenuItem>
                 <MenuItem>SIGN IN</MenuItem>
                 <MenuItem>
                 
                 <Badge badgeContent={10} color="primary">
                    <ShoppingCartOutlined></ShoppingCartOutlined>

                 </Badge>
                 
                 </MenuItem>
             </Right>



        </Wrapper>

       
    </Container>
  )
}

export default Navbar