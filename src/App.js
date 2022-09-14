import React, { useEffect, useState } from "react";

function App() {
    //request server for current author info, list state
    //Author must log-in
    //check window.localStorage for log-in boolean
    //if current author is authorized, text area is enabled
    //submit button sends request to server with author and list state

    const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('travel-up-login') || false);


    if (isLoggedIn) {
        return (
            <LoginForm func={setIsLoggedIn}/>
        )
    } else {
        return (
            <h1>Travel-UP placeholder!</h1>
        )
    }
}

export default App;