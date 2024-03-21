export default function PricingCard() {
  return (
    <div className="pb-12 w-[300px] h-fit mx-auto text-center flex flex-col gap-4 rounded-2xl overflow-hidden bg-primary relative backdrop-blur-md">
      <div className="absolute w-64 h-64 rounded-[50%] radial-background top-[85%] left-0"></div>
      <div className="relative z-10 flex flex-col gap-8">
        <div className="w-full h-36"></div>
        <div className="flex flex-col gap-4">
          <h3 className="">Get Fresh Package</h3>
          <div className="pb-1 border-b-[0.5px] border-gray-500 w-[85%] mx-auto">
            <p>Unlimited Haircuts and Beards</p>
          </div>
          <div className="pb-1 border-b-[0.5px] border-gray-500 w-[85%] mx-auto">
            <p>Free Laser Hair Removal Sessions</p>
          </div>
          <div className="pb-1 border-b-[0.5px] border-gray-500 w-[85%] mx-auto">
            <p>Men&apos;s Skin Facials</p>
          </div>
        </div>
        <div className="flex flex-col items-center py-4">
          <span className="text-2xl font-medium pb-4">$95/week</span>
          <button>Get Fresh and Subscribe</button>
          <span className="text-sm">No locked in contract</span>
        </div>
      </div>
    </div>
  );
}
