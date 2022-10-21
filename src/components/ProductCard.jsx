import React from 'react'
import '../styles/productCard.css'

import{ ProductData} from './../data/data';
const ProductCard = () => {
  return (
<>

  <div className='product-container'>
    {ProductData.map((item)=>(
      <ul  className='product'>
        <li key={item.key} >
          <p className='icon'>{item.icons}</p>
          <p className='name'>{item.name}</p>
          <p className='content'>{item.content}</p>
        </li>
      </ul>
    ))}
</div>
 </>
  )
}

export default ProductCard