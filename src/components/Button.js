import propTypes from 'prop-types'
const Button = ({ color, text, onClick }) => {
    return (
        <div>
            <button
                onClick={onClick}
                style={{background: color}}
                className='btn'>{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'skyblue',
}
Button.propTypes = {
    text: propTypes.string.isRequired,
    color: propTypes.string,
    onClick: propTypes.func,
}

export default Button