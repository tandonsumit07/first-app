import MealsGrid from '@/components/meals/meals-grid'
import classes from './page.module.css'
import Link from 'next/link'

import { getMeals } from '@/lib/api/meals';



export default async function MealsPage() {
  const meals = await getMeals();
  
  return <>
  <header>
    <h1>
    Hello Share 
    </h1>
    <p>
      Choose your favorite recipe and cook it yourself. 
    </p>
    <p className={classes.cta}>
    <Link href= './../meals/share'>
    Share Your Favourite Receipe
    </Link>
    </p>
  </header>
  <main className = {classes.main}>
      <MealsGrid meals = {meals} />
  </main>
  </>
}
