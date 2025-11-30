import Link from "next/link";
import {DUMMY_NEWS} from '@/app/lib/api/dummy-news'

export default async function NewsPage(){
    const news = await DUMMY_NEWS;
    console.log("news", news);
    return (
        <>
        <header><h1>News Page</h1></header>
        <main>
        <ul className="news-list">
        { news?.map((newsItem, index) => 
          
          <li key={index}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src= {`/images/news/${newsItem.image}`} alt= {newsItem.title} />
            <span>{newsItem.title}</span>
            </Link>
            </li>
        )}
        </ul> 
        </main>
     </>
    );
}