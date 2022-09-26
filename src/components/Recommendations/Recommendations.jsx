import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import RecipesContext from '../../contexts/Recipes/RecipesContext';
import useRecommendations from '../../hooks/useRecommendations';
import RecommendationCard from '../RecommendationCards/RecommendationCard';

function Recommendations({ option }) {
  const { drinksRecommendations } = useContext(RecipesContext);
  useRecommendations(option);

  return (
    <Row className="m-0">
      <h6 className="pl-4 mt-3">Drinks Recommendations:</h6>
      <Table responsive className="m-0">
        <tbody>
          <tr>
            {
              drinksRecommendations.map((alternative, index) => (
                <td key={ index }>
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
