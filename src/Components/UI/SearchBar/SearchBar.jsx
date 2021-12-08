import './SearchBar.css';
export const SearchBar=()=>{
    return(
        <>
        <header className="header">
            <div className="ContBar">
                <h1 className="Title">Rick And Morty</h1>
              <input type="text" placeholder="Search the character"></input>  
            </div>
        </header>
        </>
    )
}