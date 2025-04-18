import { useContext, useEffect} from "react";
import Post from "./post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  useEffect(() => {
    fetch('https://dummyjson.com/posts/1')
    .then((res) => res.json())
    .then((data) => {
      addInitialPosts(data.posts);
    });
  }, []);
  
  return (
    <>
    {postList.length !== 0 && <Welcome />}
    {postList.map((post) => (
      <Post key={post.id} post={post} />
    ))}
    </>
  );
};

export default PostList;
