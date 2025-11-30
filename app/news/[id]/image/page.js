import { DUMMY_NEWS } from "@/app/lib/api/dummy-news";
export default async function RenderImage({params}){
    const slug = await params.id;

    const newsItem = DUMMY_NEWS.find(news => news.image === slug)

    return (
        <div className="fullscreen-image">
            <img alt= {newsItem.title} src= {`/images/news/${newsItem.image}`} />
        </div>
    );
}