import ProductCard from '../../components/ProductCard';
import products from '../../data/items';

export default function Home() {
  return (
    <div className="grid gap-4 grid-cols-4">
      {products.map(
        (product)=>(
          <ProductCard key={product.id} {...product}/>
        )
      )}
    </div>
  )
}
