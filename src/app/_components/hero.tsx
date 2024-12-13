import Button from "@/components/ui/button"
import { cn } from "@/utils/style"

export function Hero() {
  return (
    <section
      className={cn(
        "bg-hero-image-mobile bg-cover bg-center pb-32 pt-28 text-center text-white",
        "md:bg-hero-image-tablet md:py-40",
        "lg:bg-hero-image-dsktp lg:bg-no-repeat lg:py-40 lg:text-left",
      )}
    >
      <div className="flex flex-col items-center lg:max-w-96 lg:items-start">
        <div className="text-sm uppercase tracking-widest text-white/50">
          New product
        </div>
        <h1 className="mt-4 text-3xl font-bold uppercase md:mt-6 md:leading-tight">
          XX99 Mark II Headphones
        </h1>
        <p className="mt-6 max-w-80 text-sm leading-6 text-white/80">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button className="mt-7 md:mt-10">See product</Button>
      </div>
    </section>
  )
}
