import { useRouter } from "next/router";

function Review(props) {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  console.log(router.query);

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}

export default Review;
