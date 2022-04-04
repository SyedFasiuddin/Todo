import axios from 'axios';
import { FC, useState } from 'react';

const RegisterForm: FC = () => {
  
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        checkPassword: ''
    })

  const onSubmit = async (e: any) => {
    e.preventDefault()

    if(formData.password !== formData.checkPassword){
      console.log("Wrong password!")
      return
    }

    const API_URI = "/api/user/register/"

    const res = await axios.post(API_URI, formData)
    if(res.data){
      localStorage.setItem('token', res.data.token)
    }
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