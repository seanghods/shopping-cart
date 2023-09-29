import { NavLink } from 'react-router-dom';
import seanShopPic from '../assets/sean-shop-pic.png';
import {
  HomeOutlined as HomeOutlinedIcon,
  Home as HomeIcon,
  StoreMallDirectoryOutlined as StoreMallDirectoryOutlinedIcon,
  Store as StoreIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  ShoppingCart as ShoppingCartIcon,
} from '@mui/icons-material';

export default function NavBar({ cart }) {
  return (
    <div className="nav-bar-section h-screen flex flex-col w-[100px] md:w-[350px] sticky top-0">
      <div className="nav-bar flex-1 m-3 md:m-7 bg-[#20639B] rounded-lg text-white shadow-xl shadow-[#106ae0]">
        <div className="logo flex flex-col items-center p-3 md:p-11 text-4xl font-bold font-bobsburgers text-center">
          The Sean Shop
          <img
            src={seanShopPic}
            className="rounded-full w-[50px] md:w-[150px] shadow-xl shadow-white"
          />
        </div>
        <div className="nav-bar-links p-11 flex flex-col gap-20 items-center md:items-stretch ">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              [
                'flex gap-2 text-md hover:font-bold',
                isActive ? 'font-bold' : null,
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? <HomeIcon /> : <HomeOutlinedIcon />}
                <p className="hidden md:block">Home</p>
              </>
            )}
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              [
                'flex gap-2 text-md hover:font-bold',
                isActive ? 'font-bold' : null,
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? <StoreIcon /> : <StoreMallDirectoryOutlinedIcon />}
                <p className="hidden md:block">Shop</p>
              </>
            )}
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              [
                'flex gap-2 text-md hover:font-bold',
                isActive ? 'font-bold' : null,
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                {isActive || cart.length > 0 ? (
                  <ShoppingCartIcon />
                ) : (
                  <ShoppingCartOutlinedIcon />
                )}
                <p className="hidden md:block">Cart - {cart.length}</p>
              </>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
