import firebase from "@firebase/app"
import "@firebase/firestore"

export const getFirebaseApp = firebaseConfig =>
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app()
