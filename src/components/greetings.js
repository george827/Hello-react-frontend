import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGreeting } from '../store/greetingReducer';

export default function Greetings() {
  const dispatch = useDispatch();
  const { loading, error, greeting } = useSelector((state) => state.greeting);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  const handler = () => {
    dispatch(fetchGreeting());
  };

  return (
    <div className="greeting-container">
      {loading && <div className="loader" />}
      {error && <p>Error!</p>}
      <h1>{!loading && greeting}</h1>
      {!loading && <button type="button" className="button-1" onClick={handler}>Refresh</button>}
    </div>
  );
}
