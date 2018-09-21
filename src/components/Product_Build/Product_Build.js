// import React, { Component } from 'react';
// import axios from 'axios'
// import styled, { css } from 'styled-components'
// import { Link } from 'react-router-dom'


// const InputParent = styled.div`
//     /* width: 50%; */
//     /* padding: 2px 2px;
//     margin: 1px 0;
//     border-radius: 4px; */
//     box-sizing: border-box;
//     display:flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     `

// const Input = styled.input`
//     width: 50%;
//     padding: 12px 20px;
//     margin: 8px 0;
//     border-radius: 4px;
//     box-sizing: border-box;
//     display:flex;
//     align-items: center;`

// const mainColor = 'black'

// const Title = styled.h1`
//   color: ${props => props.color || 'black'};
//   font-size: 80px;
//   margin:10px ;
//   padding-bottom: 10px;
//   display: inline-block;
//   text-align: center;
//   width: 100vw;
//   height:10vh;
//   text-shadow:
// 		-1px -1px 0 #FFFFFF,
// 		1px -1px 0 #FFFFFF,
// 		-1px 1px 0 #FFFFFF,
// 		1px 1px 0 #FFFFFF;
// `
// const SecTitle = styled.h2`
// color: ${props => props.color || 'black'};
//   font-size: 40px;
//   margin: 2px;
//   padding-bottom: 10px;
//   display: inline-block;
//   width: 100vw;
//   height: 10vh;
//   text-align: center;
//   text-shadow:
//   -1px -1px 0 #FFFFFF,
// 		1px -1px 0 #FFFFFF,
// 		-1px 1px 0 #FFFFFF,
// 		1px 1px 0 #FFFFFF;
// `
// const Lable = styled.label`
// color: ${props => props.color || 'black'};
//   font-size:40px;
//   margin: 25px;
//   padding-bottom: 20px;
//   display: inline-block;
//   width: 100vw;
//   height: 10vh;
//   text-align: center;
//   text-shadow:
//   -1px -1px 0 #FFFFFF,
// 		1px -1px 0 #FFFFFF,
// 		-1px 1px 0 #FFFFFF,
// 		1px 1px 0 #FFFFFF;
// `

// const Button = styled.button`
// border-radius: 5px;
// padding: .50em 2em ;
// /* margin: 10px auto; */
// background: #0156e4;
// color: WHITE;
// border: 2px solid BLACK;
// /* display: flex;
//   flex-flow: column wrap; */
//   height: 100%;
//   font-size: 30px;`

// const ButtonContainer = styled.div`
// display:flex;
// `

// class Product_Builder extends Component {
//     constructor() {
//         super();
//         this.state = {
//             // // newProduct: {
//             // //     category,
//             // //     title,
//             // //     description,
//             // //     price,
//             // //     item_num
//             // // },
//             // // newImage: {
//             // //     img,
        
//             // //     product_id
//             // },
        
//             }
//         }
    
//     updateProduct (id, category, title, description, price, item_num) {
//         let body = { category, title, description, price, item_num }
//         axios.put(`/api/updateProduct/${id}`, body)
//             .then(() => {
//                 this.getProducts();
//             })
//     };

//     updateImage (id, img, main, product_id) {
//         let body = { img, main, product_id }
//         axios.put(`/api/updateImage/${id}`, body)
//             .then(() => {
//                 this.getImage()
//             })
//     };

//     delete(id) {
//         axios.delete(`/api/delete/${id}`)
//             .then(() => {
//                 this.getProducts()
//             })
//     }

//     deleteImage(id) {
//         axios.delete(`/api/deleteImage/${id}`)
//             .then(() => {
//                 this.getImage()
//             })
//     }

//     getProducts() {
//         axios.get('/api/getProducts')
//             .then(res => {
//                 console.log(res.data)
//             })
//     }

//     getImage() {
//         axios.get('/api/getImage')
//             .then(res => {
//                 console.log(res.data)
//             })
//     }

// handleCategory(event) {
//     this.setState({
//         newProduct: Object.assign({}, this.state.newProduct, { category: event.target.value })
//     })
// }


//     render() {
//         const {
//             newProduct,
//             newImage
//         } = this.state

//         return (
//            <InputParent>
//                 <div>
//                     <Title> The Armary </Title>
//                 </div>
//                 <SecTitle>Your Friend</SecTitle>

//                 <ButtonContainer>
//                     <Button onClick={() => this.updateProduct(product.product_id[0].friend_id,
//                         newData.category,
//                         newData.email1,
//                         newData.phone1
//                     )}>Edit
//                     </Button>
//                     <Button onClick={() => this.deleteProduct(contacts.userFriend[0].friend_id)}>Delete
//                     </Button>
//                 </ButtonContainer>
// </InputParent>
//         )
//     }
// }


// export default Product_Builder



