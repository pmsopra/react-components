import React from 'react';
import './Filters.scss';

function onSelectFilter(event) {
  const $filtersBody = event.target.closest('.Filters__body');
  const $filter = event.target;

  $filtersBody.querySelectorAll('.selected').forEach(element => {
    element.classList.remove('selected');
  });

  $filter.classList.add('selected');
}

function Filters() {
  return (
    <div className="Filters">
      <div className="Filters__header">
        <input type="text" placeholder="Filter..."></input>
      </div>
      <div className="Filters__body">
        <div className="Filters__filter" onClick={onSelectFilter}>Show tasks for today</div>
        <div className="Filters__filter" onClick={onSelectFilter}>Show tasks for tomorrow</div>
        <div className="Filters__filter" onClick={onSelectFilter}>Show tasks for next 3 days</div>
        <div className="Filters__filter" onClick={onSelectFilter}>Show tasks without date</div>
        <div className="Filters__filter" onClick={onSelectFilter}>Filter by deadline </div>
      </div>
    </div>
  );
}

export default Filters;
