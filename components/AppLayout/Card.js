import React from "react";
import Link from "next/link";
import styles from "./Card.module.css";

const Card = ({ title, link, imgSrc, children }) => {
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
        
      </div>
    </div>
  );
};

export default Card;
