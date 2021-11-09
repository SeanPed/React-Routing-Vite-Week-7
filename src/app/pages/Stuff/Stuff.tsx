import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function stuff(): JSX.Element {
  // eslint-disable-next-line prefer-const
  let { thing } = useParams();
  console.log(useParams);
  return (
    <>
      <h2>Welcome to {thing}'s Page</h2>
      <Link to="/">Go Home</Link>
    </>
  );
}
