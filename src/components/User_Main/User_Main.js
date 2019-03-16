import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components'

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
  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
  }

    render() {
        return (

            <div className= {this.props.className}>
                <Title> The Guarded Citadel </Title>
                <SecTitle> Weapons From A Past Age</SecTitle>

                
                    <Button onClick={this.login}>
                        <h3> Arms and Armament</h3>
                    </Button>
              

            </div>
        )
    }
}

export default User_Main

