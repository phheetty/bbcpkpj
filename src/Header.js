import React, { Component } from 'react';

class Header extends Component {
    render(){

        let { currentUser, isLoggedIn } = this.props
        currentUser = "Logged in as "+ currentUser

        return(
            <div> Header {isLoggedIn && currentUser}</div>
        )
    }
}

export default Header