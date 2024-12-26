import React from 'react'
import './App.css'
import CardSection from './Components/Card/Cardsection'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Text from './Components/Text/Text'
import Carousel from './Components/Carousel/Carousel';

const App = () => {
  const mobiles=[
    {name:'Realme C75', description:'Dhulai horai hai', price:'', url:'../../assets/m1.png'},
    { name:'Realme 13+5G', description:'Speed to Victory' ,price:'89,999' ,url:'../../assets/m2.png'},
    { name:'Realme GT 6', description:'Power meets AI' ,price:'149,999' ,url:'../../assets/m3.png'},
    { name:'Realme Note 60', description:'Champion Quality' ,price:'26,999' ,url:'../../assets/m4.png'},
    { name:'Realme C61', description:'Hard to break' ,price:'32,999' ,url:'../../assets/m5.png'},
    { name:'Realme C65', description:'Unbreakable Champion' ,price:'49,999' ,url:'../../assets/m1.png'},
    { name:'Realme 12', description:'Power in Every Shot' ,price:'59,999' ,url:'../../assets/m6.png'},
    { name:'Realme 12+5G', description:'Power in Every Shot' ,price:'74,999' ,url:'../../assets/m8.png'},
    { name:'Realme C63', description:'3 min Charge, 20 min T20 MAtch' ,price:'39,999', url:'../../assets/m9.png'},
    { name:'Realme Note 50', description:'long-lasting Value Beast' ,price:'24,999' ,url:'../../assets/m10.png'},
    { name:'Realme C67', description:'108MP 3x In-sensor Zoom Camera, Snapdragon 685' ,price:'39,999', url:'../../assets/m11.png'},
    { name:'Realme C53', description:'Champion GOld, 33W Champion Charge', price:'39,999', url:'../../assets/m12.png'}
  ]
  const accessories=[
    {name:'Realme Bud T110', description:'Listen inFull Color', price:'4,999', url:'./assets/a1.png'},
    { name:'Realme Buds Q', description:'Music Never Ends' ,price:'7,999' ,url:'./assets/a2.png'},
    
  ]
  return (
   <>
    <Header/>
    <Carousel/>
    <Text content='Smart Phones'/>
    <CardSection content={mobiles}/>
    <Text content='Accessories'/>
    <CardSection content={accessories}/>
    <Footer/>
   
   </>
  )
}

export default App
