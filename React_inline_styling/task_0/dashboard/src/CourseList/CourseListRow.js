import React from 'react';
import PropTypes from 'prop-types';

// Define style constants for better performance
const rowStyle = {
  backgroundColor: '#f5f5f5ab'
};

const headerStyle = {
  backgroundColor: '#deb5b545'
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const style = isHeader ? headerStyle : rowStyle;

  if (isHeader) {
    return (
      <tr style={style}>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr style={style}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: ''
};

export default CourseListRow;
