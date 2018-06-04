import { firebaseStateReducer } from "react-redux-firebase"
import { firestoreReducer } from "redux-firestore"

import testReducer from "./test"

export default {
  firebase: firebaseStateReducer,
  firestore: firestoreReducer,
  test: testReducer
}
