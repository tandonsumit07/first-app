import { DUMMY_NEWS } from "@/app/lib/api/dummy-news";
export default async function InterceptedRenderImage({params}){
    const slug = await params.id;

    const newsItem = DUMMY_NEWS.find(news => news.image === slug)

    return (
        <>
        <div className="modal-backdrop"></div>
        <dialog className="modal" open>
        <div className="fullscreen-image">
            
            <img alt= {newsItem.title} src= {`/images/news/${newsItem.image}`} />
        </div>
        </dialog>
        </>
    );
}