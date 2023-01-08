import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SingleItem.module.css";
import { addToCart } from '../../redux/shopping/shopping-actions';
import { loadCurrentItem, removeCurrentItem } from '../../redux/seletedProduct/seletedProduct-actions';
import { Link, useParams } from "react-router-dom";

const SingleItem = () => {
  const item = useSelector(state => state.seletedProduct);
  console.log('SingleItem Component');

  const dispatch = useDispatch();
  const { id: pId } = useParams();

  useEffect(() => {
    dispatch(loadCurrentItem(+pId))

    return () => {
      dispatch(removeCurrentItem())
    }
  }, [])

  if (!item || Object.keys(item).length === 0) {// 👈 null and undefined check
    return <h2 style={{ marginLeft: '45%' }}>Loading...🙃</h2>
  }

  const { image, title, description, price, id: p_id } = item;
  return (
    <div className={styles.singleItem}>
      <Link to='' style={{ fontSize: '2.4rem' }}>&larr;</Link>

      <img className={styles.singleItem__image} src={image} alt="" />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{title}</p>
        <p className={styles.details__description}>{description}</p>
        <p className={styles.details__price}>Rs. {price.toFixed(2)} </p>

        <button className={styles.details__addBtn} onClick={() => dispatch(addToCart(p_id))}>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleItem;
