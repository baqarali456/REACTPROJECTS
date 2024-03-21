
import { useNewsContext } from '../context/NewsContext';

export default function Card() {
     const {news} = useNewsContext();
     
     
  return (
    <>
        {news.map(newsitem=>(
        <div key={newsitem.title} className="card m-2 " style={{width: "18rem"}}>
  <img src={newsitem.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{newsitem.title}</h5>
    <p className="card-text">{newsitem.description}</p>
    <a href="/" className="btn btn-primary">Read</a>
  </div>
</div>
    ))}
    

    </>
  )
}
