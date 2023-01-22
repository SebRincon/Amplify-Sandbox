import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';

function App()  {
  async function addTodo() {

      await DataStore.save(
    new Todo({
		"name": "Lorem ipsum dolor sit amet",
		"description": "Lorem ipsum dolor sit amet"
    })
    );
  }

  async function logData() {
    const models = await DataStore.query(Todo);
    console.log(models);
  }
  


  
  return (
    
    <div className="App">
      <button onClick={addTodo}> Add </button>
      <button onClick={logData}> Log </button>
    </div>
  );
}

export default App;
