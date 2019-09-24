import React from "react";

import classes from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  //["salad", "bacon", "cheese", "meat"]
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      // [...Array(0)] ==> creates [] an empty array with length of 0
      // [...Array(1)] ==> creates [undefined]
      // [...Array(2)] ==> creates [undefined, undefined]
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // 1st iteration
        // the [undefined] array is becoming [<BurgerIngredient key="salad0" type="salad" />]
        // 2nd iteration
        // the [undefined] array is becoming [<BurgerIngredient key="bacon0" type="bacon" />]
        // 3rd iteration
        // the [undefined, undefined] array is becoming [<BurgerIngredient key="cheese0" type="cheese" />, <BurgerIngredient key="cheese1" type="cheese" />]
        // 4th iteration
        // the [undefined, undefined] array is becoming [<BurgerIngredient key="meat0" type="meat" />, <BurgerIngredient key="meat1" type="meat" />]

        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      // Flattening an array of arrays with the reduce method
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  //console.log(transformedIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
