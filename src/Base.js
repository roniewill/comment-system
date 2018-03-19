import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
  	apiKey: "AIzaSyDlQ3Bdnrh_6F2gZfshfINlH8ItZWO4LBU",
	authDomain: "reactjs-comments-system.firebaseapp.com",
	databaseURL: "https://reactjs-comments-system.firebaseio.com",
	projectId: "reactjs-comments-system",
	storageBucket: "reactjs-comments-system.appspot.com",
	messagingSenderId: "970567645087"
});

var db = firebase.database(app);
var base = Rebase.createClass(db);


export default base;