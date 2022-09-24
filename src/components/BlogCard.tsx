import blogCardStyles from "./BlogCard.module.scss";

interface BlogCardProps {
  topic: string;
  imageSource?: string;
  title: string;
  contentUrl: string;
  author: string;
  authorUrl: string;
  date: string;
  category: string;
}

/**
 * A blog card conforming to the vanilla-framework styling consisting of:
 *  - A topic heading
 *  - A image that links to the blog article
 *  - A blog title section that links to the article
 *  - An about section that details the author and time for the blog article
 *  - A footer that shows the category of the blog
 * @param props
 * @returns
 */
const BlogCard: React.FC<BlogCardProps> = (props) => {
  const {
    topic,
    imageSource,
    title,
    contentUrl,
    author,
    authorUrl,
    date,
    category,
  } = props;

  return (
    <article
      className={`p-card--highlighted col-4 u-no-padding--top u-no-padding--bottom ${blogCardStyles.card}`}
    >
      <header className="p-card__inner">
        <h5
          className={`u-no-margin--bottom u-text--muted ${blogCardStyles.cardHeading}`}
        >
          {topic}
        </h5>
      </header>
      <hr className={blogCardStyles.sectionSeparator} />
      <img
        className="p-card__image p-card__inner u-no-padding--top u-no-padding--bottom"
        alt=""
        src={imageSource}
      />
      <section className="p-card__inner u-no-padding--top">
        <a
          className="p-heading--3"
          style={{ fontWeight: 300 }}
          href={contentUrl}
        >
          {title}
        </a>
      </section>
      <section className="p-card__inner u-no-padding--top">
        <i>
          By{" "}
          <address className={blogCardStyles.cardAuthor}>
            <a rel="author" href={authorUrl}>
              {author}
            </a>
          </address>{" "}
          on <time>{date}</time>
        </i>
      </section>
      <hr
        className={`u-no-margin--bottom ${blogCardStyles.sectionSeparator}`}
      />
      <footer className="p-card__inner">
        <h5 className={`u-text--muted ${blogCardStyles.cardFooter}`}>
          {category}
        </h5>
      </footer>
    </article>
  );
};

export default BlogCard;
