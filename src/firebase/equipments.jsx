import { db } from '../firebase-config'
import { setDoc, doc, collection, addDoc } from 'firebase/firestore'

const equipmentsCollection = collection(db, 'equipments',)

class Equipment__service {
  // add = async (obj) => {
  //   // return setDoc(doc(db, "equipments", id), obj)
  //   return await setDoc(equipmentsCollection, obj)
  // }
  // add2 = async (id, obj) => {
  //   return await setDoc(doc(db, "equipments", id), obj)
  // }
}
export default new Equipment__service();
