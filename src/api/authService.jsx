import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDocs,
  getDoc,
  collection,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { auth, db } from "./firebase";

export const signUp = async (email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      name: name,
      cart: [],
    });

    return user;
  } catch (error) {
    console.log("Erro ao cadastrar:", error.message);

    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.log("Erro a fazer login:", error.message);
    throw error;
  }
};

export const getUser = async (uid) => {
  if (!uid) {
    return;
  }
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const user = querySnapshot.docs.find((doc) => doc.id === uid);
    const userName = user._document.data.value.mapValue.fields.name.stringValue;
    const userInfo = user._document.data.value.mapValue.fields;
    return { userName, userInfo };
  } catch (error) {
    console.log("Usuario não encontrado");
    throw error;
  }
};

export const addItemCart = async (uid, newItem) => {
  try {
    const userRef = doc(db, "users", uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const cartData = userDoc.data().cart || [];
      const itemIndex = cartData.findIndex((item) => item.id === newItem.id);

      if (itemIndex >= 0) {
        cartData[itemIndex].qtd += 1;
        await updateDoc(userRef, { cart: cartData });
        console.log("Item atualizado com sucesso");
        return;
      } else {
        await updateDoc(userRef, {
          cart: arrayUnion(newItem),
        });

        console.log("Item adicionado ao carrinho com sucesso!");
      }
    } else {
      console.log("Usuario não encontrado");
    }
  } catch (error) {
    console.log("Erro ao adicionar item ao carrinho!", error.message);
    throw error;
  }
};

export const removeItemCart = async (uid, itemId) => {
  try {
    const userRef = doc(db, "users", uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      let cartData = userDoc.data().cart || [];
      const itemIndex = cartData.findIndex((item) => item.id === itemId);

      if (itemId >= 0) {
        if (cartData[itemIndex].qtd > 0) {
          cartData[itemIndex].qtd -= 1;
          await updateDoc(userRef, { cart: cartData });
          console.log("Quantidade decrementada com sucesso");
          return;
        } else {
          const updatedCart = cartData.filter((item) => item.id !== itemId);
          await updateDoc(userRef, { cart: updatedCart });
          console.log("Item removido com sucesso");
        }
      }
    }
  } catch (error) {
    console.log("Erro ao remover item do carrinho!", error.message);
    throw error;
  }
};

export const getCartList = async (uid) => {
  try {
    const userRef = doc(db, "users", uid);
    const userDoc = await getDoc(userRef);
    const cartData = userDoc.data();
    return cartData.cart;
  } catch (error) {
    console.log("Erro ao buscar lista", error.message);
  }
};
