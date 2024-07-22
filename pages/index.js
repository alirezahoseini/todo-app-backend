import connectToDB from "@/utils/db";
import todosModel from "@/models/todo"
import { useState } from "react";

export default function Home({todos}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({title, description})
    });
    const data = await res.json()
    
    if(res.status === 201){
      alert('TODO CREATED !')
    }else{
      alert('Cnnot create new todo');
      console.log(data);
    }
  }
  return (
    <>
    <h1>New todo</h1>
    <form onSubmit={submitHandler} >
      <input value={title} onChange={(event)=> setTitle(event.target.value)} name="title" type="text" required />
      <input value={description} onChange={(event)=> setDescription(event.target.value)} name="description" type="text" required />
      <button type="submit">Create</button>
    </form>
    
    <h2>TODOS</h2>

    <ul>
      {todos ? (
        todos.map(item => (
          <li key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <hr />
          </li>
        ))
      ) : (
        <>
        Nothing 
        </>
      )}
    </ul>
    </>
  );
}


export async function getServerSideProps(context) {
  connectToDB();
  let todos = [];
  try {
    const getTodos = await todosModel.find({}, "-__v");
    todos = JSON.parse(JSON.stringify(getTodos));
  } catch (error) {
    console.log('Cannot Get all todos in /index.js - error => ', error);
  }

  return {
    props: {
      todos
    }
  }
} 