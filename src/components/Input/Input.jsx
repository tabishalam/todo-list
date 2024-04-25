import React from 'react'

import classes from "./Input.module.scss"

function Input({ value, onChange }) {
  return <input className={classes.input} type="text" placeholder="Add new list item" value={value} onChange={onChange}  />
}

export default Input;