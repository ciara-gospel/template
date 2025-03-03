import PropTypes from 'prop-types';
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

export default function Herocommon ({ title }) {
    return (
        <div className="hero-banner">
            <div className="hero-text">
                <h1>{title}</h1>
                <div className='align'>
                    <a href="/">Home</a>
                    <ArrowRightIcon sx={{fontSize: 20, color: '#c7923e'}}/>
                    <span className="tit">{title}</span>
                </div>
            </div>
        </div>
    )
}

Herocommon.PropTypes = {
    title: PropTypes.string,
}