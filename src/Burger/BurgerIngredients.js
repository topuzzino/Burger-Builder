import React from 'react'
import PropTypes from 'prop-types'
import styles from './BurgerIngredients.module.css'

class BurgerIngredients extends React.Component {
  render () {
    let ingredient = null

    switch (this.props.type) {
      case 'breadBottom':
        ingredient = <div className={styles.BreadBottom}></div>
        break
      case 'breadTop':
        ingredient = 
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1}></div>
            <div className={styles.Seeds2}></div>
        </div>
        break
      case 'meat':
        ingredient = <div className={styles.Meat}></div>
        break
      case 'cheese':
        ingredient = <div className={styles.Cheese}></div>
        break
      case 'salad':
        ingredient = <div className={styles.Salad}></div>
        break
      case 'bacon':
        ingredient = <div className={styles.Bacon}></div>
        break
      default: 
        ingredient = null
    }
    return ingredient
  }
  
}

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired
}


export default BurgerIngredients