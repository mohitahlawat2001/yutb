import React from 'react'
import Button from './Button';
const list = ['all', 'web', 'mobile' ,'desktop', 'games', 'network', 'security', 'database', 'cloud', 'other']
const Buttonlist = () => {
  return (
    <div className='flex flex-row'>
      {list.map((item, index) => {
        return <Button key={index} name={item} />
      })}
    </div>
  )
}

export default Buttonlist;