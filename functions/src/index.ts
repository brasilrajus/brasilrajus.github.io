import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const onReq = functions.https.onRequest;

const users = [
    {Uid: 1, nome: 'Jonas', idade: 17},
    {Uid: 2, nome: 'Carlos', idade: 38},
    {Uid: 3, nome: 'Adriana', idade: 15},
    {Uid: 4, nome: 'Juliana', idade: 12}
]

const user = onReq((request, response) => {
    response.status(200).json({ 
        users
     })
})

const helloWorld = onReq((request, response) => {
    response.send("Hello World");
})

export { helloWorld, user }



// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
