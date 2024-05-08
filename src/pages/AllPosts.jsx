import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-full bg-white rounded-md flex justify-center">
        <Container>
          <div className="grid grid-cols-4 gap-4 p-4">
            {posts.map((post) => (
              <div key={post.$id} className="h-full">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AllPosts;
