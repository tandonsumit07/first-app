import Image from "next/image"
import logoImage from '@/assets/logo.png'
export default function BlogHeader(){
    return(
         <Image src= {logoImage.src} alt="Blog Logo" width={200} height={200} ></Image>
        // <img src= {logoImage.src} alt="Blog Logo" />
    );
}