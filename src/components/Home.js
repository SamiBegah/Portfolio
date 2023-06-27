function Home({ firstClick, setFirstClick }) {
  return (
    <div
      className={`${
        firstClick ? "invisible fixed" : ""
      } shadow-md  h-60 sm-72 lg:h-96 text-2xl xl:text-6xl text-white bg-blue-500 bg-opacity-30  w-full text-center flex flex-col gap-5 justify-center `}
    >
      <h1 id="head1" className="header text-center ">
        Welcome to my portfolio website!
      </h1>

      <h1 id="head2" className="header text-center">
        I am Sami Begah, a front-web developer.
      </h1>
      <h1 id="head3" className="header text-center">
        Please choose an option:
      </h1>
    </div>
  );
}

export default Home;
