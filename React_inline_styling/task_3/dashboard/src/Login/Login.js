import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    padding: '20px',
    textAlign: 'center',
    '@media (max-width: 900px)': {
      padding: '10px'
    }
  },
  label: {
    display: 'block',
    marginTop: '10px',
    marginBottom: '5px'
  },
  input: {
    display: 'block',
    marginBottom: '10px',
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    '@media (max-width: 900px)': {
      width: '100%'
    }
  },
  button: {
    display: 'block',
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
});

export default function Login() {
  return (
    <>
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email" className={css(styles.label)}>Email:</label>
        <input id="email" type="email" className={css(styles.input)} />
        <label htmlFor="password" className={css(styles.label)}>Password:</label>
        <input id="password" type="password" className={css(styles.input)} />
        <button className={css(styles.button)}>OK</button>
      </div>
    </>
  );
}
