import { useRouter } from "next/router";

function ProductDetail(props) {
  const router = useRouter();
  const { productId } = router.query;

  console.log(productId);

  return <h1>Details about product {productId}</h1>;
}

export default ProductDetail;
