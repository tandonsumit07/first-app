import Link from "next/link";
import {getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth} from '@/app/lib/api/news'

 
 export default async function FilteredNewsPage({params}){
 const filter = params?.filter;

 const selectedYear = filter?.[0];
 const selectedMonth = filter?.[1];

 let news ;

 if(selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
 }
 else if(selectedYear && selectedMonth){
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
 }

 let newsContent  = <p>No News Found for selected period...</p>

 if(news && news.length > 0){
    newsContent = news;
 }
    
    console.log("filter", filter);
    const years = getAvailableNewsYears();
    return (
        <>
        <header className="archieve-header">
            <nav>
            <ul>
            {
            years.map((year) => 
            <li key={year}>
                <Link href={`/archieve/${year}`} >{year}</Link>
            </li>
            )}
            </ul>
            </nav>
        </header>
        <main >
        { newsContent?.map((newsItem, index) => 
          
          <li key={index}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src= {`/images/news/${newsItem.image}`} alt= {newsItem.title} />
            <span>{newsItem.title}</span>
            </Link>
            </li>
        )}
        </main>
        </>
    );

 }