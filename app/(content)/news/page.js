'use client'
import NewsList from '@/components/news-list';
import { useEffect, useState } from 'react';

export default function NewsPage() {

  const[newsContent, setnewsContent] = useState([]);

  useEffect(() => {

    async function getNews() {
      console.log("getNews called...")
      const result = await fetch('http://localhost:8080/news')

      console.log("result", result);
      if(!result.ok){
        throw Error('');
      }

      const newsList = await result.json();
      setnewsContent(newsList);
      console.log("newsContent", newsList);
    };
    getNews();

  }, [])

  return (
    <>
      <h1>News Page</h1>
      {newsContent && <NewsList news={newsContent} /> }
    </>
  );
}
