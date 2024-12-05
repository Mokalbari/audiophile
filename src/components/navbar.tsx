import { FaCartShopping } from "react-icons/fa6"
import { GiHamburgerMenu } from "react-icons/gi"
import { Audiophile } from "./ui/audiophile"

export function Navbar() {
  const links = [
    {
      id: 1,
      label: "Home",
      href: "/",
    },
    {
      id: 2,
      label: "Headphones",
      href: "/headphones",
    },
    {
      id: 3,
      label: "Speakers",
      href: "/speakers",
    },
    {
      id: 4,
      label: "Earphones",
      href: "/earphones",
    },
  ]

  return (
    <nav className="border-b border-gray-300/50 bg-black-default py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="lg:hidden">
            <GiHamburgerMenu fill="white" size={20} />
          </div>
          <div className="max-sm:hidden">
            <Audiophile />
          </div>
        </div>
        <div>
          <div className="sm:hidden">
            <Audiophile />
          </div>
          <ul className="flex cursor-pointer items-center gap-8 font-bold uppercase text-white max-lg:hidden">
            {links.map((link) => (
              <li
                className="transition-colors hover:text-orange-accent"
                key={link.id}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <FaCartShopping fill="white" size={20} />
        </div>
      </div>
    </nav>
  )
}
