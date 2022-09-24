import BlogCardsContainer from "./components/BlogCardsContainer";
import BlogCard from "./components/BlogCard";
import useBlogsData from "./hooks/useBlogsData";
import LoadingSpinner from "./components/LoadingSpinner";
const BASE_URL = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

function App() {
  const { blogs, loading, error } = useBlogsData(BASE_URL);

  let content: React.ReactNode;
  if (loading) {
    content = <LoadingSpinner />;
  } else if (!!error) {
    content = "Error";
  } else if (!!blogs) {
    content = (
      <BlogCardsContainer>
        {blogs.map((blog) => (
          <BlogCard key={blog.data.title} {...blog.data} />
        ))}
      </BlogCardsContainer>
    );
  }

  return (
    <main
      className={`l-main u-vertically-center ${
        loading ? "u-align--center" : ""
      }`}
    >
      {content}
    </main>
  );
}

export default App;
