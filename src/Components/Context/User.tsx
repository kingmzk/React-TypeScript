import {useContext} from "react"
import {UserContext} from "./UserContext"

const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        if(userContext){
            userContext.setUser({
                name:'mzk',
                email:'mzk@gmail.com'
            })
        }
    }
    const handleLogout = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }
  return (
    <div>
        <button onClick={handleLogin}>Log IN</button>
        <button onClick={handleLogout}>Log OUT</button>
        <div>User Name is : {userContext?.user?.name} </div>
        <div>User Email is : {userContext?.user?.email} </div>
    </div>
  )
}

export default User
