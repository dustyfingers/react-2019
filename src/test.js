import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collections('users')
    .doc('zmdpv7gaPLLteYZv2l0l')
    .collection('cartItems')
    .doc('YwPKPzjwAV9mSnTHuIKG');

// or

firestore.doc('/users/zmdpv7gaPLLteYZv2l0l/cartItems/YwPKPzjwAV9mSnTHuIKG');
firestore.collection('/users/zmdpv7gaPLLteYZv2l0l/cartItems');