import IconCart from "@/assets/svg/icon-cart.svg"
import IconHamburger from "@/assets/svg/icon-hamburger.svg"
import Logo from "@/assets/svg/logo.svg"
import { cn } from "@/lib/utils"

// type Props = {}

export default function Navbar() {
  return (
    <nav
      className={cn(
        "border-b-lightGray flex items-center justify-around border-b bg-black px-6 py-8",
        "md:justify-normal md:gap-10",
        "lg:justify-between",
      )}
    >
      <IconHamburger className="lg:hidden" />
      <Logo />
      <ul className="flex gap-9 font-bold uppercase text-white max-lg:hidden">
        <li className="cursor-pointer hover:text-orange">Home</li>
        <li className="cursor-pointer hover:text-orange">Headphones</li>
        <li className="cursor-pointer hover:text-orange">Speakers</li>
        <li className="cursor-pointer hover:text-orange">Earphones</li>
      </ul>
      <IconCart className="md:max-lg:ml-auto" />
    </nav>
  )
}
