import Header from "../components/Header"; 
import Card from "../components/Card";
// import axios from 'axios';
import { useEffect, useState } from 'react';

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