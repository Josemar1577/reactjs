import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANYzBnWZXxlQ597joVQYFS47TvfvxIGWM",
    authDomain: "calm-photon-178020.firebaseapp.com",
    databaseURL: "https://primeiro-app-f99a0.firebaseio.com/",
    projectId: "calm-photon-178020",
    storageBucket: "calm-photon-178020.appspot.com",
    messagingSenderId: "1065050990956"

})
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base