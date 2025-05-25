import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where
} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBLKLirmkzxXLqJHGk7UTAHLRVvDhhrGZU',
  authDomain: 'vanlife-18388.firebaseapp.com',
  projectId: 'vanlife-18388',
  storageBucket: 'vanlife-18388.firebasestorage.app',
  messagingSenderId: '786190940459',
  appId: '1:786190940459:web:e94e063bc441236e70ed6e',
  measurementId: 'G-KGZPC0GCQC',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const vansCollectionRef = collection(db, 'vans')

export const getVans = async () => {
  const snapshot = await getDocs(vansCollectionRef)
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }))
  return vans
}

export const getVan = async id => {
  const docRef = doc(db, 'vans', id)
  const snapshot = await getDoc(docRef)
  if (!snapshot.exists()) {
    throw new Error(`Van with ID ${id} not found`)
  }
  return {
    ...snapshot.data(),
    id: snapshot.id,
  }
}

export async function getHostVans(id) {
    const queryVans = query(vansCollectionRef, where("hostId", "==", 123))
    const snapshot = await getDocs(queryVans)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return vans
}

export async function loginUser(creds) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
  })
  const data = await res.json()

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    }
  }

  return data
}
