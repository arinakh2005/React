import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import mealsImageSrc from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImageSrc} alt="Meals image" />
      </div>
    </React.Fragment>
  );
};

export default Header;