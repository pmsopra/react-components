import React from 'react';
import './Box.scss';

function Box(props) {
  const { item, options } = props;

  return (
    <div className="Box" key={item.key}>
      <div className="Box__header">
        Task
      </div>

      <div className="Box__body">
        <div className="title">
          <h2>{item.title}</h2>
        </div>

        <div className="content">
          {item.content && <div>{item.content}</div>}
          {(item.content && (item.date || item.place)) && <div className="separator"></div>}
          {item.date && <div>Date: {item.date}</div>}
          {item.place && <div>Place: {item.place}</div>}
        </div>

        {options && <div className="options">
          {options.map(option => option)}
        </div>}

      </div>
    </div>
  );
}

export default Box;
