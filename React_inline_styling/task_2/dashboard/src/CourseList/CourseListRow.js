import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  rowDefault: {
    backgroundColor: '#f5f5f5ab'
  },
  rowHeader: {
    backgroundColor: '#deb5b545'
  },
  thHeader: {
    textAlign: 'left',
    padding: '10px',
    fontWeight: 'bold'
  },
  tdDefault: {
    textAlign: 'left',
    padding: '10px'
  }
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = isHeader ? styles.rowHeader : styles.rowDefault;
  const cellStyle = isHeader ? styles.thHeader : styles.tdDefault;

  if (isHeader) {
    return (
      <tr className={css(rowStyle)}>
        <th className={css(cellStyle)}>{textFirstCell}</th>
        <th className={css(cellStyle)}>{textSecondCell}</th>
      </tr>
    );
  }

  return (
    <tr className={css(rowStyle)}>
      <td className={css(cellStyle)}>{textFirstCell}</td>
      <td className={css(cellStyle)}>{textSecondCell}</td>
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
