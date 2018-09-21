import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'


const mainColor = 'black'

const Title = styled.h1`
  color: ${props => props.color || 'goldenrod'};
  font-size: 5em;
  margin: 25px ;
  padding-bottom: 20px;
  /* border-bottom: 1px solid ${mainColor}; */
  display: inline-block;
  text-align: center;
  width: 100vw;
  height:10vh;
  text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
`
const SecTitle = styled.h2`
color: ${props => props.color || 'black'};
  font-size: 50px;
  margin: 25px;
  padding-bottom: 20px;
  /* border-bottom: 1px solid ${mainColor}; */
  display: inline-block;
  width: 100vw;
  height: 10vh;
  text-align: center;
  text-shadow:
		-1px -1px 0 white,
		1px -1px 0 white,
		-1px 1px 0 white,
		1px 1px 0 white;
`

const Button = styled.button`
border-radius: 5px;
padding: .50em 2em ;
background: goldenrod;
color: WHITE;
border: 2px solid BLACK;
  height: 50%;
  font-size: 30px;`

class Check_out extends Component {
    
    render() {
        return (
            <div>
                <Title>Thank You For Your Money</Title>
                <SecTitle>Your Credit Card Will Be Charged $20,000,000</SecTitle>
                <Link to={'./'}><Button>
                    <h3>Home</h3>
                </Button></Link>
            </div>
        )
    }
}

export default Check_out




