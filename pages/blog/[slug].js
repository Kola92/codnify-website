import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer";
import NavigationBarWithWhiteLogo from "../../components/NavbarWithWhiteLogo";
import styles from "../../styles/Blog.module.css";
import Skeleton from "../../components/Skeleton";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "blog" });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  return {
    props: { blog: items[0] },
    revalidate: 1,
  };
}

const BlogDetails = ({ blog }) => {
  const aboveFoldStyling = {
    backgroundImage:
      "url('/images/wavy-hero.png'), url('/images/blog/above-fold-blog.png')",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center, right bottom",
  };

  if (!blog) return <Skeleton />;

  const {
    title,
    featuredImage,
    blogContent,
    authorName,
    authorTitle,
    authorImage,
    tags,
  } = blog.fields;

  const contents = blogContent.content.map((item) => {
    if (
      item.nodeType === "heading-1" ||
      item.nodeType === "heading-2" ||
      item.nodeType === "heading-3" ||
      item.nodeType === "heading-4" ||
      item.nodeType === "heading-5" ||
      item.nodeType === "heading-6"
    ) {
      return item.content[0].value;
    }
  });

  const cleanUpContents = contents.filter((item) => item !== undefined);

  return (
    <div>
      <Head>
        <link rel='icon' href='/images/logo.png' />
        <title>Blog - {title} | Codnify</title>
      </Head>

      <div className='blogAboveFold' style={aboveFoldStyling}>
        <header className='services-header'>
          <NavigationBarWithWhiteLogo />
        </header>
        <Container>
          <Row>
            <Col className='services-copy-text'>
              <h1>{title}</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <main className={styles.main}>
        <Container as='section' className='section-blog-details'>
          <Row className='section-blog-details__inner'>
            <Col lg={8} className='section-blog-details__left'>
              <div className='section-blog-details__left__inner'>
                <div className='section-blog-details__left__inner__featured-image'>
                  <Image
                    src={`https:${featuredImage.fields.file.url}`}
                    alt={title}
                    width={800}
                    height={500}
                  />
                </div>

                <div className='section-blog-details__left__inner__content'>
                  {documentToReactComponents(blogContent)}
                </div>
              </div>
            </Col>
            <Col lg={3} className='section-blog-details__right'>
              <div className='section-blog-details__right__inner'>
                <div className='section-blog-details__right__inner__content'>
                  <div className='section-blog-details__right__inner__content__author'>
                    <div className='section-blog-details__right__inner__content__author__image'>
                      <Image
                        src={`https:${authorImage.fields.file.url}`}
                        alt={authorTitle}
                        width={100}
                        height={100}
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <div className='section-blog-details__right__inner__content__author__info'>
                      <h4>{authorName}</h4>
                      <p>{authorTitle}</p>
                    </div>
                  </div>

                  <div className='section-blog-details__right__inner__content__tags'>
                    <button>
                      <span>{tags}</span>
                    </button>
                  </div>

                  <div className='section-blog-details__right__inner__content__table-of-contents'>
                    <h4>Table of Contents</h4>
                    <ul>
                      {cleanUpContents.map((item, index) => (
                        <li key={index}>
                          <a href={`#${item}`}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>

      <div className='footer-container'>
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  );
};

export default BlogDetails;
