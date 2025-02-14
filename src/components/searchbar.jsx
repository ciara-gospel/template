export default function Searchbar() {
    return (
        <div className="sear">
            <div className="enter">
                <input type="text" placeholder="search activities or destinations"/>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="list">
                <div className="all">
                    <span className="enum">Guestst</span>
                    <p className="detail">2 Adult <i className="fa-solid fa-caret-down"></i></p>
                </div>
                <div className="all">
                    <span className="enum">Date</span>
                    <p className="detail">12 - 13 April 2021 <i className="fa-solid fa-caret-down"></i></p>
                </div>
                <div className="all">
                    <span className="enum">Package</span>
                    <p className="detail">All <i className="fa-solid fa-caret-down"></i></p>
                </div>
            </div>
            <button className="sign">sign in</button>
        </div>
    )
}