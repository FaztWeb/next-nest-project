import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductForm } from "./product-form";
import { getProduct } from "../products.api";

interface Props {
  params: {
    id: string;
  };
}

async function ProductsNewPage({params}: Props) {
  const product = await getProduct(params.id);

  return (
    <div className="h-screen flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>
            {params.id ? "Edit Product" : "Create Product"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  );
}
export default ProductsNewPage;
