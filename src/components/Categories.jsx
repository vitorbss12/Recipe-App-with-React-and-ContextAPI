import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import FoodsContext from '../context/FoodsContext';
import DrinksContext from '../context/DrinksContext';
import FilterContext from '../context/FilterContext';
import '../styles/Componentes/Categories.css';

function Categories({ type }) {
  console.log(type);
  const { setSelectedFoodFilter } = useContext(FoodsContext);
  const { setSelectedDrinkFilter } = useContext(DrinksContext);
  const { filterData } = useContext(FilterContext);
  const FILTERS_PER_VISUALIZATION = 6;

  useEffect(() => {
    setSelectedDrinkFilter('All');
    setSelectedFoodFilter('All');
  }, []);

  const handleClick = (selectedFilter) => {
    console.log(selectedFilter);
    if (type === 'food') {
      setSelectedFoodFilter(selectedFilter);
    }
    if (type === 'drink') {
      setSelectedDrinkFilter(selectedFilter);
    }
    if (selectedFilter === 'All') {
      setSelectedDrinkFilter(selectedFilter);
      setSelectedFoodFilter(selectedFilter);
    }
  };

  return (
    <Container>
      <Row>
        <Nav justify variant="tabs" defaultActiveKey="#All">
          <Nav.Item>
            <Nav.Link
              onClick={ () => handleClick('All') }
              href="#All"
              className="categories-nav-item"
            >
              All
            </Nav.Link>
          </Nav.Item>
          { filterData.length > 1 && (
            filterData.map((filter, index) => (
              index < FILTERS_PER_VISUALIZATION && (
                <Nav.Item
                  key={ filter.strCategory }
                >
                  <Nav.Link
                    onClick={ () => handleClick(filter.strCategory) }
                    href={ `#${filter.strCategory}` }
                    className="categories-nav-item"
                  >
                    {filter.strCategory}
                  </Nav.Link>
                </Nav.Item>
              )
            ))
          ) }
        </Nav>
      </Row>
    </Container>
  );
}

Categories.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Categories;
