import SinglePost from "../../components/SinglePost/SinglePost"
import { POSTS } from "../../utils/posts"

const Posts = () => {
  return (
    <div id='portfolio'>
      {POSTS.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Posts