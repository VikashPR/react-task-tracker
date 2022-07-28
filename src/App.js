import Header from './components/Header';

function App() {
  const name = 'Task Tracker';
  return (
    <div className="container">
      <Header title={name} />
      <h1>Hello World! </h1>
    </div>
  );
}

export default App;
