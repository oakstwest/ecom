import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import axios from 'axios'

const mainColor = 'black'

const AaTitle = styled.h1`
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
const AaButton = styled.button`
border-radius: 5px;
padding: .50em 2em ;
background: goldenrod; 
color: WHITE;
border: 2px solid BLACK;
  height: 50%;
  font-size: 30px;`

class Arms_Armament extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('/api/products')
            .then(res => {
                this.setState({
                    products: res.data
                })
            })

    }

    addProduct(product_id, quantity = 1) {
        axios.post('/api/products', { product_id, quantity }).then(res => {
            this.setState({
                cart: res.data
            })
        })
    }

    render() {

        console.log(this.state.products)
        let productsDisplay = this.state.products.map((product, i) => {
            return (
                <div key={i}>
                    <img src={product.img} alt="" />
                    <p>{product.title}</p>
                    <AaButton onClick={() => this.addProduct(product.product_id)}>Add To Cart</AaButton>
                </div>
            )
        })

        return (
            <div>
                <header>
                    <AaTitle>Arms and Armament</AaTitle>
                </header>
                <Link to={'./cart'}>
                    <AaButton>
                        <h3>To The Cart</h3>
                    </AaButton>
                </Link>

                <Link to={'./'}>
                    <AaButton>
                        <h3>Home</h3>
                    </AaButton>
                </Link>
                {productsDisplay}
            </div>
        )
    }
}

export default Arms_Armament



