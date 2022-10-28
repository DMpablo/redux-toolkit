import React from "react";
import Navigation from './src/Navigation'
import { init } from "./src/db";

init()
  .then(()=>{
    console.log('initialized database');
  })
  .catch((err)=>{
    console.log('Initialization error')
    console.log(err)
  })


export default function App() {
  return (
    <Navigation/>
  );
}


