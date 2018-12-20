import React from 'react';
import PropTypes from 'prop-types';

function HomeScene(props) {
  const {name} = props;
  return (
    <div>
      Hello World {name} !
    </div>
  )
}


HomeScene.defaultProps = {
  name: 'Unknown'
};

HomeScene.propTypes = {
  name: PropTypes.string.isRequired
};

export default HomeScene;