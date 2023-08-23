import {useEffect,useState} from "react";

const capitalUrl = 'https://restcountries.com/v3.1/capital/';
const Capital = ()=>{

  const [capital, setCapital] = useState({})
  const fetchCapital = async(cap)=>{
    const response = await fetch(`${capitalUrl}${cap}`)
    const capitalData = response.json()
    setCapital(capitalData)
  }

  useEffect(()=>{
    fetchCapital()
  }, [])


  return(
    <div>
      <h3>capital</h3>
       <Worldcapital data={capital}></Worldcapital>
    </div>
  )
}

export default Capital;



const Worldcapital = ({ data }) => {
  return (
    <div className="country_list">
      {Object.entries(data).map((value, index) => {
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


