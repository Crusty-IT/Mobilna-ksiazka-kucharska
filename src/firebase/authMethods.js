import firebase from './firebaseIndex';

export const signIn = async (email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signUp = async (email, password) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
};
