import { useContext } from "react"
import Post from "./Post"
import { PostLists as PostListData } from "../store/post-list-store"
import WelcomeMsg from "./WelcomeMsg"

const PostList = () => {
    const { postList, addInitialPost } = useContext(PostListData)

    const handlePostClick = () => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((data) => addInitialPost(data.products));
    }
    return (
        <>
            {postList.length === 0 && <WelcomeMsg getPostbyClick={handlePostClick} />}
            {postList.map((post) => (
                <  Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default PostList