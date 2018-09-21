

import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import axios from 'axios'

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

class Arms_Armament extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            cart: []
        }
    }
    componentDidMount() {
        axios.get('/api/cart')
            .then(resp => {
                this.setState({
                    cart: resp.data
                })
            })

    }


    render() {

        console.log(this.state.cart)
        let productsDisplay = this.state.cart.map((product, i) => {
            return (
                <div key={i}>
                    <img src={product.img} alt="" />
                    <p>{product.title}</p>
                    <Button onClick={() => this.deleteProduct(product.product_id)}>Remove the Product</Button>
                </div>
            )
        })
        
        return (
            <div>
                <header><Title>Arms and Armament</Title></header>
                <Link to={'./'}><Button><h3>Home</h3></Button></Link>
                {productsDisplay}
            </div>
        )
    }
}

export default Arms_Armament








