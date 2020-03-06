import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/** serviços */
import api from '../../services/api'

import './styles.css';

export default class main extends Component {

  constructor(props) {
    super(props)
    this.state = { products: [], filter: {}, page: 1 }
  }

  loadProducts = (page = 1) => {
    api.get('https://rocketseat-node.herokuapp.com/api/products', { params: { page } }).then(
      res => {
        const { docs, ...filter } = res.data
        
        this.setState(
          {
            products: docs,
            filter,
            page
          }
        )
      }
    )

  };

  prevPage = () => {
    const { page } = this.state

    if ( page > 1 ) {
      this.loadProducts(page - 1)
    }
  }
  nextPage = () => {
    const { page, filter } = this.state

    if ( page < filter.pages ) {
      this.loadProducts(page + 1)
    }
  }

  componentDidMount() {
    this.loadProducts()
  }


  render() {
    const { products, page, filter } = this.state
    return (
      <div className="product-list" >
        {products.map(
          product => (
            <article key={product._id}>
              <strong>{product.title}</strong>
              <p>{product.description}</p>
              <Link to={`products/${product._id}`}>Acessar</Link>
            </article>
          )
        )}
        <div className="actions" >
          <button disabled={page === 1} onClick={this.prevPage} > Anterior </button>
          <button disabled={page === filter.pages} onClick={this.nextPage} > Próximo </button>
        </div>
      </div>
    );
  }
}
