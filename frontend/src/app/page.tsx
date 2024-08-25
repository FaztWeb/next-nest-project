import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getProducts } from "./products/products.api";
import { ProductCard } from "@/components/product-card";

export const dynamic = "force-dynamic";

async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">NextNestApp</h1>

        <Link href="/products/new" className={buttonVariants()}>
          Create Product
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
export default HomePage;
