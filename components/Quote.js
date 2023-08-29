import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomQuote } from '../slices/cartSlice'; 
import styles from './MyComponentStyles.module.css'; 

const MyComponent = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote.quote);

  const handleFetchQuote = () => {
    dispatch(fetchRandomQuote());
  };

  return (
    <div className={styles.container}>
      <div className={styles['button-container']}>
        <button className={styles.button} onClick={handleFetchQuote}>
          Fetch Quotes of the day!🌸
        </button>
      </div>
      <div className={styles['quote-box']}>
        {quote && <p>{quote}</p>}
      </div>
    </div>
  );
};

export default MyComponent;
