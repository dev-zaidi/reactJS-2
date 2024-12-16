import React from 'react'
import './App.css'
import Header from './Header'
import Carousel from './Carousel'
import Text from './Text'
import Footer from './Footer'
import Cardsection from './Cardsection';


const App = () => {
  const mobiles=[
    {name:'Realme C75', description:'Dhulai horai hai', price:'', url:'./public/m1.png'},
    { name:'Realme 13+5G', description:'Speed to Victory' ,price:'89,999' ,url:'./public/m2.png'},
    { name:'Realme GT 6', description:'Power meets AI' ,price:'149,999' ,url:'./public/m3.png'},
    { name:'Realme Note 60', description:'Champion Quality' ,price:'26,999' ,url:'./public/m4.png'},
    { name:'Realme C61', description:'Hard to break' ,price:'32,999' ,url:'./public/m5.png'},
    { name:'Realme C65', description:'Unbreakable Champion' ,price:'49,999' ,url:'./public/m1.png'},
    { name:'Realme 12', description:'Power in Every Shot' ,price:'59,999' ,url:'./public/m6.png'},
    { name:'Realme 12+5G', description:'Power in Every Shot' ,price:'74,999' ,url:'./public/m8.png'},
    { name:'Realme C63', description:'3 min Charge, 20 min T20 MAtch' ,price:'39,999', url:'./public/m9.png'},
    { name:'Realme Note 50', description:'long-lasting Value Beast' ,price:'24,999' ,url:'./public/m10.png'},
    { name:'Realme C67', description:'108MP 3x In-sensor Zoom Camera, Snapdragon 685' ,price:'39,999', url:'./public/m11.png'},
    { name:'Realme C53', description:'Champion GOld, 33W Champion Charge', price:'39,999', url:'./public/m12.png'}
  ]
  const accessories=[
    {name:'Realme Bud T110', description:'Listen inFull Color', price:'4,999', url:'./public/a1.png'},
    { name:'Realme Buds Q', description:'Music Never Ends' ,price:'7,999' ,url:'./public/a2.png'},
    
  ]
  return (
   <>
    <Header/>
    <Carousel/>
    <Text content='Smart Phones'/>
    <Cardsection content={mobiles}/>
    <Text content='Accessories'/>
    <Cardsection content={accessories}/>
    <Footer/>
    
   </>
  )
}

export default App
