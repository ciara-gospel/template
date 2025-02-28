import Head from "../components/Head";
import Nav from "../components/Nav";
import Herocommon from "../components/Herocommon";
import Galleryimages from '../components/Galleryimages'
import Footer from '../components/Footer';


export default function Gallery() {

    return (
        <>
          <Head />
          <Nav />
          <Herocommon title='Gallery'/>

          <Galleryimages />
          <Footer />
        </>
    )
    
}