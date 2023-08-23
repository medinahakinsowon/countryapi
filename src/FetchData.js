import { useEffect, useState } from "react";
import SearchIcon from './search.svg';


const api = 'https://restcountries.com/v3.1/all';
const anoApi = 'https://restcountries.com/v3.1/name/';

const FetchData = () => {
  const [dataCountry, setDataCountry] = useState([])
  const [info, setInfo] = useState([])
  const [searchData, setSearchData] = useState('')



  const fetchCountries = async () => {
    const response = await fetch(api)
    const data = await response.json()
    setDataCountry(data)
    console.log(data)
  }
  const fetchCountry = async (countryName) => {
    const response = await fetch(`${anoApi}${countryName}`)
    const anoData = await response.json()
    setInfo(anoData)
  }

  const searchButton = () => {
    fetchCountry(searchData)
  }

  useEffect(() => {
    fetchCountries()

  }, [])

  return (
    <div>
      <div className='search'>
        <input
          placeholder='search for country'
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
        />
        <img src={SearchIcon}
          onClick={searchButton}
          alt='search'
        />
      </div>
      <OpenC list={info} />
      <World data={dataCountry}></World>
    </div>
  )
}

export default FetchData;



const World = ({ data }) => {
  return (
    <div className="country_list">
      {data.map((country, index) => {
        return (
          <div key={index}>
            <div className="card">
              <img src={country.flags.png} className="card-img-top" alt="country_flag" />
              <div className="card-body">
                <img src={country.coatOfArms.png} className="coat" alt="coat_of_arm" />
                <h5 className="card-title"><span>Country:</span> {country.name.common}</h5>
                <h5 className="card-title"><span>Region:</span> {country.region}</h5>
                <h5 className="card-title"><span>Population:</span> {country.population}</h5>
                <h5 className="card-title"><span>Area:</span> {country.area}</h5>
                <h5 className="card-title"><span>CarSide:</span> {country.car.side}</h5>
                <h5 className="card-title"><span>Subregion:</span> {country.subregion}</h5>
                <h5 className="card-title"><span>StartOfWeek:</span> {country.startOfWeek}</h5>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const OpenC = ({ list }) => {
  return (
    <div>
      {list.map((country, index) => {
        return (
          <div key={index}>
            <div className="card" style={{marginLeft: '100px'}}>
              <img src={country.flags.png} className="card-img-top" alt="country_flag" />
              <div className="card-body">
                <img src={country.coatOfArms.png} className="coat" alt="coat_of_arm" />
                <h5 className="card-title"><span>Country:</span> {country.name.common}</h5>
                <h5 className="card-title"><span>Region:</span> {country.region}</h5>
                <h5 className="card-title"><span>Population:</span> {country.population}</h5>
                <h5 className="card-title"><span>Area:</span> {country.area}</h5>
                <h5 className="card-title"><span>CarSide:</span> {country.car.side}</h5>
                <h5 className="card-title"><span>Subregion:</span> {country.subregion}</h5>
                <h5 className="card-title"><span>StartOfWeek:</span> {country.startOfWeek}</h5>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
