import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";
import { createContext, useState } from "react";

export const UserContext = createContext({})

const App = () => {

    const [userAuth, setuserAuth] = useState();

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