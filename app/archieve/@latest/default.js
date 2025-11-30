import {getLatestNews} from '@/app/lib/api/news'

export default function LatestPage(){
    const news = getLatestNews();
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