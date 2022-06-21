import React from 'react';
import DrinkIcons from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';
import FoodIcons from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer data-testid="footer">
      <button
        type="button"
        data-testid="drinks-bottom-btn"
        onClick={ (e) => e.preventDefault() }
      >
        <img
          alt="Icone de Bebidas"
          src={ DrinkIcons }
        />
      </button>
      <button
        type="button"
        data-testid="explore-bottom-btn"
        onClick={ (e) => e.preventDefault() }
      >
        <img
          alt="Icone de Explorar"
          src={ ExploreIcon }
        />
      </button>
      <button
        type="button"
        data-testid="food-bottom-btn"
        onClick={ (e) => e.preventDefault() }
      >
        <img
          alt="Icone de Comidas"
          src={ FoodIcons }
        />
      </button>
    </footer>
  );
}

export default Footer;
