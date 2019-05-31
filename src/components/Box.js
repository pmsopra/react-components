import React from 'react';
import './Box.scss';

const tasks = [
  {
    title: 'Make a coffee',
    content: 'Maybe we should confider making stronger coffee with less milk so we could be awake earlier and absorb less fat and calories',
    date: '1 hour ago',
  }
]

function Box() {
  return (<>
    {tasks.map(task => <div className="Box">
      <div className="Box__header">
        Task: {task.title}
      </div>

      <div className="Box__body">
        <div className="title">
          <h2>{task.title}</h2>
        </div>

        <div className="content">
          <span>{task.content}</span>
        </div>

        <div className="options">
          <button type="button">Done</button>
          <button type="button">Archieve</button>
          <button type="button">Delete</button>
        </div>
      </div>
    </div>
    )}</>
  );
}

export default Box;
