import { useEffect, useState } from "react";
import { API_URLS } from "../utils/constant";
import { getRequest } from "../utils/api";
import Comments from "../components/Comment";
import UserInfo from "../components/User";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  const handleGetPosts = async () => {
    const postList = await getRequest(API_URLS.posts);
    setPosts(postList);
  };

  const handleGetComments = async () => {
    const commenstList = await getRequest(API_URLS.comments);
    setComments(commenstList);
  };

  const handleGetUsers = async () => {
    const usersList = await getRequest(API_URLS.users);
    setUsers(usersList);
  };

  useEffect(() => {
    handleGetPosts();
    handleGetComments();
    handleGetUsers();
  }, []);

  return (
    <div className="p-10 text-2xl text-yellow-100 bg-black">
      <h1 className="p-3 text-red-300">Posts Timeline:</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          className="border border-gray-400 p-4 mb-5 rounded-lg"
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>

          {/* Display User Info */}
          <UserInfo userId={post?.userId} users={users} />

          {/* Display Comments */}
          <Comments id={post.id} comments={comments} />
        </div>
      ))}
    </div>
  );
};

export default Post;
