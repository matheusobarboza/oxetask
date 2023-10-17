import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAqKICasRHAc-hNe0nRiJXXCCE5fQCuugQ",
  authDomain: "tasks-28d52.firebaseapp.com",
  projectId: "tasks-28d52",
  storageBucket: "tasks-28d52.appspot.com",
  messagingSenderId: "947554132664",
  appId: "1:947554132664:web:045dff7a539338485a8a4d",
  measurementId: "G-VE6ZMET5Z0"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export {
  db,
  storage
}