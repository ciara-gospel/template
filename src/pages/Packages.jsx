import Head from "../components/Head";
import Nav from "../components/Nav";
import Herocommon from "../components/Herocommon";
import Packagetext from "../components/Packagetext";
import DisplayCard from "../components/Displaycard";
import Footer from '../components/Footer';

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