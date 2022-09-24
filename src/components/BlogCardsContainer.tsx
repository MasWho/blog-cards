interface BlogCardsContainerProps {
  children: React.ReactNode;
}

/**
 * Container for housing blog cards within a grid layout
 * @param props 
 * @returns 
 */
const BlogCardsContainer: React.FC<BlogCardsContainerProps> = (props) => {
  const {children} = props;

  return (
    <div className="row">
      {children}
    </div>
  );
};

export default BlogCardsContainer;
