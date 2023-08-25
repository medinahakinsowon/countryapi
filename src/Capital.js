import { useEffect, useState } from "react";
import SearchIcon from './search.svg';

const capitalUrl = 'https://restcountries.com/v3.1/capital/';
const Capital = () => {
  const [capital, setCapital] = useState([])
  const [searchData, setSearchData] = useState('')

  const fetchCapital = async (cap) => {
    const response = await fetch(`${capitalUrl}${cap}`)
    const capitalData = await response.json()
    setCapital(capitalData)
    console.log(capitalData)
  }
  
  const searchButton = () => {
    fetchCapital(searchData)
  }



  return (
    <div>
      <h3 style={{marginLeft: '100px', color:'white', fontSize: '50px'}}>World Capital</h3>
      <div className='search'>
        <input
          placeholder='search for capital'
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <img src={SearchIcon}
          onClick={searchButton}
          alt='search'
        />
      </div>
      < Worldcapital data={capital} />
    </div>
  )
}

export default Capital;



const Worldcapital = ({ data }) => {
  return (
    <div className="country_list">
      {data.map((value, index) => {
        return (
          <div key={index}>
            <div className="card">
              <img src={value.flags.png} className="card-img-top" alt="country_flag" />
              <div className="card-body">
              <img src={value.coatOfArms.png} className="coat" alt="coat_of_arm" /> 
                <h5 className="card-title"><span>Country:</span> {value.name.common}</h5>
                <h5 className="card-title"><span>Region:</span> {value.region}</h5>
                <h5 className="card-title"><span>Population:</span> {value.population}</h5>
                <h5 className="card-title"><span>Area:</span> {value.area}</h5>
                <h5 className="card-title"><span>CarSide:</span> {value.car.side}</h5>
                <h5 className="card-title"><span>Subregion:</span> {value.subregion}</h5>
                <h5 className="card-title"><span>StartOfWeek:</span> {value.startOfWeek}</h5>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}


