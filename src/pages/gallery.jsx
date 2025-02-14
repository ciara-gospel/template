import Head from "../components/head";
import Nav from "../components/nav";
import Herocommon from "../components/herocommon";
import Galleryimages from '../components/galleryimages'
import Footer from '../components/footer';


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