import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';

const App: React.FC = () => {
  return (
    <div>
      <Greeting name="Achref" />
      <Counter />
    </div>
  );
};

export default App;
