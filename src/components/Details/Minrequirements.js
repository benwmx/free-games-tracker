import React from 'react';
import PropTypes from 'prop-types';

const Minrequirements = (props) => {
  const { requirements } = props;

  return (
    <div className="minReqsContainer">
      <p>Minimum System Requirements</p>
      <table className="minReqsTable">
        <thead />
        <tbody>
          <tr>
            <td>OS</td>
            <td>{requirements.os}</td>
          </tr>
          <tr>
            <td>processor</td>
            <td>{requirements.processor}</td>
          </tr>
          <tr>
            <td>Memory</td>
            <td>{requirements.memory}</td>
          </tr>
          <tr>
            <td>Graphics</td>
            <td>{requirements.graphics}</td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>{requirements.storage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Minrequirements.propTypes = {
  requirements: PropTypes.shape({
    os: PropTypes.string.isRequired,
    processor: PropTypes.string.isRequired,
    memory: PropTypes.string.isRequired,
    graphics: PropTypes.string.isRequired,
    storage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Minrequirements;
