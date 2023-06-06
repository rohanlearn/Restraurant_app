import classes from './MealItem.module.css';
import MealsForm from './MealsForm';
import { useState } from 'react';
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  

 


  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsForm amount={0}/>
      </div>
    </li>
  );
};

export default MealItem;