import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar = () => {
  const cartData = useSelector(state => state.shop.cart);
  // console.log(cartData);
  const [cartItemsNo, setCartItemsNo] = useState(0);
  console.log('Navbar Component');
  useEffect(() => {
    let count = 0;
    cartData.forEach(element => count += element.qty);
    setCartItemsNo(count);

    return () => {
    }
  }, [cartData, cartItemsNo])


  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>{cartItemsNo}</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
