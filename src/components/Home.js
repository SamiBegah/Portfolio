function Home() {
  return (
    <div className="w-full bg-black overflow-hidden">
      <div id="starsReverse2"></div>
      <div className="headerTitle">
        <h1 className=" bg-opacity-10 p-2 rounded-xl ">
          <span className="font-bold  text-white whitespace-nowrap p-2 border-b-4 ">
            SAMI BEGAH
          </span>
          <div className="roller">
            <div className="rolltext font-bold ">
              <span className="text-[#5DD3F3]">React</span>
              <span className="text-[#EFD82E]">JS</span>
              <br />
              <span className="text-[#2B72BF]">Type</span>
              <span className="text-white">Script</span>
              <br />
              <span className="text-[#609555]">NODE.</span>
              <span className="text-[#EFD82E]">JS</span>
              <br />
              <div id="spare-time" className="flex justify-center font-bold">
                <div>
                  <span className="text-[#EFD82E]">JS</span>
                </div>
                /<span className="text-[#E44F26]">HTML</span>/
                <span className="text-[#2762E9]">CSS</span>
                <br />
              </div>
              <br />
            </div>
            <br />
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Home;
