import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from "react/jsvx-runtime"
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return (
    <div>
      <h1>Custom app !</h1>
    </div>
  )
}

// const ReactElement = {
//     type: "a",
//     props: {
//         href: 'https://google.com',
//         target: '_blank',
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="http://google..com" target="_blank">Visit google</a>
)


const anotherUser = "Chai aur react";

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  anotherElement
)

createRoot(document.getElementById('root')).render(
    reactElement
)
