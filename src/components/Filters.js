import React from 'react';
import './Filters.scss';

function Filters() {
  return (
    <div className="Filters">
      <div>Show tasks for today</div>
      <div>Show tasks for tomorrow</div>
      <div>Show tasks for next 3 days</div>
      <div>Show tasks without date</div>
      <div>Filter by deadline </div>
    </div>
  );
}

export default Filters;
