import ProductCard from '../components/ProductCard';
import products from '../data/items';

export default function Home() {
  return (
    <div className="">
      {products.map(
        (product)=>(
          <ProductCard key={product.id} {...product}/>
        )
      )}
    </div>
  )
}
