import { useNavigate } from 'react-router';

export default function Nav() {
    const navigate = useNavigate();

    return (
        <div className="nav">
            <div className="menu">
                <div className="logo">
                <img src="https://s3-alpha-sig.figma.com/img/7b44/3779/e00233c67a961c8bfdf2e37a4a1ceb1b?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qBM8fTq7O2OkzOhp-3pcsviKBwYrLsHlA8dUgxfeNlL3fRH94ijhyDvDABDkhYxO6B5W7D0fJg~Wrey6pj0~B3SsJE3IoIFpGVTAnz5PAkIZNilNNZtxnyae2ABzXq0hpcjrZfqek9Y61lbdWzFFB2e3cgNNJw-D6MYwA3c-OXCWcCsWe2bg3ZzRaA1e68sWimcy34GaIGxg9R9MzMpV3O0e8Z7QAo-sW7tYGFiX~gi0CwLeKVgzHJGXVQT9oPohmKs~cKhsch1KleC8Do6-fs6Q0GF9r12NfzWGerH6RGJ4xbK9J-CyhMcJoYhs90nT3JtvSnrEv404ycxpZB5h4w__" 
                alt="" />
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