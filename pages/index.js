import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Elegant Todo App</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className={styles.input}
        />
        <button onClick={addTodo} className={styles.button}>Add Task</button>
      </div>
      <ul className={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index} className={styles.todoItem}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
