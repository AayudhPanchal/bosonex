export default function HeroSection() {
  return (
    <>
      <div className="flex justify-center md:pt-12 md:pb-32">
        <div className="md:max-h-[80vh]  md:max-w-[60vw] max-w-full max-h-[80vh] md:pt-40 md:py-32 py-20 px-4 bg-black text-[#DADAD9] flex flex-col gap-4 md:gap-12 items-center justify-center text-center">
          <div className="main_text md:text-7xl text-4xl font-semibold w-[90%] md:w-full hover:scale-[1.01] transition-all">
            Lorem ipsum dolor sit amet, consectetur.
          </div>
          <div className="description text-xs md:text-base w-[80%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
            totam recusandae ipsa, dignissimos illo ipsam necessitatibus
            accusamus temporibus tenetur, animi reiciendis quae quia veniam
            consequatur ea atque. Eaque, commodi numquam.
          </div>
        </div>
      </div>
    </>
  );
}
