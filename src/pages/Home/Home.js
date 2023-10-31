import {useFetch} from '../../components/hook/useFetch';
import ShopList from '../../components/ShopList';
import "./Home.css"
export default function Home() {
  const {data,isLoading,error} =useFetch('http://localhost:3000/shop')
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading...</p>}
      {data && <ShopList shops={data} />}
    </div>
  )
}
