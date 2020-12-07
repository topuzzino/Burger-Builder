import React from 'react'
import BurgerIngredients from './BurgerIngredients'
import styles from './Burger.module.css'

const burger = ({ingredients}) => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredients type='breadTop'/>
      <BurgerIngredients type='cheese'/>
      <BurgerIngredients type='meat'/>
      <BurgerIngredients type='breadBottom'/>
    </div>
  )
}

export default burger