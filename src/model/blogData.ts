/**
 * This interface describes relevant strucutre for the raw
 * incoming blogs data
 */
export interface RawBlogData {
  featured_media: string,
  author: number,
  date: string,
  categories: number[],
  topic: number[],
  tags: number[],
  title: {
    rendered: string,
  }
  link: string,
  _embedded: {
    // For looking up author details
    author: {
      id: number,
      link: string,
      name: string,
    }[],
    // For looking up topic, category and tag details
    "wp:term": {
      id: number,
      name: string,
      link: string,
    }[][],
  },
};

/**
 * BlogData represents the final transformed data structure for a single blog.
 * The data structure here will be used in the presentation for rendering a single BlogCard component.
 */
class BlogData {
  constructor(
    private _data: {
      topic: string;
      imageSource?: string;
      title: string;
      contentUrl: string;
      author: string;
      authorUrl: string;
      date: string;
      category: string;
    }
  ) {}

  public get data() {
    return this._data;
  };

  /**
   * Return a instance of BlogData by transforming the raw incoming json data.
   * @param rawData 
   * @returns 
   */
  public static fromJsonResponse(rawData: RawBlogData): BlogData {
    const authorId = rawData.author;
    const categoryId = rawData.categories[0];
    const topicId = rawData.topic[0];

    // Get author deatils
    let authorName = 'Unknown Author';  // Default author
    let authorUrl = '#';
    for(const authorDetail of rawData._embedded.author) {
      if(authorDetail.id === authorId) {
        authorName = authorDetail.name;
        authorUrl = authorDetail.link;
      }
    }

    // Get category and topic details
    let topic = 'Canonical announcement';  // Default topic
    let category = 'Articles';  // Default category
    for(const embedded of rawData._embedded["wp:term"]) {
      for(const term of embedded) {
        if(term.id === categoryId) {
          category = term.name;
        }

        if(term.id === topicId) {
          topic = term.name;
        }
      }
    }

    return new BlogData({
      imageSource: rawData.featured_media,
      contentUrl: rawData.link,
      title: rawData.title.rendered,
      date: rawData.date,
      author: authorName,
      authorUrl: authorUrl,
      topic: topic,
      category: category,
    })
  } 
}

export default BlogData;