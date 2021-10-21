import React from 'react';
import PropTypes from 'prop-types';

const Minrequirements = (props) => {
  const { requirements } = props;
  console.log(requirements.os === null);

  return (
    <div className="minReqsContainer">
      <p>Minimum System Requirements</p>
      <table className="minReqsTable">
        <thead />
        <tbody>
          <tr>
            <td>OS</td>
            <td>
              {
              (requirements.os !== null && requirements.os !== undefined)
                ? requirements.os
                : 'Not Specified'
              }
            </td>
          </tr>
          <tr>
            <td>processor</td>
            <td>
              {
              (requirements.processor !== null && requirements.processor !== undefined)
                ? requirements.processor
                : 'Not Specified'
              }
            </td>
          </tr>
          <tr>
            <td>Memory</td>
            <td>
              {
              (requirements.memory !== null && requirements.memory !== undefined)
                ? requirements.memory
                : 'Not Specified'
              }
            </td>
          </tr>
          <tr>
            <td>Graphics</td>
            <td>
              {
              (requirements.graphics !== null && requirements.graphics !== undefined)
                ? requirements.graphics
                : 'Not Specified'
              }
            </td>
          </tr>
          <tr>
            <td>Storage</td>
            <td>
              {
              (requirements.storage !== null && requirements.storage !== undefined)
                ? requirements.storage
                : 'Not Specified'
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Minrequirements.propTypes = {
  requirements: PropTypes.shape({
    os: PropTypes.string,
    processor: PropTypes.string,
    memory: PropTypes.string,
    graphics: PropTypes.string,
    storage: PropTypes.string,
  }).isRequired,
};

export default Minrequirements;
