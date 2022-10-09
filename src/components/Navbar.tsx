import React, {FC} from 'react'

type Props = {}

const Navbar : FC = (props: Props) => {
  return (
    <div className="h-12 w-full bg-red-500">
        <nav>
            <ul className="flex justify-end flex-row gap-4 mr-3 items-center">
                <li>Home</li>
                <li>Contact</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar