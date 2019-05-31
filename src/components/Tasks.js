import React from 'react';
import Box from './Box';
import './Tasks.scss';

const tasks = [
  {
    id: 1,
    title: 'Make a coffee',
    content: 'Maybe we should confider making stronger coffee with less milk so we could be awake earlier and absorb less fat and calories',
  },
  {
    id: 2,
    title: 'Run Runmageddon',
    content: 'We would like to participate in Runmageddon Silesia wit Sopra Steria team. https://www.runmageddon.pl/imprezy/runmageddon-silesia-jsw-s-a-31-08-2019',
    date: '31.08.2019',
    place: 'Górnicza 1, 44-193 Knurów',
  },
]

function Tasks() {
  return (
    <div className="Tasks">
      {tasks.map(task => <Box
        item={task}
        key={task.id} />)}
    </div>
  );
}

export default Tasks;
