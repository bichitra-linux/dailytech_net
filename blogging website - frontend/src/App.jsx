import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";
import { createContext, useState, useEffect } from "react";
import { lookInSession } from "./common/session";

export const UserContext = createContext({})

const App = () => {

    const [userAuth, setuserAuth] = useState({});

    useEffect(() => {
        let userInSession = lookInSession("user");

        userInSession ? setuserAuth(JSON.parse(userInSession)) : setuserAuth({ access_token: null});

    }, [])

    return (
        <UserContext.Provider value={{userAuth, setuserAuth}}>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="/signin" element={<UserAuthForm type="sign-in" />} />
                    <Route path="/signup" element={<UserAuthForm type="sign-up" />} />
                </Route>
            </Routes>
        </UserContext.Provider>
    )
}

export default App;