import { createClient } from "contentful";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import NavigationBarWithWhiteLogo from "../components/NavbarWithWhiteLogo";
import styles from "../styles/Blog.module.css";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blogs: res.items,
    },
    revalidate: 1,
  };
}

Blog.title = "Blog | Codnify";
Blog.description = "Codnify Blog";

export default function Blog({ blogs }) {
  const aboveFoldStyling = {
    backgroundImage:
      "url('/images/wavy-hero.png'), url('/images/blog/above-fold-blog.png')",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center, right bottom",
  };
  console.log(blogs);

  return (
    <div>
      <Head>
        <link rel='icon' href='/images/logo.png' />
      </Head>

      <div className='blogAboveFold' style={aboveFoldStyling}>
        <header className='services-header'>
          <NavigationBarWithWhiteLogo />
        </header>
        <Container>
          <Row>
            <Col className='services-copy-text'>
              <h1>Blog</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <main className={styles.main}>
        <Container as='section' className='section-blog'>
          <div className='section-blog__inner'>
            {blogs.map((blog) => (
              <BlogCard key={blog.sys.id} blog={blog} />
            ))}
          </div>
        </Container>
      </main>

      <div className='footer-container'>
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
}
