
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getProducts() {
  const data = await fetch(`${BACKEND_URL}/api/products`, {
      cache: "no-store",
  });
  return await data.json();
}

export async function getProduct(id: string) {
  const data = await fetch(`${BACKEND_URL}/api/products/${id}`, {
    cache: "no-store",
  });
  return await data.json();
}

export async function createProduct(productData: any) {
  const res = await fetch(`${BACKEND_URL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  const data = await res.json();
  console.log(data);
}

export async function deleteProduct(id: string) {
  const res = await fetch(`${BACKEND_URL}/api/products/${id}`, {
    method: "DELETE",
  });
  return await res.json();
}

export async function updateProduct(id: string, newProduct: any) {
  const res = await fetch(`${BACKEND_URL}/api/products/${id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProduct),
    cache: 'no-store'
  });
  return await res.json();
}