const Title = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase font-light text-designcolor tracking-wide">
        {title}
      </h3>
      <h1 className="text-5xl text-gray-300 font-bold capitalize">
        {description}
      </h1>
    </div>
  );
};

export default Title;
