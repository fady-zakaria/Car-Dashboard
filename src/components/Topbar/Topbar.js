import React, { useState, useEffect } from "react";
import "./topbar.css";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/features/authSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { selectuser } from "../../redux/features/authSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { deepPurple } from "@mui/material/colors";
// import { getuser } from "../../redux/features/userSlice";

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const currentUser = useSelector(selectuser);
  const [currentUser, setcurrentUser] = useState({});
  console.log("current----user from top bar", currentUser);
  const [username, setusername] = useState("");
  // const [userphoto, setuserphoto] = useState("");
  // const [isLoggedIn, setloggedIn] = useState(false);

  // const user = useSelector(selectuser);
  // console.log("user from redux", user);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       if (user.displayName == null) {
  //         const name = user.email.slice(0, -10);
  //         setuserName(name);
  //       }
  //       dispatch(
  //         SET_ACTIVE_USER({
  //           email: user.email,
  //           userName: user.displayName ? user.displayName : userName,
  //           userID: user.uid,
  //           photoURL: user.photoURL,
  //         })
  //       );
  //       setloggedIn(true);
  //       setuserphoto(user.photoURL);
  //       console.log("user from useEffect", user);
  //       console.log("user name from useEffect", user.displayName);
  //     } else {
  //       setuserName("");
  //       dispatch(REMOVE_ACTIVE_USER());
  //       console.log("there is no user ");
  //     }
  //   });
  // }, [dispatch, userName]);

  useEffect(() => {
    setcurrentUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  // useEffect(() => {}, []);

  setTimeout(() => {
    const name =
      currentUser.userName.split(" ")[0][0] +
      currentUser.userName.split(" ")[1][0];
    console.log(name);
    setusername(name);
  }, 1);
  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(REMOVE_ACTIVE_USER());
        setcurrentUser(null);
        navigate("/");
        // setloggedIn(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const stringAvatar = () => {
  //   if (!currentUser) {
  //     return { src: "/broken-image.jpg" };
  //   }
  //   return {
  //     sx: {
  //       bgcolor: deepPurple[500],
  //     },
  //     children: `${currentUser.userName.split(" ")[0][0]}${
  //       currentUser.userName.split(" ")[1][0]
  //     }`,
  //   };
  // };

  return (
    <div className="topbar">
      <div className="topbar-contents">
        <div className="search-bar">
          <div className="search-contents">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M20.1191 18.3129L16.4113 14.6329C17.8505 12.8373 18.5475 10.5582 18.3589 8.26415C18.1704 5.97016 17.1105 3.83564 15.3974 2.2995C13.6843 0.76336 11.448 -0.0576363 9.14852 0.00532409C6.84901 0.0682845 4.66099 1.01042 3.03438 2.638C1.40777 4.26558 0.466194 6.45489 0.403271 8.75578C0.340348 11.0567 1.16086 13.2942 2.69608 15.0084C4.23131 16.7225 6.36456 17.783 8.65719 17.9717C10.9498 18.1604 13.2276 17.463 15.0221 16.0229L18.6999 19.7029C18.7928 19.7966 18.9034 19.871 19.0252 19.9217C19.1469 19.9725 19.2776 19.9987 19.4095 19.9987C19.5414 19.9987 19.6721 19.9725 19.7938 19.9217C19.9156 19.871 20.0262 19.7966 20.1191 19.7029C20.2992 19.5164 20.3999 19.2672 20.3999 19.0079C20.3999 18.7485 20.2992 18.4993 20.1191 18.3129ZM9.41544 16.0229C8.0318 16.0229 6.67922 15.6123 5.52876 14.8431C4.3783 14.074 3.48163 12.9807 2.95213 11.7016C2.42263 10.4226 2.28409 9.01509 2.55403 7.65722C2.82396 6.29935 3.49025 5.05207 4.46864 4.07311C5.44702 3.09414 6.69356 2.42745 8.05062 2.15736C9.40768 1.88726 10.8143 2.02588 12.0926 2.5557C13.371 3.08551 14.4636 3.98272 15.2323 5.13386C16.001 6.28501 16.4113 7.63838 16.4113 9.02285C16.4113 10.8794 15.6742 12.6598 14.3622 13.9726C13.0503 15.2854 11.2709 16.0229 9.41544 16.0229Z"
                fill="#7C7C8D"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="22"
              viewBox="0 0 3 22"
              fill="none"
            >
              <rect x="0.399902" width="2" height="22" rx="1" fill="#EF9011" />
            </svg>
            <input
              type="text"
              placeholder="Search or type"
              className="search-input"
            />
          </div>
        </div>
        <div className="right">
          <Badge color="secondary" variant="dot">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                d="M17.1999 13.449V9.62358C17.1982 7.91915 16.5948 6.27033 15.4966 4.9691C14.3985 3.66788 12.8764 2.79823 11.1999 2.51416V1.20295C11.1999 0.883906 11.0735 0.577931 10.8484 0.352335C10.6234 0.126739 10.3182 0 9.9999 0C9.68164 0 9.37642 0.126739 9.15137 0.352335C8.92633 0.577931 8.7999 0.883906 8.7999 1.20295V2.51416C7.12343 2.79823 5.60133 3.66788 4.50316 4.9691C3.405 6.27033 2.80163 7.91915 2.7999 9.62358V13.449C2.09964 13.6971 1.4931 14.1564 1.06343 14.7637C0.633757 15.371 0.40199 16.0967 0.399902 16.8413V19.2472C0.399902 19.5662 0.526331 19.8722 0.751374 20.0978C0.976418 20.3234 1.28164 20.4501 1.5999 20.4501H5.3679C5.64424 21.4694 6.2475 22.3693 7.08462 23.0109C7.92173 23.6524 8.94618 24 9.9999 24C11.0536 24 12.0781 23.6524 12.9152 23.0109C13.7523 22.3693 14.3556 21.4694 14.6319 20.4501H18.3999C18.7182 20.4501 19.0234 20.3234 19.2484 20.0978C19.4735 19.8722 19.5999 19.5662 19.5999 19.2472V16.8413C19.5978 16.0967 19.366 15.371 18.9364 14.7637C18.5067 14.1564 17.9002 13.6971 17.1999 13.449ZM5.1999 9.62358C5.1999 8.34741 5.70561 7.12351 6.60579 6.22113C7.50596 5.31874 8.72686 4.81179 9.9999 4.81179C11.2729 4.81179 12.4938 5.31874 13.394 6.22113C14.2942 7.12351 14.7999 8.34741 14.7999 9.62358V13.2324H5.1999V9.62358ZM9.9999 21.6531C9.58107 21.6505 9.17019 21.5381 8.8081 21.3271C8.44601 21.1161 8.14531 20.8137 7.9359 20.4501H12.0639C11.8545 20.8137 11.5538 21.1161 11.1917 21.3271C10.8296 21.5381 10.4187 21.6505 9.9999 21.6531ZM17.1999 18.0442H2.7999V16.8413C2.7999 16.5222 2.92633 16.2162 3.15137 15.9906C3.37642 15.7651 3.68164 15.6383 3.9999 15.6383H15.9999C16.3182 15.6383 16.6234 15.7651 16.8484 15.9906C17.0735 16.2162 17.1999 16.5222 17.1999 16.8413V18.0442Z"
                fill="#7C7C8D"
              />
            </svg>
          </Badge>
          {!currentUser ? (
            <Link to="/signin">
              <button className="sign-in-btn-home">Sign in</button>
            </Link>
          ) : (
            <>
              {/* <Avatar alt="profile" src="assets/images/profile.png" /> */}
              {currentUser.photoURL ? (
                <Avatar
                  alt="profile"
                  src={currentUser.photoURL}
                  referrerpolicy="no-referrer"
                />
              ) : // <Avatar alt="profile">
              //   <AccountCircleIcon />
              // </Avatar>
              username ? (
                <Avatar sx={{ bgcolor: deepPurple[500] }}>{username}</Avatar>
              ) : (
                <Avatar src="/broken-image.jpg" />
              )}
              {/* <AccountCircleIcon /> */}
              {/* <img src={currentUser.photoURL} referrerpolicy="no-referrer" /> */}

              <button className="sign-in-btn-home" onClick={logoutUser}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
