import { Card } from "antd";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }) {
  const { title, slug, thumbnail, blogContent, authorName, summary, tags } =
    blog.fields;

  return (
    <div className='blog-card card-column'>
      <Card>
        <div className='blog-card__image'>
          <Image src={`https:${thumbnail.fields.file.url}`} width={450} height={300} />
        </div>
      </Card>
      <div className='blog-card__content'>
        <div className='blog-card__content-tag-wrapper'>
          <button className='blog-card__content-tag'>
            <span>{tags}</span>
          </button>
        </div>
        <Link href={`/blog/${slug}`}>
          <a className="blog-card__content-link">
            <h3 className='blog-card__content-title'>{title}</h3>
          </a>
        </Link>

        <div className='blog_card__content-summary-wrapper'>
          <p className='blog-card__content-summary'>{summary}</p>
        </div>

        <div className='blog_card__content-author-wrapper'>
          <p className='blog-card__content-author'>{authorName}</p>
        </div>
      </div>
    </div>
  );
}
