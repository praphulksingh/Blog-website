import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
  //   if (posts.length === 0) {
  //       return (
  //          <div className="w-full py-8 mt-4 text-center">
  //   <Container>
  //     <div className="flex flex-wrap justify-center">
  //       <div className="p-2">
  //         <h1 className="text-2xl font-bold font-sans md:font-serif hover:text-gray-500">
  //           Login or Signup to read posts
  //         </h1>
  //         <div className="flex flex-wrap justify-center md:max-w-screen-lg mx-auto">
  //           <img
  //             src="https://www.read-a-thon.com/signup/resources/images/admin-icon.png"
  //             alt="2nd image"
  //             className="w-auto md:w-auto h-auto md:max-h-40 object-cover object-center m-2"
  //           />
  //           <img
  //             src="https://png.pngtree.com/png-clipart/20220122/ourmid/pngtree-red-arrow-irregular-triangle-one-way-arrow-png-image_4362205.png"
  //             alt="3rd image"
  //             className="w-auto md:w-auto h-auto md:max-h-40 object-cover object-center m-2"
  //           />
  //           <img
  //             src="https://www.read-a-thon.com/signup/resources/images/reader-icon.png"
  //             alt="1st image"
  //             className="w-auto md:w-auto h-auto md:max-h-40 object-cover object-center m-2"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </Container>
  // </div>
  //       );
  //   }
    return (
      <div className="w-full flex justify-center py-8 bg-white">
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

export default Home