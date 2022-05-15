import React from 'react'
import styled from "styled-components"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Announcement } from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import { Add, Remove } from '@mui/icons-material'


const Container =styled.div`
    
`

const Wrapper =styled.div`
padding: 50px;
display: flex;
  
`

const ImageContainer = styled.div`
  flex: 1;
`
const Image =styled.img`
width: 100%;
height: 90vh;
object-fit: cover;

  
`
const InfoContainer=styled.div`
  flex: 1;
  padding: 0px 50px;
`
const Title=styled.h1`
font-weight: 200;
  
`
const Desc=styled.p`
margin: 20px 0px;
  
`
const Price=styled.span`
font-weight: 100;
font-size: 40px;
  
`

const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0px;

  
`

const Filter = styled.div`
display: flex;
align-items: center;
  
`
const FilterTitle=styled.span`
font-size: 20px;
font-weight: 200;
  
`
const FilterColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props)=> props.color};
margin: 0 5px;
cursor: pointer;
  
`

const FilterSize=styled.select`
margin-left: 10px;
padding: 5px;
  
`
const FilterSizeOption=styled.option`
  
`

const AddContainer=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
  
`
const AmountContainer=styled.div`
display: flex;
align-items: center;
font-weight: 700;
  
`
const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid #b0029f;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;

  
`
const Button=styled.button`
  padding: 15px;
  border: 2px solid #b0029f;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
    background-color: #b0029f;
    border: none;
    color: white;
    border: 2px solid white;
  }
`




const Product = () => {
  return (

 <Container>
   <Announcement></Announcement>
   <Navbar></Navbar>
   <Wrapper>
     <ImageContainer>
       <Image src="/Shihab/pic7.jpg" >

       </Image>
     </ImageContainer>
     <InfoContainer>
       <Title> Denim Jacket  </Title>
       <Desc> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quas voluptatem illo, fugit natus omnis quos molestias excepturi accusamus nobis 
         consequuntur modi, pariatur culpa laboriosam dicta voluptates tempore, ipsam reiciendis! </Desc>
       <Price>50$</Price>
       <FilterContainer>
         <Filter>
           <FilterTitle>Color</FilterTitle>
           <FilterColor color='black'></FilterColor>
           <FilterColor color='darkblue'></FilterColor>
           <FilterColor color='green'></FilterColor>
         </Filter>

         <Filter>
           <FilterTitle>Size</FilterTitle>
           <FilterSize>
             <FilterSizeOption>XS</FilterSizeOption>
             <FilterSizeOption>S</FilterSizeOption>
             <FilterSizeOption>M</FilterSizeOption>
             <FilterSizeOption>L</FilterSizeOption>
             <FilterSizeOption>XL</FilterSizeOption>
           </FilterSize>
         </Filter>
       </FilterContainer>
       <AddContainer>
         <AmountContainer>
       <Remove></Remove>
      <Amount>1</Amount>
       <Add></Add>
         </AmountContainer> 
       <Button>Add To Cart</Button>
   
      </AddContainer>
     </InfoContainer>
  </Wrapper>
  
   <Newsletter></Newsletter>
   <Footer></Footer>
 
 </Container>
   
  )
}

export default Product



