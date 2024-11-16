import React from 'react';
import Link from 'next/link';

const Arcade404 = () => {
  return (
    <div style={styles.container}>
      <div style={styles.arcade}>
        <div style={styles.screen}>
          <p style={styles.text}>404 - Not Found</p>
        </div>
        <div style={styles.controls}>
          <div style={styles.joystick}></div>
          <div style={styles.buttons}>
            <div style={styles.button}></div>
            <div style={styles.button}></div>
            <div style={styles.button}></div>
          </div>
        </div>
      </div>
      <Link href="/">
        <button style={styles.homeButton}>Return to Home</button>
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000',
  },
  arcade: {
    width: '300px',
    height: '500px',
    backgroundColor: '#333',
    border: '5px solid #555',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
  },
  screen: {
    width: '90%',
    height: '50%',
    backgroundColor: '#000',
    border: '5px solid #222',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#0f0',
    fontFamily: 'Courier, monospace',
    fontSize: '18px',
    textAlign: 'center',
  },
  controls: {
    width: '90%',
    height: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: '20px',
  },
  joystick: {
    width: '40px',
    height: '40px',
    backgroundColor: '#777',
    borderRadius: '50%',
    border: '3px solid #555',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    width: '30px',
    height: '30px',
    backgroundColor: '#f00',
    borderRadius: '50%',
    border: '3px solid #900',
  },
  homeButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#0f0',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Arcade404;
