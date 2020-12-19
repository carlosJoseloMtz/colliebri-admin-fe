import React from 'react'
import './index.scss'

const Button = (props) => (
  <button className="btn" {...props}>{props.children}</button>
)

export default Button