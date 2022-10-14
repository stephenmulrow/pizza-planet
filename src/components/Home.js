import React from "react";
import { Link, Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Home() {
  return (
    <div className="homepage">
      <h1>Welcome To Pizza Planet</h1>
      <h2>Please select your role</h2>
      <ul>
      <Link to="/owner">
        <button className="buttons">Shop Owner</button>
        </Link>
        <br>
        </br>
        <br>
        </br>
      <Link to="/chef">
        <button className="buttons">Pizza Chef</button>
        </Link>
      </ul>
    </div>
  )
}