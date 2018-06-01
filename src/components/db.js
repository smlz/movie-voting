import Firebase from '@firebase/app'
// eslint-disable-next-line no-unused-vars
import FirebaseDatabase from '@firebase/database'

export default Firebase.initializeApp({
    apiKey: "AIzaSyD_3q1yyZJzv9wqUL7eyDW9eZ-WXtJ09nM",
    authDomain: "movie-voting-bc85c.firebaseapp.com",
    databaseURL: "https://movie-voting-bc85c.firebaseio.com",
    projectId: "movie-voting-bc85c",
    storageBucket: "movie-voting-bc85c.appspot.com",
    messagingSenderId: "143567399026"
}).database()