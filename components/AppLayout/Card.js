import React from "react";
import Link from "next/link";
import styles from "./Card.module.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';

const Card = ({ title, link, imgSrc, children }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ name: title }));
  };

  return (
    <div className={`${styles.card} border rounded-lg `}>
      <Link href={link} className="text-gray-800">
        {title}
      </Link>
      <div className={styles.cardImageContainer}>
        <img
          src={imgSrc}
          alt={title}
          className={styles.cardImage}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className={styles.cardText}>
        {children}
        <br/>
        <button className={`${styles.addButton} mt-2`} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
