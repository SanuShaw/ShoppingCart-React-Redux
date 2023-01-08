import React from "react";
import styles from "./Products.module.css";

import Product from "./Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadProducts } from '../../redux/shopping/shopping-actions';
import data from './sample-data';

const Products = () => {
  const productArr = useSelector((state) => state.shop.products);
  const dispatch = useDispatch();
  console.log('Products Component>>..', productArr);

  useEffect(() => {
    //fetch Data by api
    dispatch(loadProducts(data));
  }, [])


  return (
    <div className={styles.products}>
      {
        productArr.length > 0 ?
          productArr.map((product) =>
            <Product item={product} key={product.id} />
          )
          :
          <><h2>Loading..</h2></>
      }
    </div>
  );
};

export default Products;
