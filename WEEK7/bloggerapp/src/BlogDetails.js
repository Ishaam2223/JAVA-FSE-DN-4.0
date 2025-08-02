import React from 'react';

const BlogDetails = ({ content }) => {
  // Method 5: Function-based conditional rendering
  const renderBlogContent = () => {
    if (!content) {
      return <p>No blog content available</p>;
    }

    return (
      <>
        {/* Method 6: Optional chaining with conditional rendering */}
        {content?.title && <h2>{content.title}</h2>}
        {content?.author && <p>{content.author}</p>}
        {content?.welcome && <p>{content.welcome}</p>}
        
        {/* Method 7: Conditional rendering with logical AND */}
        {content?.section && (
          <>
            <h2>{content.section}</h2>
            {/* Method 8: Nested conditional rendering */}
            {content?.instructor && <p>{content.instructor}</p>}
            {content?.description && <p>{content.description}</p>}
          </>
        )}
      </>
    );
  };

  return (
    <div className="section">
      <h1>Blog Details</h1>
      {/* Method 9: Ternary operator for entire content block */}
      {content ? renderBlogContent() : <p>Loading blog content...</p>}
    </div>
  );
};

export default BlogDetails;