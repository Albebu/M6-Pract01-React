import '../styles/header.css';
import logo from '../assets/output.jpg';

const Header = ({ setSelected, setInside , exercises, backgroundColor}) => {
    const handleClick = (index) => {
        setSelected(index);
        setInside(true);
    };

    return (
        <header className='Header-header' style={{backgroundColor}}>
            <div className='Header-img'>
                <img src={logo} alt="logo" />
                <h2>Práctica de Alex</h2>
            </div>
            <nav className='Header-nav'>
                <ul>
                    {exercises.map((exercise, index) => (
                        <li key={index} onClick={() => handleClick(index)}>
                            {exercise}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
