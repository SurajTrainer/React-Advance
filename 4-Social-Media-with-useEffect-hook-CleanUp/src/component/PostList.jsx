import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import { PostLists as PostListData } from "../store/post-list-store"
import WelcomeMsg from "./WelcomeMsg"
import LoadingSpinner from "./LoadingSpinner"

const PostList = () => {
    const { postList, addInitialPost } = useContext(PostListData)

        const [fetching, setFetching] = useState(false)
   
            // useEffect(() => {
            //     setFetching(true)
            //     fetch('https://dummyjson.com/products')
            //         .then(res => res.json())
            //         .then((data) =>{
            //          addInitialPost(data.products)
            //          setFetching(false)
            //         })

            //         return () => {
            //             console.log('Cleaning Up useEffect');
            //         }
            // },[])




            // Advance Type useEffect (Pro) 
            useEffect(() => {
                setFetching(true)
                const controller = new AbortController();
                const signal = controller.signal;

                fetch('https://dummyjson.com/products', { signal })
                    .then(res => res.json())
                    .then((data) =>{
                     addInitialPost(data.products)
                     setFetching(false)
                    })

                    return () => {
                        console.log('Cleaning Up useEffect');
                        controller.abort()
                    }
            },[])

    


    const handlePostClick = () => {}

    return (
        <>
            {fetching && <LoadingSpinner/>}
            {!fetching && postList.length === 0 && <WelcomeMsg getPostbyClick={handlePostClick} />}
            {!fetching && postList.map((post) => (
                <  Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default PostList