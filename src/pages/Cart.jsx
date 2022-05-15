import React from 'react'
import styled from "styled-components"
import { Announcement } from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { Button } from '@mui/material'
const Container=styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;

`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;

`

const TopButton=styled.button`
cursor: pointer;
padding: 10px;
font-weight: 600;
border: none;
background-color: #620485;
color: white;
font-size: 15px;
border-radius: 5px;
box-shadow: 0 0 10px;
transition: all .15s ease ;

&:hover{
  background-color: white; 
color:#620485;
}


    
`
const TopTexts=styled.div`

  
`
const TopText=styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
  
`

const Bottom =styled.div`
display: flex;
justify-content: space-between;
    
`
const Info =styled.div`
flex: 3;
    
`

const Product=styled.div`
display: flex;
justify-content: space-between;

  
`
const ProductDetail =styled.div`
flex: 2;
display: flex;
   
`
const Details =styled.div`
padding: 20px;
display:flex;
flex-direction: column;
justify-content: space-around;
  
`
const Image=styled.img`
width: 200px;
`

const ProductName =styled.span`

`
const ProductId =styled.span`
   
`
const ProductColor =styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
   
`
const ProductSize =styled.span`
    
`
const PriceDetail =styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`

const ProductAmountContainer=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
  
`
const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
  
`
const ProductPrice=styled.div`
font-size: 30px;
font-weight: 200;

  
`
const Hr =styled.hr`
background-color: #eee;
border: none;
height: 1px;
margin:5px 0 ;



`
const Summary =styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
    
`

const SummaryTitle=styled.h1`
font-weight: 200;
  
`
const SummaryItem=styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};

  
`
const SummaryItemText=styled.span`

  
`
const SummaryItemPrice=styled.span`
  
`
const SummaryButton=styled.button`
width: 100%;
padding: 10px;
background-color: #620485;
color: white;
font-weight: 600;
border-radius: 5px;
box-shadow: 0 0 10px;
transition: all .15s ease ;
border: none;

&:hover{
  background-color: white; 
color:#620485;
}

  
`






const Cart = () => {
  return (
  
<Container>
    <Announcement></Announcement>
    <Navbar></Navbar>
   <Wrapper>
       <Title>Your Bag</Title>


    <Top>
    <TopButton>CONTINUE SHOPPING</TopButton>
    <TopTexts> 
      <TopText>SHOPPING BAG</TopText>
      <TopText>YOUR WISHLIST</TopText>
    </TopTexts>
    <TopButton>CHECKOUT NOW</TopButton>
       </Top>




       <Bottom>
         <Info>
           <Product>
             <ProductDetail>
               <Image src="/Shihab/pic8.jpg"></Image>
               <Details>
                 <ProductName><b>Product : </b>Black Jacket</ProductName>
                 <ProductId><b>ID : </b>1133453</ProductId>
                 <ProductColor color='black'> </ProductColor>
                 <ProductSize><b>Size : </b>36.5 </ProductSize>
                </Details>
             </ProductDetail>

            
             <PriceDetail>
               <ProductAmountContainer>
                 <Add></Add>
                 <ProductAmount>2</ProductAmount>
                 <Remove></Remove>
               </ProductAmountContainer>
               <ProductPrice>$ 30</ProductPrice>

             </PriceDetail>
           </Product>

<Hr></Hr>
{/*Product 2*/}
           <Product>
             <ProductDetail>
               <Image src="/Shihab/pic10.jpg"></Image>
               <Details>
                 <ProductName><b>Product : </b>Polo T-Shirt</ProductName>
                 <ProductId><b>ID : </b>2133453</ProductId>
                 <ProductColor color='gray'> </ProductColor>
                 <ProductSize><b>Size : </b>36.5 </ProductSize>
                </Details>
             </ProductDetail>

            
             <PriceDetail>
               <ProductAmountContainer>
                 <Add></Add>
                 <ProductAmount>1</ProductAmount>
                 <Remove></Remove>
               </ProductAmountContainer>
               <ProductPrice>$ 10</ProductPrice>

             </PriceDetail>
           </Product>


         </Info>
         <Summary>
           <SummaryTitle>ORDER SUMMARY</SummaryTitle>
           <SummaryItem>
             <SummaryItemText>Subtotal</SummaryItemText>
             <SummaryItemPrice>$ 80</SummaryItemPrice>
           </SummaryItem>

           <SummaryItem>
             <SummaryItemText>Estimeted Shipping</SummaryItemText>
             <SummaryItemPrice>$ 5.80</SummaryItemPrice>
           </SummaryItem>

           <SummaryItem>
             <SummaryItemText>Shipping Discount</SummaryItemText>
             <SummaryItemPrice>$ -5.80</SummaryItemPrice>
           </SummaryItem>

           <SummaryItem type='total'>
             <SummaryItemText>Total</SummaryItemText>
             <SummaryItemPrice>$ 80</SummaryItemPrice>
           </SummaryItem>

         <SummaryButton>CHECKOUT NOW</SummaryButton>


          





         </Summary>






       </Bottom>
   </Wrapper>
    <Footer></Footer>
</Container>


  )
}

export default Cart