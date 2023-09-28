import { NavLink } from 'react-router-dom';
import seanShopPic from '../assets/sean-shop-pic.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function NavBar({ numItems }) {
  return (
    <div className="nav-bar-section h-screen flex flex-col w-[150px] md:w-[350px]">
      <div className="nav-bar flex-1 m-7 bg-[#20639B] rounded-lg text-white">
        <div className="logo flex flex-col items-center p-3 md:p-11 text-4xl font-bold font-bobsburgers text-center">
          The Sean Shop
          <img
            src={seanShopPic}
            className="rounded-full w-[50px] md:w-[150px]"
          />
        </div>
        <div className="nav-bar-links p-11 flex flex-col gap-20 items-center md:items-stretch">
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
                {isActive ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon />}
                <p className="hidden md:block">Cart - {numItems}</p>
              </>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
