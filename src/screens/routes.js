import { useNavigate } from "react-router-native";

let history = useNavigate();

appRoutes ={
    routeProfile : () =>{
        history("/profile")
    },
    
}

export default appRoutes;