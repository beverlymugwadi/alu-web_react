import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    padding: '20px',
    borderTop: '2px solid #e0e0e0',
    backgroundColor: '#f9f9f9'
  }
});

export default function Footer() {
  return (
    <footer className={css(styles.footer)}>
      Copyright - Holberton School
    </footer>
  );
}
