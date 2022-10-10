import React, {FC} from 'react'

type Props = {}

const Navbar : FC = (props: Props) => {
  return (
    <div className="h-12 w-full bg-blue-300 absolute z-50 shadow-md">
        <nav>
            <ul className="flex justify-end flex-row gap-8 mr-3 items-center mt-2 text-xl">
                <li>Home </li>
                <li>Contact</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar