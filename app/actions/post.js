'use server'
import { uploadImage } from "@/lib/cloudinary"
import { storePost } from "@/lib/posts"
import { redirect } from "next/dist/server/api-utils"

export async function createPost(prevState, formData){

    const title = formData.get('title')
    const image = formData.get('image')
    const content = formData.get('content')

   const imageUrl =  uploadImage(image);

    await storePost({
      imageUrl: imageUrl,
      title: title,
      content: content,
      userId: 1
    })

    redirect('./../feed');
    
  }