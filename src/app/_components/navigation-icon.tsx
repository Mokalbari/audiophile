import Button from "@/components/ui/button"
import Image from "next/image"

type Props = {
  thumbnail: "earphones" | "headphones" | "speakers"
  category: string
}

export function NavigationIcon({ thumbnail, category }: Props) {
  return (
    <div className="flex flex-col items-center rounded-sm bg-gray-lighter p-6">
      <div className="max-w-32 -translate-y-8">
        <Image
          src={`/thumbnail-${thumbnail}.png`}
          alt={`Thumbnail for ${thumbnail}`}
          width={400}
          height={385}
        />
      </div>
      <h3 className="text-base font-bold uppercase">{category}</h3>
      <Button className="mt-4" intent={"chevron"}>
        Shop
      </Button>
    </div>
  )
}
