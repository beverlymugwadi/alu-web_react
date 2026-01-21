import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    padding: '20px',
    textAlign: 'center'
  },
  label: {
    marginRight: '10px'
  },
  input: {
    margin: '0 10px'
  }
});

export default function Login() {
  return (
    <>
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <label className={css(styles.label)} htmlFor="email">Email:</label>
        <input className={css(styles.input)} id="email" type="email" />
        <label className={css(styles.label)} htmlFor="password">Password:</label>
        <input className={css(styles.input)} id="password" type="password" />
        <button>OK</button>
      </div>
    </>
  );
}
