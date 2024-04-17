
import React,{useState} from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Collection from '../components/Collection'
import Footer from '../components/Footer'
import { Gents,Ladies } from '../data'
import WomanCollection from '../components/WomanCollection'
const Mainpage = () => {
  const[gentsFashion,setGentsFashion] = useState(Gents)
  const[ladiesFashion,setLadiesFashion]=useState(Ladies)
  return (
    <div>
      <Header />
      <Banner />
      <Collection gentsFashion={gentsFashion}/>
      <WomanCollection ladiesFashion={ladiesFashion}/>
      <Footer />

    </div>
  )
}

export default Mainpage
