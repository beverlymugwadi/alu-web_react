import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f4f4f4',
    borderBottom: '2px solid #e0e0e0',
    padding: '20px',
    textAlign: 'center'
  },
  logo: {
    height: '60px',
    marginRight: '20px',
    verticalAlign: 'middle'
  }
});

export default function Header() {
  return (
    <header className={css(styles.header)}>
      <img src="/logo192.png" className={css(styles.logo)} alt="logo" />
      <h1>School Dashboard</h1>
    </header>
  );
}
