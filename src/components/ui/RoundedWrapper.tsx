import type { ReactNode } from "react";

interface RoundedWrapperProps {
  children: ReactNode;
  className?: string;
}

const RoundedWrapper = ({ children,}: RoundedWrapperProps) => {
  return (
    <div className='flex gap-2 border-[0.6px] border-gray-300 shadow-lg p-2 bg-white rounded-xl w-full '>
        {children}
    </div>
  )
}

export default RoundedWrapper