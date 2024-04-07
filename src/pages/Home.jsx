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
  
    if (posts.length === 0) {
        return (
          <div className="w-full py-8 mt-4 text-center">
            <Container>
              <div className="flex flex-wrap">
                <div className="p-2 w-full">
                  <h1 className="text-2xl font-bold font-sans md:font-serif hover:text-gray-500">
                    Login or Signup to read posts
                  </h1>
                  <div className="flex">
                    <img
                      src="https://www.read-a-thon.com/signup/resources/images/admin-icon.png"
                      alt="2nd image"
                    />
                    <img
                      src="https://png.pngtree.com/png-clipart/20220122/ourmid/pngtree-red-arrow-irregular-triangle-one-way-arrow-png-image_4362205.png"
                      alt="3rd image"
                      //   width="350px"
                      height="100px"
                    />
                    <img
                      src="https://www.read-a-thon.com/signup/resources/images/reader-icon.png"
                      alt="1st image"
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        );
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home