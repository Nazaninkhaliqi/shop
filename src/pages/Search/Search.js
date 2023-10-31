import ShopList from '../../components/ShopList'
import { useLocation } from "react-router-dom"
import {useFetch} from '../../components/hook/useFetch'
import './Search.css'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')
  const url = ' http://localhost:3000/shop?q=' + query
  const {error,isLoading,data}=useFetch(url)
  return (
    <div>
      <h2 className="page-title">your result "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {data && <ShopList shops={data}/>}
    </div>
  )
}

