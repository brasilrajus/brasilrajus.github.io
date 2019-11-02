import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const onReq = functions.https.onRequest;

const users = [
    { Uid: 1, nome: 'Jonas', idade: 17 },
    { Uid: 2, nome: 'Carlos', idade: 38 },
    { Uid: 3, nome: 'Adriana', idade: 15 },
    { Uid: 4, nome: 'Juliana', idade: 12 }
]

const db = admin.firestore();

/* const writeToFirestore = functions.firestore
    .document('users/SGfIngOvZIhhpsIpHwJEIE1Sm9K2')
    .onWrite((change, context) => {
        db.doc('users/SGfIngOvZIhhpsIpHwJEIE1Sm9K2').set({ teste: 'funcionou' });
    }); */

const writeToFirestore2 = functions.firestore
    .document('users/SGfIngOvZIhhpsIpHwJEIE1Sm9K2')
    .onWrite((change, context) => {
        db.doc('users/SGfIngOvZIhhpsIpHwJEIE1Sm9K2').update({ teste: 'Carlos, pare de me zoar 222' });
    });

// -----------
const userUnico = onReq((request, response) => {

    db.collection('users').doc('SGfIngOvZIhhpsIpHwJEIE1Sm9K2').get()
        .then(() => {
            response.status(200).json({

            })
        });
})

const user = onReq((request, response) => {
    response.status(200).json({
        users
    })

    db.doc('users/SGfIngOvZIhhpsIpHwJEIE1Sm9K2').update({ consoleLog: 'Log limpo' });
    //OK request.method
    //* request.rawBody
    //request.body.text
})


/*************************************/
/* Funções funcionando perfeitamente */
/*********************************** */

const lerJsonObject = onReq((request, response) => {
    response.status(200).json({ users });
});

const helloWorld = onReq((request, response) => {
    response.send("Olá, Mundo!");
});

const retornarDocument = onReq((request, response) => {
    let user = 'SGfIngOvZIhhpsIpHwJEIE1Sm9K2';
    db.collection('users').doc(user).get()
        .then((snapshot) => {
            response.send(JSON.parse(JSON.stringify(snapshot.data())));
        });
});

const retornarCollection = onReq((request, response) => {
    db.collection('users').get()
        .then(snap => {
            let rst: any = [];
            snap.forEach(doc => {
                rst.push(doc.data())
            })
            response.send(JSON.parse(JSON.stringify(rst)));
        });
});

const escutarModificacaoNoFirestore = functions.firestore
    .document('users/SGfIngOvZIhhpsIpHwJEIE1Sm9K2')
    .onWrite((change, context) => {
        db.doc('users/SGfIngOvZIhhpsIpHwJEIE1Sm9K2').update({ teste: 'Carlos, pare de me zoar 222' });
    });

//---------------------------------
export {
    helloWorld,
    user,
    writeToFirestore2,
    userUnico,
    retornarDocument,
    retornarCollection,
    escutarModificacaoNoFirestore,
    lerJsonObject
}
/**
 * TODO: Conectar as duas apis - cors
 * 
 * Modelo API padrão: https://firestore.googleapis.com/v1/projects/rajus-c8a95/databases/(default)/documents/users
 * 
 * [ ] - Colections 'users' Documents - [get] Todos
 *      nome: users
 *      metodo(verbo): get
 *      url(rota): https://us-central1-rajus-c8a95.cloudfunctions.net/users 
 *      Parametros: {}
 *      retorno: json [{},{}]
 * 
 * [ ] - Colections 'users' Documents - [get] Usando Uid
 *      nome: users
 *      metodo(verbo): get
 *      url(rota): https://us-central1-rajus-c8a95.cloudfunctions.net/users/Uid
 *      Parametros: {Uid} 
 *      retorno: json {uid: 'ad1ad1as1da', nome: 'string', ...}
 * 
 * [ ] - Colections 'users' Documents - [post] Usando rawBody parametros
 *      nome: users
 *      metodo(verbo): post
 *      url(rota): https://us-central1-rajus-c8a95.cloudfunctions.net/users 
 *      Parametros: {nome: 'string', ...}
 *      retorno: confirmação de recebimento pelo firebase ou erro
 *      
 * [ ] - Colections 'users' Documents - [put] Usando Uid + rawBody parametros
 *      nome: users
 *      metodo(verbo): put
 *      url(rota): https://us-central1-rajus-c8a95.cloudfunctions.net/users 
 *      Paramtros: Uid + {nome: 'string', ...}
 *      retorno: confirmação de recebimento pelo firebase ou erro
 * 
 * [ ] - Colections 'users' Documents - [delete] Usando Uid
 *      nome: users
 *      metodo(verbo): delete
 *      url(rota): https://us-central1-rajus-c8a95.cloudfunctions.net/users/Uid
 *      Parametros: {Uid} 
 *      retorno: confirmação de recebimento pelo firebase ou erro
 */

