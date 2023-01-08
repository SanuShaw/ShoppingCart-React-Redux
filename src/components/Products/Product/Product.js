import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

import { addToCart } from '../../../redux/shopping/shopping-actions';

const Product = ({ item }) => {
  let { image, title, description, price, id: p_id } = item;
  const dispatch = useDispatch();

  let maxChars = 300;
  if (window.innerWidth < 680) {
    console.log("For mobile" + window.innerWidth);
    maxChars = 160
  }

  description = description.length > maxChars ? description.substring(0, maxChars - 3) + '...' : description;
  return (
    <div className={styles.product}>
      <img className={styles.product__image} src={image} alt="" />

      <div className={styles.product__details}>
        <Link to={`/product/${p_id}`}>
          <p className={styles.details__title}
          // onClick={() => dispatch(loadCurrentItem(item))}
          >{title}</p>
        </Link>
        <p className={styles.details__desc}>{description}</p>
        <p className={styles.details__price}>Rs. {price.toFixed(2)} </p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${p_id}`}>
          <button className={`${styles.buttons__btn} ${styles.buttons__view}`}
          // onClick={() => dispatch(loadCurrentItem(item))}
          >
            View Item
          </button>
        </Link>
        <button className={`${styles.buttons__btn} ${styles.buttons__add}`} onClick={() => dispatch(addToCart(p_id))}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
