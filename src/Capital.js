import {useEffect,useState} from "react";

const capitalUrl = 'https://restcountries.com/v3.1/capital/';
const Capital = ()=>{

  const [capital, setCapital] = useState([])
  const fetchCapital = async (cap)=>{
    const response = await fetch(`${capitalUrl}${cap}`)
    const capitalData = await response.json()
    setCapital(capitalData)
    console.log(capitalData)
  }

  

  useEffect(()=>{
    fetchCapital()
  }, [])


  return(
    <div>
      <h3 style={{marginLeft: '100px', color:'white', fontSize: '50px'}}>World Capital City</h3>
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
              <img src={value.flags} className="card-img-top" alt="country_flag" />
              <div className="card-body">
                <img src={value.coatOfArms} className="coat" alt="coat_of_arm" />
                <h5 className="card-title"><span>Country:</span> {value.name}</h5>
                <h5 className="card-title"><span>Region:</span> {value.region}</h5>
                <h5 className="card-title"><span>Population:</span> {value.population}</h5>
                <h5 className="card-title"><span>Area:</span> {value.area}</h5>
                <h5 className="card-title"><span>CarSide:</span> {value.car}</h5>
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


