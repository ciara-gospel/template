import Head from "../components/Head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head />
      <Nav />
      <div className="hero-card">
        <div className="image-left">
          <h1>We are dedicated to providing the best travel experience.</h1>
          <p>Discover the Land of a Thousand Hills</p>
          <div className="about-us-bar">
            <div className="booking-total">
              <div className="booking">
                <span className="title">Guestst</span>
                <p className="detail">
                  2 Adult <i className="fa-solid fa-caret-down"></i>
                </p>
              </div>
              <div className="booking">
                <span className="title">Date</span>
                <p className="detail">
                  12 - 13 April 2021 <i className="fa-solid fa-caret-down"></i>
                </p>
              </div>
              <div className="booking">
                <span className="title">Package</span>
                <p className="detail">
                  Akagera Tour <i className="fa-solid fa-caret-down"></i>
                </p>
              </div>
            </div>
            <button className="sign-in sign-about">Book Now</button>
          </div>
        </div>
        <div className="image-right">
          <img src="https://rangerrick.org/wp-content/uploads/2018/06/Proboscis-Monkeys-Aug2012RR.png" alt="chimpazee"/>
        </div>
      </div>
      <div className="welcome">
        <h1>Welcome to Africa Wizzy Safari</h1>
        <div className="line"></div>
        <div className="articles">
          <div className="article">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyZLux9eEIkQ9Izd5grTUk_5N_UZX_bRQ0IXu6i5M6EZ05vFO8Kp5rAymI1HKefj0c1Q&usqp=CAU"
              alt="lodge"
            />
            <p>
              Welcome to Africa Wizzy Safari, a leading tourism company based in
              Rwanda. We have been in business for over 5 years and are
              committed to providing top-quality tours and services to our
              clients. Our mission is to showcase the beauty and culture of
              Rwanda to visitors from around the world, and to contribute to the
              sustainable development of the country through responsible tourism
              practices.
            </p>
          </div>
          <div className="article">
          <p>
          At Africa Wizzy safari, we offer a wide 
          range of tours and activities, including 
          cultural and historical tours, wildlife 
          safaris, mountain gorilla trekking, and 
          more. Our experienced and knowledgeable 
          guides will ensure that you have a safe 
          and enjoyable experience while exploring 
          the stunning landscapes and rich culture of Rwanda.</p>
            <img
              src="https://thumbs.dreamstime.com/b/pont-entre-l-europe-et-am%C3%A9rique-du-nord-120286147.jpg"
              alt="lodge"
            />
          </div>
          <div className="article">
            <img
              src="https://s3-alpha-sig.figma.com/img/fd63/971c/9ce5d2804ffd9f32ac67720292bd35a8?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VfxgXCwxzHp6IlDsJBirlgNziEZVfT7aK1GcNJQLPghKtp71yI2fW5WfUXPGbz1fwvQzpZIHvoXxSJFreqr4ELqdoUClFb1vIRb6Cw~GUkmIah541LnAeNQCSGqvVE3VzqB9baJZiacRpwBZPZCvdwVAelXqYBOVKXWsZL6Kz2iSQtc65kuwMmyGiYI6HZ7RKXyYCUHIGnYT9ygk3aLU7wgWDL7ipDYBLMADt0RX7KpThPCdQNynprwEDijIEUv0V3hYr4BTtZTMtuh~hcE8wyGOT~ANPjRLA1KQNESR1doAfnzpL3Me2vvUhVPsCyDItPSSjZ~4Jxdpb3cLgUVnTg__"
              alt="lodge"
            />
            <p>
            We are proud to have received numerous 
            awards and accolades for our commitment 
            to excellence, including the RDD award and 
            the Excellence award. 


           Thank you for choosing Africa Wizzy Safari 
           for your travel needs in Rwanda. We look 
           forward to welcoming you on one of our 
           tours soon!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}