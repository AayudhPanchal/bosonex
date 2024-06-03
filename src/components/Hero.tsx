export default function HeroSection() {
  return (
    <>
      <img
        src="/BG.png"
        alt="Background"
        className="absolute inset-0 pt-16 md:w-full md:h-screen h-[65vh] md:object-cover object-top opacity-50 z-0"
      />

      <div className="absolute inset-0 md:w-full md:h-full h-[65vh] bg-gradient-to-b from-black via-transparent to-black opacity-75 z-0" id="Home" ></div>

      <div className="flex justify-center md:pt-12 md:pb-32">
        <div className="relative md:max-h-[80vh] md:max-w-[60vw] max-w-full max-h-[80vh] md:pt-40 md:py-32 py-20 px-4 text-[#DADAD9] flex flex-col gap-4 md:gap-12 items-center justify-center text-center">
          <div className="relative z-10 main_text md:text-7xl text-4xl font-semibold w-[90%] md:w-full hover:scale-[1.01] transition-all bg-opacity-50 p-4 rounded">
            Lorem ipsum dolor sit amet, consectetur.
          </div>
          <div className="relative z-10 description text-xs md:text-base w-[80%] bg-opacity-50 p-4 rounded">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            totam recusandae ipsa, dignissimos illo ipsam temporibus tenetur,{" "}
            <span className="font-bold">animi reiciendis quae quia veniam</span>{" "}
            consequatur ea atque. Eaque, commodi numquam.
          </div>
        </div>
      </div>
    </>
  );
}
