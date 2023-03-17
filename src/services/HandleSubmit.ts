import axios from "axios"
import { Jwt } from "../components/Login/Types"
import { NavigateFunction, useNavigate } from 'react-router-dom'

type LoginProps = {
    user: string, 
    password: string,
    setUser: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>
    navigate: NavigateFunction
    setJwt: React.Dispatch<React.SetStateAction<Jwt>>
}

const onHandleSubmit = async ({user, password, setUser, setPassword, navigate, setJwt}: LoginProps) => {
    
    const data = await axios
      .post('http://localhost:8080/api/login', {
        username: user,
        password: password,
      })
      .then(data => data.data as Jwt)
      .catch(error => console.log(error))

    if (data != undefined) {
      setJwt(data)
      navigate('/home')
    } else {
      alert('Invalid credentials')
      setUser('')
      setPassword('')
    }
  }

  export default onHandleSubmit;