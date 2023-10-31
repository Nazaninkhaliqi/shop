import {Link} from 'react-router-dom'
import './ShopList.css'
import { useTheme } from './hook/useTheme'
import { useContext, useState } from 'react'
import { shopContext } from '../context/shopContext'
export default function ShopList({shops}) {
  const {mode} = useTheme()

  return (
    <div className='shop-List'>
        {shops.map(shop =>(
            <div key={shop.id} className={`card ${mode}`}>
                <h3>{shop.title}</h3>
                <p>{shop.price}</p>
                <img src={shop.img} alt="" />
                <div>{shop.information.substring(0,100)}...</div>
                <Link to={`/shops/${shop.id}`}>detailes</Link>
                <button>+</button>
                <span className='numb'>0</span>
                <button>-</button>
            </div>
          ))}
          
    </div>
  )
}

