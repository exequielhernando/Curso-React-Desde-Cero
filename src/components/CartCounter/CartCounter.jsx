import React from 'react';
import { connect } from 'react-redux';

const CartCounter = ({ cartLength }) => (
    <li>
        <button className="button tiny ghost">
            {`Carrito: ${cartLength.length}`}
        </button>
    </li>
)
const mapStateToProps = state => (
    {
        cartLength: state.cartReducer.cart
    }
)




export default connect(mapStateToProps,{})(CartCounter);