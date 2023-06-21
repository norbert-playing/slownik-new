import Link from "next/link";
import { FaJoomla } from "react-icons/fa";
const Header = () => {
  return (
    <div className='flex flex-col text-center gap-3 px-4 py-2 bg-gradient-to-l from-green-300 to-blue-300 via-purple-200 rounded-md mb-5'>
      <h1 className='md:text-2xl underline font-bold '>
        Angielski
        <FaJoomla className='m-auto' color='blue' />
      </h1>
      <div className='container flex justify-between m-auto'>
        <Link href='/'>strona główna</Link>
        <Link href='/slownik'>slownik</Link>
      </div>
    </div>
  );
};

export default Header;
