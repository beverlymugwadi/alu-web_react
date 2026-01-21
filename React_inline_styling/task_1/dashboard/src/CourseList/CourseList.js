import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  courseList: {
    display: 'flex',
    justifyContent: 'center'
  },
  list: {
    listStyle: 'none',
    padding: '0',
    textAlign: 'center'
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #e0e0e0'
  }
});

function CourseList() {
  return (
    <div className={css(styles.courseList)}>
      <ul className={css(styles.list)}>
        <li className={css(styles.listItem)}>ES6</li>
        <li className={css(styles.listItem)}>Webpack</li>
        <li className={css(styles.listItem)}>React</li>
        <li className={css(styles.listItem)}>Redux</li>
        <li className={css(styles.listItem)}>React Router</li>
        <li className={css(styles.listItem)}>Jest</li>
        <li className={css(styles.listItem)}>Immutable JS</li>
        <li className={css(styles.listItem)}>NormalizeJS</li>
      </ul>
    </div>
  );
}

export default CourseList;
