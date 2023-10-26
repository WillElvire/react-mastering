import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { db } from "./initialisation"


export  const addTodo = (todo : Required<{name : string , description : string }>)  =>  {
   const col = collection(db , "Plan");
   const doc = addDoc(col,{ ...todo , id :  new Date().getTime().toString() , createdAt : new Date() });
   return doc;
}

export const getTodos = async ()=> {
    const q = query(collection(db, "Plan"));
    const querySnapshot = await getDocs(q);
    const todos : any[] = [];
    querySnapshot.forEach((doc) => {
     todos.push({...doc.data(),docId : doc.id})
    });
    return todos;
}


export const deleteTodoTask = async (id : string) => {
    return await deleteDoc(doc(db, "Plan",id));
}

export const updateTask = async (todo : any , id : any) => {
    const docRef = doc(db, "plan", id);
    return await updateDoc(docRef, todo)
}