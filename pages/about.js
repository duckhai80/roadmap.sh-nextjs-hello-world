// import styles from "@/styles/About.module.css";
import Footer from "@/components/layout/Footer";
import styles from "@/styles/About.module.scss";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About Khai Truong</title>
        <meta name="description" content="Free tutorials on web development" />
      </Head>
      <div className={styles.highlight}>About page</div>
      <h1 className="content">About</h1>
    </>
  );
}

export default About;

About.getLayout = function (page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
