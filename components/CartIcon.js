import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from './CartIcon.module.css';

const CartIcon = () => {
  const totalItems = useSelector(state => state.cart.totalItems);

  return (
    <div className={styles['cart-icon-container']}>
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="text-green-500 cursor-pointer"
      />
      {totalItems > 0 && (
        <span className={styles['cart-icon-badge']}>
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
