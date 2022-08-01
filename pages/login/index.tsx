import { NextPage } from "next"
import { useContext } from "react"
import Login from "../../src/components/login/login"
import { CurrentUserContext } from "../../src/ContextAPi"

const LoginPage: NextPage = () => {

  return (
    <Login />
  )
}

export default LoginPage