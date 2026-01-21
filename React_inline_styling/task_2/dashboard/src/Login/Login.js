import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    padding: '20px',
    textAlign: 'center'
  }
});

export default function Login() {
  return (
    <>
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" />
        <button>OK</button>
      </div>
    </>
  );
}
