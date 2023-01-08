import React from "react";
import styles from "./CartItem.module.css";

import { removeFromCart, adjustItemQty } from '../../../redux/shopping/shopping-actions';
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>Rs. {item.price.toFixed(2)} </p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" value={item.qty}
            onChange={(e) => dispatch(adjustItemQty(item.id, e.target.value))} />
        </div>
        <button className={styles.actions__deleteItemBtn} onClick={() => dispatch(removeFromCart(item.id))}>
          <img
            src="https://www.svgrepo.com/show/21045/delete-button.svg"
            alt="delete"
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
