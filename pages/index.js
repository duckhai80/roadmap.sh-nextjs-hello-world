import Link from "next/link";
import { useRouter } from "next/router";

function Home(props) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/product");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
      <button onClick={handleClick}>Place order</button>
    </div>
  );
}

export default Home;
