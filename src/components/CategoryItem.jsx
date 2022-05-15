import React from 'react'
import styled from "styled-components"



const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;

    
`

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 3%;
    
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;  //it will take whole  parent place
height: 100%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

    
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
background-color: #010b43;
opacity: .5;
    
`
const Button = styled.button`
border:none;
padding: 15px;
background-color: #f1491a;
color: white;
cursor: pointer;
font-weight: 800;
border-radius: 5%;
 transition-duration: .3s;

&:hover {
    color:#f1491a ;
    background-color: white;

   

}
    
`
const CategoryItem = ({item}) => {
  return (
      <Container>
        <Image src={item.img}></Image>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
      </Container>
    
  )
}

export default CategoryItem