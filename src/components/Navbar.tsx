import RoundedWrapper from "./ui/RoundedWrapper"
const Navbar = () => {
  return (
      <RoundedWrapper>        
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-orange-400 p-4">
            <p className="text-white">S</p>
          </div>
            <p>Overview Dashboard
          <br /> <span className="text-sm text-gray-500">General growth and sales analytics</span></p>
      </RoundedWrapper>
  )
}
export default Navbar