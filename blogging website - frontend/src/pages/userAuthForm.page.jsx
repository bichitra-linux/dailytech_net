import { Link } from "react-router-dom";
import InputBox from "../components/input.component";
import googleIcon from "../imgs/google.png";
import AnimationWrapper from "../common/page-animation";

const UserAuthForm = ({ type }) => {
    return (
        <AnimationWrapper keyValue={type}>
            <section className="h-cover flex items-center justify-center">
                <form className="w-[80%] max-w-[400px]">
                    <h1 className="text-4xl capitalize text-center mb-24">
                        {type === "sign-in" ? "Welcome Back" : "Join Us Today"}
                    </h1>
                    {
                        type != "sign-in" ?
                            <InputBox
                                name="fullname"
                                type="text"
                                placeholder="Enter your Full Name"
                                icon="fi-rr-user"
                            /> : ""
                    }

                    <InputBox
                        name="email"
                        type="email"
                        placeholder="Enter your Email Address"
                        icon="fi-rr-envelope"
                    />

                    <InputBox
                        name="password"
                        type="password"
                        placeholder="Enter your Password"
                        icon="fi-rr-key"
                    />

                    <button className="btn-dark center mt-14"
                        type="submit"
                    >
                        {type === "sign-in" ? "Sign In" : "Sign Up"}
                    </button>

                    <div className="relative flex w-full items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
                        <hr className="w-1/2 border-black" />
                        <p>or</p>
                        <hr className="w-1/2 border-black" />

                    </div>

                    <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
                        <img src={googleIcon} className="w-5 h-5" />
                        Continue With Google
                    </button>

                    {
                        type === "sign-in" ?
                            <p className="text-center text-black text-xl mt-4">
                                Don't have an account? <Link to="/signup" className="underline text-blue ml-1">Sign Up</Link>
                            </p> :
                            <p className="text-center text-black text-xl mt-4">
                                Already have an account? <Link to="/signin" className="underline text-blue ml-1">Sign In</Link>
                            </p>
                    }


                </form>
            </section>
        </AnimationWrapper>
    )
}

export default UserAuthForm;