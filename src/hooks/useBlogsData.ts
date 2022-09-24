import { useState, useCallback, useEffect } from "react";
import BlogData, {RawBlogData} from '../model/blogData';

interface useBlogs {
  blogs?: BlogData[];
  loading: boolean;
  error: string;
  clearErrorAndReload: () => void;
};

/**
 * contains business logic for fetching data from a provided endpoint blogsUrl.
 * Consists of a data state blogs, loading and error states which can be used in presentation component calling this hook.
 * @param blogsUrl 
 * @returns 
 */
const useBlogsData = (blogsUrl: string): useBlogs => {
  const [blogs, setBlogs] = useState<BlogData[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const clearErrorAndReload = () => {
    setError('');
    fetchBlogsData();
  };

  const fetchBlogsData = useCallback(
    async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(blogsUrl);
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error);
        }

        // Transform raw blog data to format consumed by presentation
        const data: RawBlogData[] = await response.json();
        const blogs: BlogData[] = [];
        data.forEach(datum => {
          const blog = BlogData.fromJsonResponse(datum);
          blogs.push(blog);
        })

        setBlogs(blogs);
      } catch (error: any) {
        console.error(error);
        setError("Something went wrong, please contact support");
      }
      
      setLoading(false);
    }, [blogsUrl]
  );

  useEffect(() => {
    fetchBlogsData();
  }, [fetchBlogsData]);

  return {
    blogs,
    loading,
    error,
    clearErrorAndReload,
  };
};

export default useBlogsData;
