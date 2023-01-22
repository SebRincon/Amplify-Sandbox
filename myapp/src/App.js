import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Todo } from './models';

function App() {
  
  async function update() {
    // Use DataStore obj to query, passing the data type and id
    const orginal = await DataStore.query(Todo, "c2c3e450-965f-4ddd-ad1f-42dda6b6ade9")

    /* Models in DataStore are immutable. To update a record you must use the copyOf function
    to apply updates to the item’s fields rather than mutating the instance directly */
    await DataStore.save(Todo.copyOf(orginal, item => {
        // Update the values on {item} variable to update DataStore entry
      item.name = `title: ${Date.now()}`
    }));
    
  }

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
      <button onClick={update}> Update </button>
    </div>
  );
}

export default App;
