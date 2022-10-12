import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useEffect} from 'react'

type Props = {
    
}

const BenefitCard = (props: Props) => {
    
  return (
    <div className="rounded-xl bg-slate-300 p-10 shadow-md text-center max-w-xs inline-flex flex-col justify-center">
<div className="flex justify-center">
    <FontAwesomeIcon icon={faClock} className="text-5xl py-3"/>
</div>
  <h2 className="text-xl">Lorem ipsum</h2>
  <hr className="mx-4 my-3 border-black"/>
  <p className="text-md lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam, ratione mollitia exercitationem debitis asperiores voluptate fugit assumenda incidunt consequuntur necessitatibus. Quidem minus animi possimus.</p>
  
    </div>
  )
}

export default BenefitCard