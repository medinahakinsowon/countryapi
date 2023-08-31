import { useEffect, useState } from "react";
import SearchIcon from './search.svg';
import { Circles } from 'react-loader-spinner';


const api = 'https://restcountries.com/v3.1/all';
const anoApi = 'https://restcountries.com/v3.1/name/';

const FetchData = () => {
  const [dataCountry, setDataCountry] = useState([])
  const [info, setInfo] = useState([])
  const [searchData, setSearchData] = useState('')
  const [loader, setLoader] = useState(false)
  const [loaderquery, setLoaderQuery] = useState(false)
  const [error, setError] = useState('')
  const [dataquery, setDataQuery] = useState([]);
  const [query, setQuery] = useState("")
  const [dataerror, setDataError] = useState("");

  const handleInput = (e) => {
    setQuery(e.target.value)
  }

  const fetchCountries = async () => {
    try {
      setError('')
      setLoader(true)
      const response = await fetch(api)
      if (!response.ok) {
        throw new Error("Something Happened")
      }
      const data = await response.json()
      setDataCountry(data)
      console.log(data)
      setLoader(false)
      setError('')
    } catch (err) {
      console.log(err.message)
      setError(err.message)
    }
  }
  // const fetchCountry = async (countryName) => {
  //   const response = await fetch(`${anoApi}${countryName}`)
  //   const anoData = await response.json()
  //   setInfo(anoData)
  // }

  // const searchButton = () => {
  //   fetchCountry(searchData)
  // }

  useEffect(() => {
    fetchCountries()

  }, [])
  useEffect(() => {
    async function findData() {
      try {
        setLoaderQuery(true)
        setDataError("")
        const res = await fetch(`${anoApi}${query}`);
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

  return (
    <div>
      <div className='search'>
        <input
          placeholder='search for country'
          value={query}
          onChange={handleInput}
        />
        {/* <img src={SearchIcon}
          onClick={searchButton}
          alt='search' */}

      </div>
      <OpenC list={dataquery} />
      {loader && <Loader />}
      {error && <Error message={error} />}
      {!error && !loader && <World data={dataCountry}></World>}
    </div>
  )
}

export default FetchData;

function Error({ message }) {
  return <h1 className="text-center text-danger">{message}</h1>
}

const Loader = () => {
  return (
    <div className="" style={{ margin: 'auto', marginLeft: '130px' }}>
      <Circles
        height="160"
        width="160"
        color="#ffffff"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}


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
            <div className="card" style={{ marginLeft: '100px' }}>
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


