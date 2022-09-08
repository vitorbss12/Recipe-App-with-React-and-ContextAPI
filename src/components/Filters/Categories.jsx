import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FoodsContext from '../../context/FoodsContext';
import DrinksContext from '../../context/DrinksContext';
import FilterContext from '../../context/FilterContext';
import '../../styles/components/Filters/Categories.css';

function Categories({ type }) {
  const { setSelectedFoodFilter } = useContext(FoodsContext);
  const { setSelectedDrinkFilter } = useContext(DrinksContext);
  const { filterData, category, setCategory } = useContext(FilterContext);
  const [filtersNumber, setFiltersNumber] = useState(0);
  const SIX = 6;
  const FIVE = 5;

  useEffect(() => {
    if (type === 'food') {
      setFiltersNumber(SIX);
    }
    if (type === 'drink') {
      setFiltersNumber(FIVE);
    }
  }, [type]);

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
      <Tabs
        className="categories-tabs"
        onSelect={ (k) => setCategory(k) }
        justify
        variant="pills"
        activeKey={ category }
      >
        <Tab eventKey="All" title="All" />
        { filterData.length > 1 && (
          filterData.map((filter, index) => (
            index < filtersNumber && (
              <Tab
                key={ filter.strCategory }
                eventKey={ filter.strCategory }
                title={ filter.strCategory }
              />
            )
          ))
        ) }
      </Tabs>
    </Container>
  );
}

Categories.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Categories;
