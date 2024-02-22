
export  function CardSkeleton () {
    return (
      <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 m-10">
  {[...Array(10)].map((_, index) => (
    <div key={index} className="bg-white shadow-md rounded-md animate-pulse">
          <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded"></div>
          <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4 m-3"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5 m-3"></div>
          <div className="h-2 bg-gray-200 rounded-full mb-2.5 m-3"></div>
          <div className="flex items-center justify-start">
          <div className="h-6 w-20 bg-gray-200 rounded-sm m-2.5"></div>
            <div className="flex ml-auto ">
            <div className="h-2 w-20 bg-gray-200 rounded-full m-2.5"></div>
          </div>
        </div>
         <span className="sr-only">Loading...</span>
    </div>
  ))}
</div>
    </>
    );
  };
  
  
  
export  function ProfileSkeleton () {
 return <div className="px-1 w-full">
    <div className="max-h-[250px] max-w-[250px] sm:w-[300px] sm:h-[300px] rounded-full bg-gray-200"></div>
  </div>
}