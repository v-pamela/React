import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import SkeletonComponent from "../../common/skeleton/SkeletonComponent";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let queryDataBase;

    if (!categoryName) {
      queryDataBase = productsCollection;
    } else {
      queryDataBase = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(queryDataBase).then((response) => {
      let productsDataBase = response.docs.map((product) => {
        return { id: product.id, ...product.data() };
      });
      setItems(productsDataBase);
    });
  }, [categoryName]);

  return (
    <>
      {items.length === 0 ? (
        <div className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group transition animate-pulse">
          {[...Array(6)].map((_, index) => (
            <SkeletonComponent key={index} />
          ))}
          ;
        </div>
      ) : (
        <>
          <ItemList items={items} />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
