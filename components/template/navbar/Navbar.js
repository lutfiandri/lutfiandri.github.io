import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-50 block md:hidden">
        <MobileNavbar />
      </div>
      <div className="sticky top-0 z-50 hidden md:block">
        <DesktopNavbar />
      </div>
    </>
  );
}

export default Navbar;
