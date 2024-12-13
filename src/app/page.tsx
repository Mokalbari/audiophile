import { navigationLinks } from "@/lib/navigation/navigation-links"
import { NavigationIcon } from "./_components/navigation-icon"

const navigationLinksValues = Object.values(navigationLinks)

export default function Page() {
  return (
    <>
      <div className="bg-black-default px-6 md:px-10 lg:px-40">
        {/* <Navbar />
      <Hero /> */}
      </div>

      <div>
        {navigationLinksValues.map((value) => (
          <NavigationIcon
            key={value.id}
            category={value.name}
            thumbnail={value.link}
          />
        ))}
      </div>
    </>
  )
}
