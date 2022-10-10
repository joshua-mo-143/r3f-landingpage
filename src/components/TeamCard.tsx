import React, {useEffect} from 'react'

type Props = {
    gender: string,
    id: string
}

const TeamCard = (props: Props) => {
    
  return (
    <div className="rounded-xl bg-blue-300 p-10 shadow-md text-center max-w-xs inline-flex flex-col justify-center">
<div className="flex justify-center">
<img src={`https://randomuser.me/api/portraits/${props.gender}/${props.id}.jpg`} className="rounded-full border-4 item-center fit-cover w-32" width="200" height="200"/>
</div>
  <h2 className="text-xl">Lorem - ipsum</h2>
  <hr className="mx-4 my-3 border-black"/>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam, ratione mollitia exercitationem debitis asperiores voluptate fugit assumenda incidunt consequuntur necessitatibus. Quidem minus animi possimus.</p>
  
    </div>
  )
}

export default TeamCard