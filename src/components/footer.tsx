import IconFacebook from "@/assets/svg/icon-facebook.svg"
import IconInstagram from "@/assets/svg/icon-instagram.svg"
import IconTwitter from "@/assets/svg/icon-twitter.svg"
import Logo from "@/assets/svg/logo.svg"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-black text-center text-white">
      <div className="">
        <div className="flex flex-col items-center">
          <div className="h-1 w-24 bg-orange" />
          <Logo className="mt-12" />
          <nav>
            <ul className="mt-12 flex flex-col gap-4 text-sub font-bold uppercase">
              <li>Home</li>
              <li>Headphones</li>
              <li>Speakers</li>
              <li>Earphones</li>
            </ul>
          </nav>
        </div>
        <p className="mt-12 leading-7 text-white/50">
          Audiophile is an all in one stop to fulfill your audio needs. We&lsquo;re a small team of
          music lovers and sound specialists who are devoted to helping you get the most out of
          personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>
        <div className="mt-12 font-bold text-white/75">Copyright 2021. All Rights Reserved</div>
      </div>

      <div className="mb-9 mt-12 flex gap-4">
        <IconFacebook />
        <IconInstagram />
        <IconTwitter />
      </div>
    </footer>
  )
}
