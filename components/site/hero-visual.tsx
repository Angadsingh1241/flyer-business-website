import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-12 rounded-full bg-[#f4a43a]/20 blur-[90px]" />
      <div className="relative h-[430px] sm:h-[540px]">
        <div aria-hidden="true" className="absolute inset-x-6 bottom-10 top-12 rounded-[2.5rem] border border-white/15 bg-white/[0.055] backdrop-blur-sm" />
        <div className="absolute left-[1%] top-[17%] z-10 w-[48%] -rotate-[10deg] rounded-[1.5rem] border border-white/30 bg-[#e4ecf6] p-2 shadow-[0_22px_60px_rgba(0,0,0,0.28)] transition-transform duration-500 hover:-rotate-[6deg]">
          <div className="relative aspect-[5/7] overflow-hidden rounded-[1rem] bg-white">
            <Image
              src="/flyer-templates/renovation-construction.png"
              alt="Sample renovation and construction flyer design"
              fill
              priority
              sizes="(max-width: 640px) 44vw, 275px"
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute right-[2%] top-[5%] z-20 w-[49%] rotate-[8deg] rounded-[1.5rem] border border-white/30 bg-[#e4ecf6] p-2 shadow-[0_25px_65px_rgba(0,0,0,0.32)] transition-transform duration-500 hover:rotate-[4deg]">
          <div className="relative aspect-[5/7] overflow-hidden rounded-[1rem] bg-white">
            <Image
              src="/flyer-templates/spice-of-india-front.png"
              alt="Sample restaurant promotional flyer design"
              fill
              priority
              sizes="(max-width: 640px) 44vw, 275px"
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-[8%] left-[23%] z-30 w-[47%] -rotate-[2deg] rounded-[1.5rem] border border-white/30 bg-[#e4ecf6] p-2 shadow-[0_30px_70px_rgba(0,0,0,0.38)] transition-transform duration-500 hover:rotate-[2deg]">
          <div className="relative aspect-[5/7] overflow-hidden rounded-[1rem] bg-white">
            <Image
              src="/flyer-templates/real-estate-homeowner-front.png"
              alt="Sample real estate marketing flyer design"
              fill
              priority
              sizes="(max-width: 640px) 42vw, 260px"
              className="object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-[11%] right-0 z-40 hidden items-center gap-2 rounded-full border border-white/20 bg-[#ffffff] px-4 py-3 text-sm font-semibold text-[#0d223f] shadow-2xl sm:flex">
          <Sparkles aria-hidden="true" className="h-4 w-4 text-[#d18416]" />
          Design. Print. Deliver.
        </div>
        <div className="absolute left-[3%] top-[1%] z-30 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur">
          <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-[#f4a43a]" />
          Hamilton, Ontario
        </div>
      </div>
      <p className="mt-1 text-center text-xs text-white/60">
        Example flyer designs from our gallery
      </p>
    </div>
  );
}
