import React from "react";
import Componen from "./bahas/Componen";
import Fcomponen from "./bahas/Fcomponen";

export default class Bcomponent extends React.Component {
    
    render() {
        return (
            <div>
                <Componen name="MERN"/>
                <Fcomponen name="Anything & try everything"/>
            </div>
        )
    }
}