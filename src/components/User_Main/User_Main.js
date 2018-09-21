import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { css} from 'styled-components'

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
`

const Button = styled.button`
border-radius: 5px;
padding: .50em 2em ;
margin: 10px auto;
background: goldenrod;
color: WHITE;
border: 2px solid BLACK;
display: flex;
  flex-flow: row nowrap;
  height: 100%;
  font-size: 30px;`


class User_Main extends Component {

    render() {
        return (

            <div>
                <Title> The Guarded Citadel </Title>
                <SecTitle> Weapons For A Past Age</SecTitle>

                <Link to={'./arms_armament'}>
                    <Button>
                        <h3> Arms and Armament</h3>
                    </Button>
                </Link>

            </div>
        )
    }
}

export default User_Main