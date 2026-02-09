import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CourseListRow.css';

const styles = {
  rowHeader: {
    backgroundColor: '#ddd',
    fontWeight: 'bold'
  },
  rowChecked: {
    backgroundColor: '#e6e4e4'
  }
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell, textThirdCell }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const getRowStyle = () => {
    if (isHeader) {
      return styles.rowHeader;
    }
    if (isChecked) {
      return styles.rowChecked;
    }
    return {};
  };

  if (isHeader) {
    return (
      <tr style={getRowStyle()}>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
        <th>{textThirdCell}</th>
      </tr>
    );
  }

  return (
    <tr style={getRowStyle()}>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {textFirstCell}
      </td>
      <td>{textSecondCell}</td>
      <td>{textThirdCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
  textThirdCell: PropTypes.string
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: '',
  textThirdCell: ''
};

export default CourseListRow;
