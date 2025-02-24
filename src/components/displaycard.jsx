import { useContext } from "react"
import { CardContext } from "../context/context"
import Button from '@mui/material/Button';

export default function DisplayCards() {

    const {cards} = useContext(CardContext)

    return (
                    <div className="card-container">
                    <div className="card">
                        <img src="https://s3-alpha-sig.figma.com/img/6521/b928/1e965b9e2b4c3f113bb67ce649d7a461?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r2wNgUQxFm798hYM8iigkiL0Ac4F43t9rO2vYMNScYzIWW-jLE5T3UVVBG~9zPSpSIFep4nCjnY-1P3mAmgB9IsYDSotdQid5JxQ7SEHuDgH1v5vaIJ6RNYSE2P1hB8FPlL3IecuTqxUWEpuYSuCPLKeFgTpxHLXLl3sYwYyyE9n2AzPQ9-IJ61t7sz8HIkDwLWzHQnw6sx71-pNEFX7hoWwqSI3jY3ZwQMR731tDeb~Dzk3Cnw1gDPIKHIrsNpTdgEKKVATbx4FCPCnCvyNSNUm66cEH-IYAsm1bP8LL3MFIcRqXLDXwpSpFsbdAatptbX79iX0fSlJOdko-o4kEw__" alt="" />
                        <div className="card-body">
                            <h3>Akagera National Park</h3>
                            <p>Visitors to Akagera National Park 
                                can take part in a range of 
                                activities, including game drives, 
                                boat safaris, bird watching, and 
                                nature walks.</p>
                            <Button variant="contained"sx={{ backgroundColor: '#C7923E' }}>Learn More</Button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://s3-alpha-sig.figma.com/img/5d06/b58d/ba0e694cee79ef5384b5687366cc3ed3?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s8QxeYj6PYG9ptlYU2FEfRCaw9gM11ubym1I21N63402JygyamiPbn3QNgEOBJzxnuN7oSA23fpsGO9mOMdIVlJqHlKqBVixt7BY91xO1DbLKrWIC4Y-yd5DE8uy-hrRso2PNs3GuPkMMyvmwTENaA0Tg5KEhrW5x~yDBF7ZDA~~A9FXisXLgiaEc5R6dchNkLTT-BcGl~NUvOAPOjAH0LNGkZz88XGOcS5cYgU4fT4Kvv5xvb9HSOuZVi5jJunSXqPlzyyJm2Oz35W8GLOFD4CKA1VP03QXu2rUvl8n4MaUDM6wimq5olHJ-jl8QGuDwkM73ljfqXynYSCeeoz3hg__" alt="" />
                        <div className="card-body">
                            <h3>Akagera National Park</h3>
                            <p>The Bisoke hike is a popular 
                                mountain trek in Rwanda, located 
                                in the Volcanoes National Park. It 
                                is one of the most challenging 
                                hikes in the park.</p>
                            <Button variant="contained"sx={{ backgroundColor: '#C7923E' }}>Learn More</Button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://s3-alpha-sig.figma.com/img/2509/3e3b/45eb67d244449dc32bcd471b5af02dde?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nk68gdhtBxbxvtUGwP4S4D7z70bUKw3Y2hx2417gjHtYXuqEhtPOag30JXKvrHF62Wc3cSceE1Fw7kCs3r31sn2VJHeDd105SJGIIIDg0ffh8g5wlWhBSo3W6VazDRM1WwPrZI4B1yUH7m4lbVbv0Ymix-SWt1yG3cEnD4hN4OvuW3sB1jPdiCTfnl3uMO54BkkmPgRXgdeDzVYQ30GzeTc1M0v86BcewgnUP4pte3tfjHLACu6mCRgZzoTNpZKLl0bDWiTv7iDg1Ct-VR7o7QIKMaI3hSk0CwmNURj6A9Ljypd2s4o7n-Mj58ytCCkXTNSPZ2hTxWG2zwz0NpW4Dg__" alt="" />
                        <div className="card-body">
                            <h3>Akagera National Park</h3>
                            <p>A trip to Lake Kivu can be a truly 
                                unique and memorable experience. </p>
                            <Button variant="contained"sx={{ backgroundColor: '#C7923E' }}>Learn More</Button>
                        </div>
                    </div>
        </div>
    )
}