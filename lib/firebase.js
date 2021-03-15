import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC5tg79ofc7AW3g5sCjcC6dEKhycjCqeQ0",
  authDomain: "variablescoop-sandbox.firebaseapp.com",
  projectId: "variablescoop-sandbox",
  storageBucket: "variablescoop-sandbox.appspot.com",
  messagingSenderId: "472071546725",
  appId: "1:472071546725:web:8ed55f962b2dda32de638c",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export async function getPdfsFromStorage() {
  // Points to the root reference
  try {
    const storageRef = storage.ref().child("pdfs");
    // Create a reference under which you want to list
    // Find all the prefixes and items.
    const data = await storageRef
      .listAll()
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
          console.log(folderRef);
        });
        res.items.forEach((itemRef) => {
          // All the items under listRef.
          console.log(itemRef);
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
    return data;
  } catch (err) {
    console.log(`get pdfs error: ${err}`);
  }
}
