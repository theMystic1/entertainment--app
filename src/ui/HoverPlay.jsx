function HoverPlay() {
  return (
    <div className="absolute w-full h-full z-10  bg-primary bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
      <span className="flex items-center min-w-[182px] max-w-[200px] w-[40%] h-20 rounded-full bg-secondary bg-opacity-25 px-4 ">
        <img
          className="w-14 mr-8"
          src="/assets/icon-play.svg "
          alt="alt-play"
        />
        <p className="text-3xl text-secondary font-bold">Play</p>
      </span>
    </div>
  );
}

export default HoverPlay;
