import React from 'react';
import CVForm from './component/FormCV/cvForm';
import './stayle/app.scss';
import ThemeToggle from './component/temes/temestogle';

const App: React.FC = () => {
  return (
    <div className="App">
      <CVForm />
      <ThemeToggle />
    </div>
  );
};

export default App;
