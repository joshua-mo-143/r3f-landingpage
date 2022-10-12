import React, {FC} from 'react'

type Props = {}

const Navbar : FC = (props: Props) => {
  return (
    <div className="h-12 w-full bg-blue-300 fixed z-50 shadow-md inline-flex justify-between align-middle items-center">
      <a href="/"><h1 className="text-center text-md sm:text-xl ml-5 font-bold">Spacenet</h1></a>
        <nav>
            <ul className="flex justify-end flex-row gap-8 mr-3 items-center text-md sm:text-xl font-bold">
                <a href="/"><li>Home </li></a>
                <a href="#contact"><li>Contact Us</li></a>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar