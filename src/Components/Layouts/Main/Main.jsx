
import { Card } from "../../UI/Card/Card";
import { SearchBar } from "../../UI/SearchBar/SearchBar";
import rick from '../../../images/rick.jpg';
import React,{useEffect,useState} from "react";

export const Main=()=>{
    useEffect(()=>{
        appiFetch('');
    },[]);
    const [datas,setData]=useState([{name:"Rick",image:rick}]);
    const [datos,setDatos]=useState([{name:"Rick",image:rick}]);
    const [name,setName]=useState([{id:1,name:"Rick",image:rick}]);

    const URL='https://rickandmortyapi.com/api/character/?name='

    const appiFetch=(()=>{
        fetch(URL)
        .then(response=>response.json())
        .then(data=>{
            setData(data.results)
            setName(data.results)
            setDatos([])
        });
    })
    const sedEvent=((event)=>{
        if(event.target.value === 'one'){
            setDatos([])
            console.log(event.target);
        }   
        if(event.target.value === 'all'){
            setDatos(datas)
        }
        datas.map((element) =>{
            if (event.target.value===element.name) {
                setDatos([element])
                
            }
            return '';
        })
        
    })

    return(
        <>
        <main>
            <div className="BigContainer">
                <Select key="select" data={name} event={sedEvent}></Select>
            </div>
            <section>

                <div className="totalcards">
                    <div className="allcard">
                        <Card key="card" data={datos}/>
                    </div>
                </div>
            </section>
        </main>
        
        </>
    )
}