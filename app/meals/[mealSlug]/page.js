import classes from './page.module.css'
import Image from 'next/image';


export default function MealDetailsPage() {
  return (
  <>
  <header className= {classes.header} >
  <div className= {classes.image}>
  <Image alt= '' fill /> 
  </div>
  <div className= {classes.headerText}>
    <h1>Title</h1>
    <p className= {classes.creator}>
      by <a href= {`mailto:${'EMAIL'}`} >Name</a>
    </p>
    <p className= {classes.summary} > SUMMARY</p>
  </div>
  </header>
  <main>
<p className= {classes.instructions} dangerouslySetInnerHTML={{
__html : '...'

}}> </p>
  </main>
  </>);
}
