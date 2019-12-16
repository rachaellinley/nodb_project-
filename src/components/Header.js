import React from "react";
import "../styles/Header.css"


    class Header extends React.Component {
        constructor(){
            super()
        }

        render(){
            return(
                <div id="header">
                    <h1>My Bucket List</h1>
                </div>
            )
        }
    }

export default Header