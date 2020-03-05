import React, { Component } from 'react';

import './style.css'

/** serviços */
import api from '../../services/api'

export default class products extends Component {

  state = {
    product: {}
  }

  componentDidMount() {

    const { id } = this.props.match.params

    api.get( `https://rocketseat-node.herokuapp.com/api/products/${id}` ).then(
      res => {
        this.setState(
          {
            product: res.data
          }
        )
      }
    )
  }

  render() {
    const { product } = this.state

    return (
      <section className="product-info" >
        <h1> { product.title } </h1>
        <p> { product.description } </p>
        <p> URL: <a href={product.url} > { product.url } </a> </p>
      </section>
    )
  }
}
