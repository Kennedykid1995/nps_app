import React, { Component } from 'react'
import styled from 'styled-components'

const Top = styled.div`
    width: 100%; 
    background: #f24d4d; 
    padding: 20px;
`
const TopText = styled.p`
    font-size: 25px; 
    font-weight: bold; 
    color: white;
`
const TopBar = () => {

        return (
            <Top>
                <TopText>ALL NEWS</TopText>
            </Top>
        )
    }
export default TopBar; 
