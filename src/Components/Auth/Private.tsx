import Login from "./Login"
import { ProfileProps } from "./Profile"

type privateProps = {
    isLoggedIn : boolean
    Component : React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedIn, Component} : privateProps) => {
    if(isLoggedIn){
        return <Component name="Zakria" />
    }
    else {
        return <Login/>
    }
}