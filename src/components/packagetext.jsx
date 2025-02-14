import propTypes from 'prop-types'

export default function Packagetext ({title, text}) {
    return (
        <div className="body-header">
            <p className="p-text">{text}</p>
            <p className="p-title">{title}</p>
        </div>
    )
}

Packagetext.propTypes = {
    title: propTypes.string.isRequired,
    text: propTypes.string.isRequired
}