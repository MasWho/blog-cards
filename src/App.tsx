import BlogCardsContainer from "./components/BlogCardsContainer";
import BlogCard from "./components/BlogCard";
import useBlogsData from "./hooks/useBlogsData";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorModal from "./components/ErrorModal";
const BASE_URL = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

/**
 * Entry point for the blog application.
 * @returns 
 */
function App() {
  const { blogs, loading, error, clearErrorAndReload } = useBlogsData(BASE_URL);

  // Build application content based on fetching status of blog data
  let content: React.ReactNode;
  if (loading) {
    content = <LoadingSpinner />;
  } else if (!!error) {
    content = <ErrorModal error={error} onClose={clearErrorAndReload} />;
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
        (loading || error) ? "u-align--center" : ""
      }`}
    >
      {content}
    </main>
  );
}

export default App;
