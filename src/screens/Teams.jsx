import React from "react";
import { Touchable, Text, View } from "react-native";
import HeaderLayout from "../layouts/HeaderLayout";
import TeamName from "../components/TeamName";
import { useNavigate } from "react-router-native";
const Teams = () =>{
    let history = useNavigate();

    function routeChats() {
        history("/chats");
    }
    return(
        <HeaderLayout>
            <TeamName routeTo={routeChats}/>
        </HeaderLayout>
    )
}

export default Teams;