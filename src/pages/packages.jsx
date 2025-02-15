import Head from "../components/head";
import Nav from "../components/nav";
import Herocommon from "../components/herocommon";
import Packagetext from "../components/packagetext";
import DisplayCard from "../components/displaycard";
import Footer from '../components/footer';

export default function Packages() {
    return (
        <>
          <Head/>
          <Nav/>
          <Herocommon title='Tour Package'/>
          <Packagetext 
          title='Select your Best Package for your Travel' 
          text='Choose your Package'
          />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <DisplayCard />
          <Footer />
        </>
      )
    }