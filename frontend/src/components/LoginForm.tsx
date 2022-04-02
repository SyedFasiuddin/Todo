import { FC, useState } from 'react';

const LoginForm: FC = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e: any) => {
    e.preventDefault()

    // TODO:
    // 1 handle login
    // 2 handle logged in state
    // 3 handle token

    setEmail('')
    setPassword('')
  }

  return (
    <section className="loginSection">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}  
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  )
}

export default LoginForm