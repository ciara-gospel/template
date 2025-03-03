import { useNavigate } from 'react-router';

export default function Nav() {
    const navigate = useNavigate();

    return (
        <div className="nav">
            <div className="menu">
                <div className="logo">
                <img src="https://s3-alpha-sig.figma.com/img/7b44/3779/e00233c67a961c8bfdf2e37a4a1ceb1b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N9504MoLA-7wKm1kFym93I881KhPBcaCFFJ1NM9GEIbqbttKV3SMj7Wgn2cyInvZXwlNxx-yFZfb0253OobXN3hp19RDVY-u4jptinWJADTA6yOHAfULmbulCfY16lrNfCjeouPe6~42xKFwHzASeRXdhvA6HpZi2-QHeRQ874jIk5yXhHDuLBYQardmJkvQuc8pHF144G7prXpVE41Q57fO3u6NYC6dY828HWrHpL1jD9DNVXlOa9Hc23z45OWvmv8GU0qIWS0qyGHuK62~qRlu90IEKTBChHsgGXfMTZQxfbtBJ2tAVhlzC1pyIYnqK0sDb3sLez6eU1F4TkOYFQ__" alt="" />
                </div>
                <div className="options">
                    <nav>
                        <a onClick={() => navigate('/')}>Home</a>
                        <a onClick={() => navigate('/about_us')}>About</a>
                        <a onClick={() => navigate('/package')}>Tour package</a>
                        <a onClick={() => navigate('/gallery')}>Gallery</a>
                        <a href="'#">Blog</a>
                        <a onClick={() => navigate('/contact_us')}>Contact Us</a>
                    </nav>
                </div>
            </div>
            <div className="log">
                <button className="log">Sign In</button>
            </div>
        </div>
    )
}