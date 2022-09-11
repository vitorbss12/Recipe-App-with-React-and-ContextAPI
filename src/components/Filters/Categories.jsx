import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropDown from 'react-bootstrap/NavDropdown';
import FoodsContext from '../../context/FoodsContext';
import DrinksContext from '../../context/DrinksContext';
import FilterContext from '../../context/FilterContext';
import '../../styles/components/Filters/Categories.css';

function Categories({ type }) {
  const { setSelectedFoodFilter } = useContext(FoodsContext);
  const { setSelectedDrinkFilter } = useContext(DrinksContext);
  const { filterData, category, setCategory } = useContext(FilterContext);

  useEffect(() => {
    if (type === 'food') {
      setSelectedFoodFilter(category);
    }
    if (type === 'drink') {
      setSelectedDrinkFilter(category);
    }
    if (category === 'All') {
      setSelectedDrinkFilter(category);
      setSelectedFoodFilter(category);
    }
  }, [category, type, setSelectedFoodFilter, setSelectedDrinkFilter]);

  return (
    <Container>
      <Nav
        variant="pills"
        activeKey={ category }
        onSelect={ (k) => setCategory(k) }
        justify
      >
        <Nav.Item>
          <Nav.Link eventKey="All">All</Nav.Link>
        </Nav.Item>
        <NavDropDown title="+ Categories" id="nav-dropdown">
          { filterData.length > 1 && (
            filterData.map((filter) => (
              filter.strCategory !== 'Goat' && (
                <NavDropDown.Item
                  eventKey={ filter.strCategory }
                  key={ filter.strCategory }
                  title={ filter.strCategory }
                >
                  { filter.strCategory }
                </NavDropDown.Item>
              )
            ))
          ) }
        </NavDropDown>
      </Nav>
    </Container>
  );
}

Categories.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Categories;
