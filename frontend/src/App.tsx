import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import TodoForm from './components/TodoForm';

function App() {

  const [isLoggedIn, setLoggedInStatus] = useState(false)
  const [isRegistered, setRegisteredStatus] = useState(false)

  return (
    <div className="container" >
      <Header user={isLoggedIn} userStatus={setLoggedInStatus} />
      {
        isLoggedIn ? (
          <LoginForm />
        ) : (
          <TodoForm />
        )
      }
    </div>
  );
}

export default App;
