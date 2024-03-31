import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

function Home(props) {
  const router = useRouter();
  const { data: session, status } = useSession();
  console.log({ session, status });

  const handleClick = () => {
    router.push("/product");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
      <Link href="/users">Users</Link>
      <Link href="/posts">Posts</Link>
      <button onClick={handleClick}>Place order</button>

      <hr />
      <h1>{session ? `Hi, ${session.user.name}` : ""}</h1>
    </div>
  );
}

export default Home;
