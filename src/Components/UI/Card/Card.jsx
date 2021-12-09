import './Card.css';
import react from 'react';
export const Card =({data})=>{
    return(
        <>
        {
            data.map(element=>(
                <div className="Card-container">
                    <img  className="CardImage" src={element.image} alt={element.name} />
                    <h2>{element.name}</h2>
                </div>

            ))

        }
            
        </>
    )
}