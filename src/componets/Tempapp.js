import React, { useEffect, useState } from 'react'
import './Temp.css'

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=dcb88f8febb993c420e0f49da78dc0e3`
            const response = await fetch(url);
            // console.log(response)
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);

        }
        fetchApi();
    },[search])
    return (


        <div className='box'>
            <div className="inputData">
                <input type="search"
                    className='inputField'
                    placeholder='Enter the City Name'
                    onChange={(event) => {
                            setSearch(event.target.value)

                    }} />
            </div>
            {
                !city ?  (
                    <p> No data Fond</p>
                ):
                (<>

                    <div className="info">
                <h2 className='location'> <i className="fa fa-map-marker" aria-hidden="true"></i> {search}</h2>
                <h1 className='temp'>{city.temp}° Cel </h1>
                <h3 className='tempminmax'>Min:{city.temp_min}°Cel | Max:{city.temp_max}°Cel</h3>
            </div>
            <div className="wave1">    
                  </div> </> 
            )            }
        </div>

    )
}

export default Tempapp
