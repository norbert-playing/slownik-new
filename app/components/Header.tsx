import Link from "next/link";
import { FaJoomla } from "react-icons/fa";
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "./button.component";

const Header = () => {
  return (
    <div className='flex flex-col text-center gap-3 px-4 py-2 bg-gradient-to-l from-green-300 to-blue-300 via-purple-200 rounded-md mb-5'>
      <div className='flex justify-center alignItems-center height-1/4'>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </div>
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
