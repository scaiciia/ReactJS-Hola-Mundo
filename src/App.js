import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/container/componenteA';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio greeting.jsx */}
        {/* <Greeting name="Santiago"></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name={"Santiago"}></GreetingF> */}
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
