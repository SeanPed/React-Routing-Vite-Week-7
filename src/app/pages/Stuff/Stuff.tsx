import React from 'react';
import { Link } from 'react-router-dom';

export default function stuff(): JSX.Element {
  return (
    <>
      <h2>Welcome to Stuff Page</h2>
      <Link to="/">Go Home</Link>
    </>
  );
}
