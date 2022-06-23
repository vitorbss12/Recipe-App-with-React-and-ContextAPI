import React from 'react';
import { useHistory } from 'react-router-dom';
import DrinkIcons from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';
import FoodIcons from '../images/mealIcon.svg';

function Footer() {
  const fixedFooterBottom = {
    position: 'fixed',
    bottom: 0,
    zIndex: 1,
  };
  const history = useHistory();

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
        onClick={ () => history.push('/drinks') }
      />
      <input
        type="image"
        data-testid="explore-bottom-btn"
        src={ ExploreIcon }
        alt="Icone de Explorar"
        onClick={ () => history.push('/explore') }
      />
      <input
        type="image"
        data-testid="food-bottom-btn"
        src={ FoodIcons }
        alt="Icone de Comidas"
        onClick={ () => history.push('/foods') }
      />
    </footer>
  );
}

export default Footer;
