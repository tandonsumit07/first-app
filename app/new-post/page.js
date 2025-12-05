import PostForm from '@/components/post-form'
import { createPost } from '../actions/post'

export default function NewPostPage() {
  return <PostForm createPost={createPost}  />
 
}
