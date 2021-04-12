import React from "react";
import "./movie.css";
import {addProduct} from "../../action";
import {connect} from 'react-redux';

const products = ({data,addToCart}) => {
  console.log('products props >>>',data)
  return (
 

 
    <div className="card-container" >
  <img src={data.image} className="card-img-top" alt={data.productName}/>
  <div className="card-body">
    <h5 className="card-title">{data.productName}</h5>
    <p className="card-text">Price :${data.originalPrice}</p>
    <button className="add-cart" onClick={() => addToCart(data)}>Add To Cart</button> 
  </div>
</div>




  );
};


const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => dispatch(addProduct(data)),
 
})

export default connect(null, mapDispatchToProps)(products )

// export default products;
