import {getAvailableNewsYears } from '@/app/lib/api/news'
import Link from 'next/link';

export default function ArchievePage(){
    const links = getAvailableNewsYears();
    return (
            <header className="archieve-header">
               <nav>
                <ul>
                {
                links.map((year) => 
                <li key={year}>
                    <Link href={`/archieve/${year}`} >{year}</Link>
                </li>
                )}
                </ul>
               </nav>
            </header>
    );
}