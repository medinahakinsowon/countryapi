import {useEffect,useState} from "react";
import SearchIcon from './search.svg';

const languageUrl = 'https://restcountries.com/v3.1/lang/';

const Language = ()=>{

  const [searchlan, setSearchLanguage] = useState('')
  const [language, setLanguage] = useState([])

  const fetchLanguage = async (lan)=>{
    const response = await fetch(`${languageUrl}${lan}`)
    const languageData = await response.json()
    setLanguage(languageData)
  }
  
  const searchButton = () => {
    fetchLanguage(searchlan)
  }



  return(
    <div>
      <h2 style={{marginLeft: '100px', color:'white', fontSize: '50px'}}>World Languages</h2>
      <div className='search'>
        <input
          placeholder='search for language'
          value={searchlan}
          onChange={(e) => setSearchLanguage(e.target.value)}
        />
        <img src={SearchIcon}
          onClick={searchButton}
          alt='search'
        />
      </div>
       <WorldLanguage data={language}></WorldLanguage>
    </div>
  )
}

export default Language;


const WorldLanguage = ({ data }) => {
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