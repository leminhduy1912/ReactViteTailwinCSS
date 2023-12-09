const HomeSectionCard = (props) => {
  return (
    <div className="flex cursor-pointer flex-col items-center bg-white shadow-lg overflow-hidden w-[16rem] h-[20rem] border   rounded-2xl  ">
      <div className="h-[14rem] w-[12rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.image}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">No Filter</h3>
        <p className="mt-2 text-sm text-gray-500">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
