import ProductCard from "../../common/productCard/ProductCard";
import Hero from "../../layout/hero/Hero";
const ItemList = ({ items }) => {
  return (
    <>
      <Hero />
      <div className=" container items-center mt-5 mb-10">
        <div className="items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ItemList;
