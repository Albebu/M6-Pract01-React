import '../styles/Card.css'

const Card = ({ children, onClick}) => {
    return (
        <div className="card" onClick={onClick}>
            <p>{children}</p>
        </div>
    );  
}

export default Card