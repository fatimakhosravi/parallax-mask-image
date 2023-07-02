import House from "./assets/house.jpg";
import Planets from "./assets/planets.jpg";
import Sunset from "./assets/sunset.jpg";

const App = () => {
  console.log(House);

  return (
    <>
      <div
        className="h-[600px] relative opacity-60 bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: `url("${House}")` }}
      >
        <span className="absolute left-[25%] top-[35%] max-h-[25%] tracking-widest text-center w-[50%] bg-black">
          <h2 className="text-cyan-50 pad p-4 text-[25px]">SCROLL DOWN</h2>
        </span>
      </div>

      <div className="py-20 px-24 text-justify bg-white">
        <h3 className="text-[25px] text-center tracking-widest m-5">
          PARALLAX DEMO
        </h3>
        <p className="text-gray-700">
          Parallax scrolling is a web site trend where the background content is
          moved at a different speed than the foreground content while
          scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis
          nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit
          pellentesque a, magna turpis est sapien duis blandit dignissim.
          Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum
          consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget
          et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus
          vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar,
          in in neque risus odio. Accumsan fringilla vulputate at quibusdam
          sociis eleifend, aenean maecenas vulputate, non id vehicula lorem
          mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel,
          non sit platea sit, maecenas ante augue etiam maecenas, porta
          porttitor placerat leo.
        </p>
      </div>

      <div
        className="h-[300px] relative opacity-60 bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: `url("${Planets}")` }}
      >
        <span className="absolute left-[25%] top-[35%] max-h-[25%] tracking-widest text-center w-[50%]">
          <h2 className="text-white pad p-4 text-[25px]">LESS HEIGHT</h2>
        </span>
      </div>

      <div className="py-20 px-24 text-center bg-zinc-900 opacity-90">
        <p className="text-white">
          Scroll up and down to really get the feeling of how Parallax Scrolling
          works.
        </p>
      </div>

      <div
        className="h-[400px] relative opacity-60 bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: `url("${Sunset}")` }}
      >
        <span className="absolute left-[25%] top-[35%] max-h-[25%] tracking-widest text-center w-[50%]">
          <h2 className="text-white pad p-4 text-[25px]">SCROLL UP</h2>
        </span>
      </div>

      <div className="py-20 px-24 text-center bg-zinc-900 opacity-90">
        <p className="text-white">
          Scroll up and down to really get the feeling of how Parallax Scrolling
          works.
        </p>
      </div>

      <div
        className="background-img h-[600px] relative bg-cover bg-no-repeat bg-center bg-fixed"
        style={{ backgroundImage: `url("${House}")` }}
      >
        <span className="absolute left-[25%] top-[35%] max-h-[25%] tracking-widest text-center w-[50%] bg-black">
          <h2 className="text-cyan-50 pad p-4 text-[25px]">COOL!</h2>
        </span>
      </div>
    </>
  );
};

export default App;
