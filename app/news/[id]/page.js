import {DUMMY_NEWS} from '@/app/lib/api/dummy-news'
import { notFound } from 'next/navigation';

export default async function NewsDetail({params}){
    const { id } = await params;
    const newsId = id;
    const news = DUMMY_NEWS.find(newsItem => newsItem.slug === newsId);

    if(!news){
        notFound();
    }

    return (
        <article className='news-article'>
            <header>
             <img src= {`/images/news/${news.image}`} alt= {news.title} />   
            <h1>{news.title}</h1>
            <time dateTime= {news.dateTime} >{news.dateTime}</time>
            </header>
        
        <p>{news.content}</p>
        </article>
    );
}