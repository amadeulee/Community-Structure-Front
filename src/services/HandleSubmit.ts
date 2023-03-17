import axios from "axios"
import { Jwt } from "../components/Login/Types"
import { useNavigate } from 'react-router-dom'

type LoginProps = {
    user: string, 
    password: string,
    setUser: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>

}

const navigate = useNavigate();

const onHandleSubmit = async ({user, password, setUser, setPassword}: LoginProps) => {
    const data = await axios
      .post('http://localhost:8080/api/login', {
        username: user,
        password: password,
      })
      .then(data => data.data as Jwt)
      .catch(error => console.log(error))

    if (data != undefined) {
      console.log(data.jwt_token)
      navigate('/ola')
    } else {
      alert('Invalid credentials')
      setUser('')
      setPassword('')
    }
  }

  export default onHandleSubmit;