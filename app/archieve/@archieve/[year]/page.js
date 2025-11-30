 import {getNewsForYear} from '@/app/lib/api/news'
import { notFound } from 'next/navigation';
 
 export default async function getNewsByYear({params}){
    const year = await params.year;
    const newsYear = year;
    const news = await getNewsForYear(newsYear);

    console.log("news", news);

    if(!news){
        notFound();
    }

    return ( news && news.map((newsItem) => 
        <article className='news-article' key={newsItem.id}>
            <header>
             <img src= {`/images/news/${newsItem.image}`} alt= {newsItem.title} />   
            <h1>{newsItem.title}</h1>
            <time dateTime= {newsItem.dateTime} >{newsItem.dateTime}</time>
            </header>
            <p>{newsItem.content}</p>
        </article>
        ));

 }