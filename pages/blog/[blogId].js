import Head from "next/head";

function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Article</h1>
    </>
  );
}

export default Blog;

export async function getStaticPaths() {
  return {
    paths: [{ params: { blogId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps() {
  return {
    props: {
      title: "Article title",
      description: "Article description",
    },
  };
}
