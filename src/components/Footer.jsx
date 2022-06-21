import React from 'react';
import DrinkIcons from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';
import FoodIcons from '../images/mealIcon.svg';

function Footer() {
  const fixedFooterBottom = {
    position: 'fixed',
    bottom: 0,
  };

  return (
    <footer
      data-testid="footer"
      style={ fixedFooterBottom }
    >
      <input
        type="image"
        data-testid="drinks-bottom-btn"
        src={ DrinkIcons }
        alt="Icone de Bebidas"
        onClick={ () => console.log('Drink') }
      />
      <input
        type="image"
        data-testid="explore-bottom-btn"
        src={ ExploreIcon }
        alt="Icone de Explorar"
        onClick={ () => console.log('Explore') }
      />
      <input
        type="image"
        data-testid="food-bottom-btn"
        src={ FoodIcons }
        alt="Icone de Comidas"
        onClick={ () => console.log('Food') }
      />
    </footer>
  );
}

export default Footer;
