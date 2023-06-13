import { collection, getDocs, query,  addDoc } from "firebase/firestore";
import { db } from "../Firebase";

// CREATE
export const GuardarComentario = async(Nombre, Comentario) => {
    addDoc(collection(db, "Comentarios"),{Nombre, Comentario});
}



// READ
export const getComentarios= async ()  => {
    const result = await getDocs(query(collection(db, "Comentarios")));
    return result
}


/* UPDATE
export const updateItem = async (id, obj) => {
    const docRef = doc(db, 'items', id);
    await updateDoc(docRef, obj)
}*/


/* READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const colRef = collection(db, 'items');
    const result = await getDocs(query(colRef, where('age', '==', value)));
    return getArrayFromCollection(result);
}*/
/*
export const getItemById = async (id) => {
    const docRef = doc(db, 'items', id);
    const result = await getDoc(docRef);
    return result.data();
}*/

/* DELETE
export const deleteItem = async (id) => {
    const docRef = doc(db, 'items', id);
    await deleteDoc(docRef);
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}*/