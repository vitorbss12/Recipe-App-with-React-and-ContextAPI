import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import RecipesContext from '../../contexts/Recipes/RecipesContext';
import useRecommendations from '../../hooks/useRecommendations';
import RecommendationCard from '../RecommendationCards/RecommendationCard';
import './Recommendations.css';

function Recommendations({ option }) {
  const { drinksRecommendations, foodsRecommendations } = useContext(RecipesContext);
  const [recommendations, setRecommendations] = useState([]);

  useRecommendations(option);

  useEffect(() => {
    if (option === 'foods') {
      setRecommendations(foodsRecommendations);
    } else {
      setRecommendations(drinksRecommendations);
    }
  }, [foodsRecommendations, drinksRecommendations, option]);

  return (
    <Row className="m-0">
      <h6 className="pl-4 mt-1">Drinks Recommendations:</h6>
      <Table className="m-0">
        <tbody>
          <tr className="d-flex">
            {
              recommendations.map((alternative, index) => (
                <td key={ index } className="d-flex p-1">
                  <RecommendationCard
                    option={ option }
                    recipe={ alternative }
                  />
                </td>
              ))
            }
          </tr>
        </tbody>
      </Table>
    </Row>
  );
}

Recommendations.propTypes = {
  option: PropTypes.string.isRequired,
};

export default Recommendations;
