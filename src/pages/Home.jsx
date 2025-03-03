import Head from "../components/Head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Searchbar from "../components/Searchbar";
import Packagetext from "../components/Packagetext";
import Displaycard from "../components/Displaycard";
import Destination from "../components/Destination";
import Whyus from '../components/Whyus';
import Client from '../components/Clients';
import Footer from '../components/Footer';

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