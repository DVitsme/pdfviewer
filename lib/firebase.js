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

export async function signInWithGoogle() {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
}

export async function signOut() {
  await auth.signOut();
  window.location.reload();
}

export function checkAuth(cb) {
  return auth.onAuthStateChanged(cb);
}
export async function createDocument(article, user, dbType) {
  const { title, description, image = null, item = null } = article;
  let res;
  res =
    item?.link &&
    (await fetch(
      `https://screenshotapi.net/api/v1/screenshot?url=${item.link}&token=QB10YK2XOYEYRV8GINWSAMQVJ9IEVGG7`
    ));
  const urlImage = await res.json();
  await db.collection(`${dbType}`).add({
    title,
    description,
    image: image ? await uploadFiles(image) : null,
    urlImage: item.link ? urlImage.screenshot : null,
    created: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

export function uploadFiles(file) {
  const uploadTask = storage
    .ref(`testImages/${file.name}-${file.lastModified}`)
    .put(file);
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => console.log("image uplading", snapshot),
      // handle error  here
      reject,
      () => {
        storage
          .ref("testImages") // create a folder named images
          .child(`${file.name}-${file.lastModified}`) // name that image the name of the and the date to ensure no overlap
          .getDownloadURL() // send back link to the image
          .then(resolve); // resolve the promise
      }
    );
  });
}

export async function createListItem({ user, listId, item }) {
  try {
    console.log(data);
    db.collection("lists")
      .doc(listId)
      .collection("items")
      .add({
        name: item.name,
        link: item.link,
        image: data.screenshot,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        author: {
          id: user.uid,
          username: user.displayName,
        },
      });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}
