import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sign.css";
import { signInWithGooglePopup, updater } from "../../firebase";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  createUserDocumentFromAuthGoogle,
  signInWithFacebookPopup,
} from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { SET_ACTIVE_USER } from "../../redux/features/authSlice";
import { updateCurrentUser } from "firebase/auth";

const defaultFormFields = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dispatchUserInfo = (userid, username, useremail, userphotoURL) => {
    dispatch(
      SET_ACTIVE_USER({
        email: useremail,
        userName: username,
        userID: userid,
        photoURL: userphotoURL,
      })
    );
  };
  const [errorvalidation, setErrorvalidation] = useState(false);
  const [errortext, setErrorText] = useState("");

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstname, lastname, email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const logGoogleUser = async () => {
    const user = await signInWithGooglePopup();
    console.log("user_from_signin", user);
    const userDocRef = await createUserDocumentFromAuthGoogle(user);
    console.log("userDocRef_from_signin", userDocRef);
    // dispatch(
    //   SET_ACTIVE_USER({
    //     email: user.user.email,
    //     userName: user.user.displayName,
    //     userID: user.user.uid,
    //     photoURL: user.user.photoURL,
    //   })
    // );
    dispatchUserInfo(
      user.user.uid,
      user.user.displayName,
      user.user.email,
      user.user.photoURL
    );
    navigate("/");
    // createUserDocumentFromAuthGoogle(user);
  };

  const logInFacebookUser = async () => {
    //Problem
    const response = await signInWithFacebookPopup();
    console.log(response);
    navigate("/");
  };

  const handlechange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let fullName = firstname + " " + lastname;
    console.log(fullName);
    let photoURL = null;

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      // console.log(user);
      await updater(fullName, photoURL);
      // user.updateDisplayName(displayName);
      // await user.reload();
      console.log("updated user", user);
      const userDocRef = await createUserDocumentFromAuth(user, {
        photoURL,
      });
      // const userDocRef = await createUserDocumentFromAuth(user);
      // console.log("userDocRef_from_signup", userDocRef);
      dispatchUserInfo(user.uid, fullName, user.email, user.photoURL);
      resetFormFields();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorText("Cannot create user, email already in use");
        setErrorvalidation(true);
      } else {
        // setErrorText("Wrong email or password!");
        // setErrorvalidation(true);
        console.log("Error while User Creation", error);
      }
    }
  };

  return (
    <div className="signin-container">
      <div className="wrapper">
        <div className="top-sign-in">
          <h3>Get Started</h3>
          <p>
            Already have an account?
            <span>
              <Link to="/signin"> Sign in</Link>
            </span>
          </p>
        </div>
        <div className="main-container">
          <div className="social-signin">
            <button type="button" className="google" onClick={logGoogleUser}>
              <img alt="logo google" src="assets/images/Logo Google.png" />
              Sign in with Google
            </button>
            <button
              type="button"
              className="facebook"
              onClick={logInFacebookUser}
            >
              <img alt="logo google" src="assets/images/Facebook.png" />
              Sign in with Facebook
            </button>
          </div>
          <div className="or-container">
            <hr />
            <p>or</p>
            <hr />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="form-container-signup">
                <div className="email-pass-container">
                  <div className="firstname">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="Delowar"
                      required
                      onChange={handlechange}
                      name="firstname"
                      value={firstname}
                    />
                  </div>
                  <div className="lastname">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Hossen"
                      required
                      onChange={handlechange}
                      name="lastname"
                      value={lastname}
                    />
                  </div>
                  <div className="email">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="uistore@gmail.com"
                      required
                      onChange={handlechange}
                      name="email"
                      value={email}
                    />
                  </div>
                  <div className="password">
                    <label>password</label>
                    <input
                      type="password"
                      placeholder="*********"
                      required
                      onChange={handlechange}
                      name="password"
                      value={password}
                    />
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                      className="svg-signup"
                    >
                      <path
                        d="M19.9165 8.1C17.8972 3.41 14.0986 0.5 10 0.5C5.90143 0.5 2.10275 3.41 0.0834557 8.1C0.0284116 8.22617 0 8.36234 0 8.5C0 8.63766 0.0284116 8.77383 0.0834557 8.9C2.10275 13.59 5.90143 16.5 10 16.5C14.0986 16.5 17.8972 13.59 19.9165 8.9C19.9716 8.77383 20 8.63766 20 8.5C20 8.36234 19.9716 8.22617 19.9165 8.1ZM10 14.5C6.8311 14.5 3.83215 12.21 2.10275 8.5C3.83215 4.79 6.8311 2.5 10 2.5C13.1689 2.5 16.1679 4.79 17.8972 8.5C16.1679 12.21 13.1689 14.5 10 14.5ZM10 4.5C9.20915 4.5 8.43606 4.7346 7.77849 5.17412C7.12093 5.61365 6.60841 6.23836 6.30577 6.96927C6.00312 7.70017 5.92394 8.50444 6.07823 9.28036C6.23251 10.0563 6.61334 10.769 7.17256 11.3284C7.73177 11.8878 8.44426 12.2688 9.21991 12.4231C9.99556 12.5775 10.7996 12.4983 11.5302 12.1955C12.2609 11.8928 12.8853 11.3801 13.3247 10.7223C13.7641 10.0645 13.9986 9.29113 13.9986 8.5C13.9986 7.43913 13.5773 6.42172 12.8274 5.67157C12.0776 4.92143 11.0605 4.5 10 4.5ZM10 10.5C9.60458 10.5 9.21803 10.3827 8.88925 10.1629C8.56046 9.94318 8.30421 9.63082 8.15288 9.26537C8.00156 8.89991 7.96197 8.49778 8.03911 8.10982C8.11626 7.72186 8.30667 7.36549 8.58628 7.08579C8.86589 6.80608 9.22213 6.6156 9.60996 6.53843C9.99778 6.46126 10.3998 6.50087 10.7651 6.65224C11.1304 6.80362 11.4427 7.05996 11.6624 7.38886C11.882 7.71776 11.9993 8.10444 11.9993 8.5C11.9993 9.03043 11.7887 9.53914 11.4137 9.91421C11.0388 10.2893 10.5302 10.5 10 10.5Z"
                        fill="#777E91"
                      />
                    </svg> */}
                  </div>
                </div>
              </div>
              <div className="forget">
                <div className="rem">
                  <input type="checkbox" name="RemMe" />
                  <label for="RemMe">Remember me</label>
                </div>
                {/* <p>Forget your password?</p> */}
              </div>
              <div className="error">
                {errorvalidation && <span>{errortext}</span>}
              </div>
              <button type="submit" className="signin-btn">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
