
const Navbar = () => {
  return (
      <div className='flex gap-2 border-[0.6px] border-gray-300 shadow-lg p-2 bg-white rounded-xl w-full'>
        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-orange-400 p-4">
          <p className="text-white">S</p>
        </div>
        <p>Overview Dashboard
        <br /> <span className="text-sm text-gray-500">General growth and sales analytics</span></p>
      </div>
 
  )
}

export default Navbar