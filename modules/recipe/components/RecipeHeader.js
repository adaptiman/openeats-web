import React from 'react'
import PropTypes from 'prop-types'

import Ratings from '../../rating/components/Ratings'

const RecipeHeader = ({ photo, title, rating, addToMenu }) => {
  const actionButtons = (
    <div className="row options print-hidden">
      <div className="col-xs-12">
        <button className="btn btn-primary" onClick={addToMenu}>
          <span className="glyphicon glyphicon-calendar" aria-hidden="true"/>
        </button>
        <button className="btn btn-primary" onClick={ window.print }>
          <span className="glyphicon glyphicon-print" aria-hidden="true"/>
        </button>
      </div>
    </div>
  );

  if (photo) {
    return (
      <div className="panel-heading hero-image" style={{backgroundImage: "url(" + photo + ")"}}>
        <div className="row title">
          <div className="col-xs-12">
            <h3>{ title }</h3>
            <Ratings stars={ rating }/>
          </div>
        </div>
        { actionButtons }
      </div>
    );
  }

  return (
    <div className="panel-heading">
      <div className="row">
        <div className="col-xs-12">
          <h3>{ title }</h3>
          <Ratings stars={ rating }/>
        </div>
      </div>
      { actionButtons }
    </div>
  );
};

RecipeHeader.propTypes = {
  photo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  addToMenu: PropTypes.func,
};

RecipeHeader.defaultProps = {
  addToMenu: () => {},
};

export default RecipeHeader;
