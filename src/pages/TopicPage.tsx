import { useParams } from "react-router-dom";
import { Suspense, lazy } from "react";

const TopicPage = () => {
  const { topic } = useParams();

  // Dynamically import the component based on the topic
  const Component = topic
    ? lazy(() => import(`./java/ClassesAndObject.tsx`))
    : null;

  return (
    <div>
      {Component ? (
        <Suspense fallback={<p>Loading...</p>}>
          <Component />
        </Suspense>
      ) : (
        <p>No topic selected</p>
      )}
    </div>
  );
};

export default TopicPage;
