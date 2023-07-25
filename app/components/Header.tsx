import Link from "next/link";
import { FaJoomla,FaUserGraduate } from "react-icons/fa";
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "./button.component";
import Avatar from "./Avatar";
import GetSesionProvider from "./SessionProvider";

const Header = () => {
  return (
    <div className='drawer drawer-end'>
      <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {
          /* Page content here */
          <>
          <div className='flex flex-col text-center gap-3 px-4 py-2 bg-gradient-to-l from-green-300 to-blue-300 via-purple-200 rounded-md mb-5'>
            <div className='flex justify-center alignItems-center height-1/4'></div>
            <h1 className='md:text-2xl underline font-bold '>
              Angielski
              <FaJoomla className='m-auto' color='blue' />
            </h1>
            <div className='container flex justify-between m-auto'>
              <Link href='/'>strona główna</Link>
              <Link href='/slownik'>słownik</Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 h-16 w-16 ">
            <div className="flex  mt-2 ">

            <GetSesionProvider>
            <Avatar/>
            </GetSesionProvider>
            </div>
          </div>
          </>
          
        }
        <label htmlFor='my-drawer-4' className='drawer-button btn btn-primary ml-4'>
          <FaUserGraduate />
          uczeń
        </label>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-4' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 h-full bg-base-200 text-base-content'>
          {/* Sidebar content here */}

         
          <li>
            <LoginButton />
          </li>
          <li>
            <RegisterButton />
          </li>
          <li>
            <LogoutButton />
          </li>
          <li>
            <ProfileButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
