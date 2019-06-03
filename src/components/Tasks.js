import React from 'react';
import Box from './Box';
import './Tasks.scss';
import { tasks } from '../data';

function onMake(event, id) {
  const $box = event.target.closest('.Box');
  const height = $box.clientHeight;
  $box.style.maxHeight = height + 'px';
  $box.classList.add("erasing");

  setTimeout(() => {
    $box.parentNode.removeChild($box);
  }, 200);
}

function Tasks() {
  return (
    <div className="Tasks">
      {tasks.map(task => <Box
        item={task}
        key={task.id}
        options={[
          <button type="button" key={1} onClick={(event) => onMake(event, task.id)}>Make</button>,
          <button type="button" key={2} >Edit</button>,
          <button type="button" key={3} >Archieve</button>,
          <button type="button" key={4} >Delete</button>
        ]} />)}
    </div>
  );
}

export default Tasks;
