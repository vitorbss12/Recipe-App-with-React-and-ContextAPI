import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import FoodsContext from '../../context/FoodsContext';
import DrinksContext from '../../context/DrinksContext';
import FilterContext from '../../context/FilterContext';

function Categories({ type }) {
  const { setSelectedFoodFilter } = useContext(FoodsContext);
  const { setSelectedDrinkFilter } = useContext(DrinksContext);
  const { filterData } = useContext(FilterContext);
  const [selected, setSelected] = useState('All');
  const FILTERS_PER_VISUALIZATION = 6;

  const setCategory = (selectedFilter) => {
    if (type === 'food') {
      setSelectedFoodFilter(selectedFilter);
      setSelected(selectedFilter);
    }
    if (type === 'drink') {
      setSelectedDrinkFilter(selectedFilter);
      setSelected(selectedFilter);
    }
    if (selectedFilter === 'All') {
      setSelectedDrinkFilter(selectedFilter);
      setSelectedFoodFilter(selectedFilter);
      setSelected(selectedFilter);
    }
  };

  return (
    <Container>
      <Row>
        <Nav justify variant="tabs" defaultActiveKey={ `#${selected}` }>
          <Nav.Item>
            <Nav.Link
              onClick={ () => setCategory('All') }
              href="#All"
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
                    onClick={ () => setCategory(filter.strCategory) }
                    href={ `#${filter.strCategory}` }
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
