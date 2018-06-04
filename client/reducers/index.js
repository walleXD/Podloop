import { firebaseStateReducer } from "react-redux-firebase"
import { firestoreReducer } from "redux-firestore"

export default {
  firebase: firebaseStateReducer,
  firestore: firestoreReducer
}
