import { useEffect, useState } from "react";
import SearchIcon from './search.svg';

const currencyUrl = 'https://restcountries.com/v3.1/currency/';

const Currency = () => {

  const [money, setMoney] = useState([])
  const [searchMoney, setSearchMoney] = useState('')
  const [loaderquery, setLoaderQuery] = useState(false)
  const [error, setError] = useState('')
  const [dataquery, setDataQuery] = useState([]);
  const [query, setQuery] = useState("")
  const [dataerror, setDataError] = useState("");

  const handleInput = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    async function findData() {
      try {
        setLoaderQuery(true)
        setDataError("")
        const res = await fetch(`${currencyUrl}${query}`);
        if (!res.ok) throw new Error("cant find countries !!!!!!")
        const data = await res.json();
        setDataQuery(data)
        setDataError("")
        console.log(data)
      } catch (err) {
        setDataError(err.message)
      } finally {
        setLoaderQuery(false)
      }
    }
    if (query.length < 3) {
      setDataQuery([])
      setDataError("")
      return
    }
    findData()
  }, [query])
  // const fetchCurrency = async (cur) => {
  //   const response = await fetch(`${currencyUrl}${cur}`)
  //   const currencyData = await response.json()
  //   setMoney(currencyData)
  // }


  // const searchButton = () => {
  //   fetchCurrency(searchMoney)
  // }

  // useEffect(()=>{
  //   fetchCurrency()
  // }, [])
  return (
    <div>
      <h3 style={{ marginLeft: '100px', color: 'white', fontSize: '50px' }}>World Currency</h3>
      <div className='search'>
        <input
          placeholder='search for currency'
          value={query}
          onChange={handleInput}
        />
        {/* <img src={SearchIcon}
          onClick={searchButton}
          alt='search'
        /> */}
      </div>
      <WorldCurrency list={dataquery}></WorldCurrency>
    </div>
  )
}

export default Currency;


const WorldCurrency = ({ list }) => {
  return (
    <div className="country_list">
      {list.map((value, index) => {
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