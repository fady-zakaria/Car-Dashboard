import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "car-dashboard-31602.firebaseapp.com",
  projectId: "car-dashboard-31602",
  storageBucket: "car-dashboard-31602.appspot.com",
  messagingSenderId: "816682190389",
  appId: "1:816682190389:web:46dd4bcee1aba257e2537c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider_google = new GoogleAuthProvider();

const provider_Facebook = new FacebookAuthProvider();

provider_Facebook.setCustomParameters({
  display: "popup",
});

provider_google.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const storage = getStorage(firebaseApp);

export const db = getFirestore(firebaseApp);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  // use Writebatch to ensure that the collection added successfully
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  //
  const querySnapshot = await getDocs(q);
};

// export const signInWithGooglePopup = () => {
//   signInWithPopup(auth, provider_google)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider_google);

export const signInWithFacebookPopup = () => {
  signInWithPopup(auth, provider_Facebook)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createUserDocumentFromAuthGoogle = async (userAuth) => {
  if (!userAuth) return;
  console.log("userAuth_firebase", userAuth.user.uid);
  const userDocRef = doc(db, "users", userAuth.user.uid);

  console.log("userDoc", userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log("usersnapshot", userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth.user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  // console.log("userAuth_firebase", userAuth.uid);
  const userDocRef = doc(db, "users", userAuth.uid);

  // console.log("userDoc", userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  // console.log("usersnapshot", userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    // const fullName = additionalInformation ;
    // console.log("fullname", fullName);
    // displayName = fullName;
    // console.log("displayname", displayName);

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const SignInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const updater = async (displayName, photoURL = null) => {
  await updateProfile(auth.currentUser, {
    displayName: displayName,
    photoURL: photoURL,
  });
};

export const upload_image = (imageName) => {
  const name = new Date().getTime() + imageName;
};
