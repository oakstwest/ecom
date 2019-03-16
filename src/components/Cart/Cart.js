

import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import axios from 'axios'

const mainColor = 'black'

const CTitle = styled.h1`
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
const CButton = styled.button`
border-radius: 5px;
padding: .50em 2em ;
/* margin: 10px auto; */
background: goldenrod;
color: WHITE;
border: 2px solid BLACK;
/* display: flex;
  flex-flow: row nowrap; */
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
            .then(res => {
                this.setState({
                    cart: res.data
                })
            })

    }
    deleteProduct(id) {
        axios.delete(`/api/cart/${id}`)
            .then(res => {
                this.setState({
                    cart: res.data
                })
            })
    }

    deleteAllCart() {
        axios.get(`/api/cartD`)
            .then(res => {
                this.setState({
                    cart: res.data
                })
            })
    }

    render() {

        // console.log(this.state.cart)
        let productsDisplay = this.state.cart.map((product, i) => {
            //console.log(product.product_id)
            return (
                <div key={i}>
                    <img src={product.img} alt="" />
                    <p>{product.title}</p>
                    <CButton onClick={() => this.deleteProduct(product.cart_id)}>
                        If You Want To Remove The Product
                    </CButton>
                </div>
            )
        })

        return (
            <div>
                <header><CTitle>Arms and Armament</CTitle></header>
                <Link to={'/'}>
                    <CButton>
                        <h3>Home</h3>
                    </CButton>
                </Link>

                <Link to='/check_out'>
                    <CButton onClick={() => this.deleteAllCart()}>
                        <h3>Its Time To Pay</h3>
                    </CButton>
                </Link>

                {productsDisplay}
            </div>
        )
    }
}

export default Arms_Armament








