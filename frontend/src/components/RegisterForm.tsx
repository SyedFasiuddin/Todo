import { FC, useState } from 'react';

const RegisterForm: FC = () => {
  
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        checkPassword: ''
    })

  const onSubmit = (e: any) => {
    e.preventDefault()

    // TODO: 
    // 1 handle password validation
    // 2 handle registration
  }

  const onChange = (e: any) => {
      setFormData(prevState => ({
        ...prevState,  
        [e.target.name]: e.target.value
      }))
  }

  return (
    <section className="loginSection">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="usename">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            placeholder="Enter Username"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            placeholder="Enter strong password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkPassword">Retype Password</label>
          <input
            type="password"
            name="checkPassword"
            id="checkPassword"
            value={formData.checkPassword}
            placeholder="Retype the password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  )
}

export default RegisterForm 