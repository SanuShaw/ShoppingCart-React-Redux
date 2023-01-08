import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";

import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const cartData = useSelector(state => state.shop.cart);
  const [itemCount, setItemCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  console.log('Cart Component');

  useEffect(() => {
    let count = 0;
    let amount = 0;
    cartData.forEach(element => {
      count += element.qty;
      amount += element.qty * element.price;
    });
    setItemCount(count);
    setTotalAmount(amount);

    return () => { }
  }, [cartData])


  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {
          cartData.map(item =>
            <CartItem key={item.id} item={item} />
          )
        }
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({itemCount} items)</span>
          <span>Rs. {totalAmount.toFixed(2)} </span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
