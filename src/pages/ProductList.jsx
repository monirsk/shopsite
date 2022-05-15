import React from 'react'
import styled from "styled-components"
import { Announcement } from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'



const Container=styled.div`
    
`
const Title =styled.h1`
margin: 20px;
    
`
const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
   
`
const Filter=styled.div`
    margin: 20px;
    
`

const FilterText=styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select=styled.select`
padding: 10px;
margin-right: 20px;

    
`
const Option=styled.option`
    
`


    const ProductList = () => {
    return (
        <Container>
            <Announcement></Announcement>
            <Navbar></Navbar>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products : </FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>Green</Option>
                    <Option>Blue</Option>
                    <Option>Pink</Option>
                    <Option>Yellow</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Perple</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>L</Option>
                    <Option>M</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
                <Filter><FilterText>Sort Products : </FilterText>
                <Select>
                    <Option disabled selected>
                        Newset
                    </Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
               
                </Filter>
            </FilterContainer>
                <Products></Products>
            <Newsletter></Newsletter>
            <Footer></Footer>
    
        </Container>



    )
    }

export default ProductList