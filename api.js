import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
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
  const queryVans = query(vansCollectionRef, where('hostId', '==', 123))
  const snapshot = await getDocs(queryVans)
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
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
