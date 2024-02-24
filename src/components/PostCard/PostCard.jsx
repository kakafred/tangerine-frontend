import React, { useState, useEffect } from "react";

const PostCard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/posts/")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full">
      {posts.map((post) => (
        <div
          key={post.id}
          className="relative w-full flex flex-col gap-4 p-4 border border-black/20 border-t-2 border-t-black shadow-md mb-8"
        >
          <div className="pt-5 w-full flex flex-col lg:flex-row justify-between items-start gap-y-2 lg:gap-y-1">
            <p className="w-full lg:w-1/2 lg:w-full truncate text-2xl font-light">
              {post.title}
            </p>
            <div className="w-full flex flex-col italic items-start lg:items-end">
              <p>{post.category_name}</p>
              {post.parent_name ? (
                <p className="text-xs">{post.parent_name}</p>
              ) : null}
            </div>
          </div>

          <p className="w-full truncate text-lg text-gray-500 font-light">
            {post.content}
          </p>

          <div className="absolute top-0 left-4 w-full flex items-center">
            {post.tags.map((tag) => (
              <span class="bg-black text-white text-xs font-medium me-2 px-2.5 py-0.5">
                {tag}
              </span>
            ))}
          </div>

          <div className="w-full flex justify-between">
            <div className="flex items-center gap-x-5">
              <div className="flex items-center gap-x-1">
                <svg
                  class="w-[18px] h-[18px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 7.8C6.7 6.3 9.2 5 12 5s5.3 1.3 7 2.8a12.7 12.7 0 0 1 2.7 3.2c.2.2.3.6.3 1s-.1.8-.3 1a2 2 0 0 1-.6 1 12.7 12.7 0 0 1-9.1 5c-2.8 0-5.3-1.3-7-2.8A12.7 12.7 0 0 1 2.3 13c-.2-.2-.3-.6-.3-1s.1-.8.3-1c.1-.4.3-.7.6-1 .5-.7 1.2-1.5 2.1-2.2Zm7 7.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-xs">{post.views}</p>
              </div>

              <div className="flex items-center gap-x-1">
                <svg
                  class="w-[18px] h-[18px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.6 4.5c.3-.3.8-.5 1.3-.5H19a1.9 1.9 0 0 1 2 1.9V15a1.9 1.9 0 0 1-1.9 1.9h-3.6l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.9A1.9 1.9 0 0 1 3 15.1V6c0-.5.2-1 .6-1.4Zm4 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.6Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-xs">{post.comments}</p>
              </div>
            </div>

            <p className="text-sm text-gray-500 italic">
              {new Date(post.created_at).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
