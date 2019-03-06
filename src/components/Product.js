import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title }) => (
  <div>
    {title}
    <div>
  		<strong>Price: </strong>&#36;{price}
  	</div>
  	<div>
  		<strong>Quantity: </strong> {quantity ? ` ${quantity}` : null}
  	</div>
  </div>

)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
