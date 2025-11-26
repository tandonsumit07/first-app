import BlogHeader from "@/components/blog-header/header";

export default function BlogLayout({children}){
    return (
        <>
        <BlogHeader />
        {children}
        </>
    )
}