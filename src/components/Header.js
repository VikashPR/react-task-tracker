import PropTypes from 'prop-types';
const Header = ({ title }) => {
    return (
        <header>
            {/* <h1 style={styles} >{title}</h1> */}
            <h1>{title}</h1>
        </header>
    )
}

export default Header

// Default props
Header.defaultProps = {
    title: 'Task Tracker'
}

// PropTypes to catch errors
Header.propTypes = {title: PropTypes.string.isRequired};

// Css with constants

// const styles = {
//     color: '#fff',
//     background: '#333',
// }