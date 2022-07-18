import Header from "../components/Header"; 
import Card from "../components/Card";
import Batman1 from "../img/batmanBegins.jpg";
import Batman2 from '../img/batmanNew.jpg';
import Batman3 from '../img/batmanSuperman.jpg';
import axios from 'axios'

const HomePage =()=> {

    const batmanImg =[
      {id:1, gambar:{Batman1}, title: 'Batman Begins', detail: 'Menceritakan tentang kehidupan batman yang kelam'},
      {id:2, gambar:{Batman2}, title: 'Batman 2022', detail: 'Merupakan cerita lanjutan dari batman vs superman'},
      {id:3, gambar:{Batman3}, title: 'Batman vs Superman', detail: 'Batman kalah melawan superman dan superwahyoe'},
    ]

    return (
      <>
      <Header/>
      <Card imgColl={batmanImg}/>
      </>
    )
}
export default HomePage;