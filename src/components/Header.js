import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({ title, onAdd, showAdd }) => {
    // const onClick = () => { 
    //     console.log('Click');
    // }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onAdd} color={showAdd ? "Red" : "Green"} text={showAdd ? "Close" : "Add"}/>
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