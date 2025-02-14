import Head from "../components/head";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Searchbar from "../components/searchbar";
import Packagetext from "../components/packagetext";
import Displaycard from "../components/displaycard";
import Destination from "../components/destination";
import Whyus from '../components/whyus';
import Client from '../components/clients';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head />
      <Nav />
      <div className="container">
        <Hero />
        <Searchbar />
      </div>
      <Packagetext 
      title='Select your Best Package for your Travel' 
      text='Choose your Package'
      />
      <Displaycard />
      <Displaycard />
      <Packagetext 
      title='Select Our Best Popular Destinations' 
      text='Popular Destinations'
      />
      <Destination />

      <Packagetext 
      title='Why Trsavel with Africa wizzy Safari' 
      text='Why us?'
      />

      <Whyus />

      <Packagetext 
      title='What our clients say about us' 
      text='Our Traveller Say'
      />

      <Client/>

      <div className="colors">
        <div className='color yellow'></div>
        <div className='color green'></div>
        <div className='color green'></div>
      </div>

      <Footer />
    </>
  );
}