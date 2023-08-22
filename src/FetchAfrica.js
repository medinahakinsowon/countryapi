import { useEffect, useState } from "react";

const anotherApi = 'https://restcountries.com/v3.1/region/africa'

const FetchAfrica = () => {

  const [datas, setNewdata] = useState([])
 

  const fetchAfrica = async () => {
    const res = await fetch(anotherApi)
    const datas = await res.json()
    setNewdata(datas)
    console.log(datas)
  }

  useEffect(() => {
    fetchAfrica()  
  }, [])
  return (
    <div>
     <Africa list={datas}></Africa>
    </div>
  )
}

export default FetchAfrica;



const Africa = ({ list }) => {
  return (
    <div className="country_list">
      {list.map((country, index) => {
        return(
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