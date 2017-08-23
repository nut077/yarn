import React from 'react'
import styles from './Root.scss'
import Hi from './Hi'

function getMessage() {
  return 'Hello World eiei'
}

export default () => (
  <div>
    <h1 className={styles.hello}>{getMessage()}</h1>
    <Hi/>
    <div>Hello React Hot Loader</div>
  </div>
);