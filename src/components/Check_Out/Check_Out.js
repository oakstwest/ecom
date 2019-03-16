import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'


const mainColor = 'black'

const CoTitle = styled.h1`
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
const CoSecTitle = styled.h2`
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

const CoButton = styled.button`
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
                <CoTitle>Thank You For Your Money</CoTitle>

                <CoSecTitle>
                    Your Credit Card Will Be Charged $20,000,000. Have A Nice Day!
                 </CoSecTitle>

                <Link to={'./'}>
                    <CoButton>
                        <h3>Home</h3>
                    </CoButton>
                </Link>
            </div>
            
        )
    }
}

export default Check_out




