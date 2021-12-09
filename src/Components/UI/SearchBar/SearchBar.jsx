import './SearchBar.css';
import react  from 'react';
export const SearchBar=({data, event})=>{
    return(
        <>
        <header className="header">
            <div className="ContBar">
                <h1 className="Title">Rick And Morty</h1>
                <select name="option" id="select" onChange={event}>
                    <option key="one" value="one">Select a character</option>
                    <option key="all" value="all">Select all characters</option>
                    {
                        data.map(element => (

                         <option key={element.id} value={element.name}>{element.name}</option>
                         ))
                    }
                </select>
            </div>
        </header>
        </>
    )
}