import ImageComp from "../Image";
import MobileNavContent from "./MobileNavContent";

interface MobileNavProps {
  isOpen: Boolean;
  handleChange: () => void;
}

const MobileNav = ({ isOpen, handleChange }: MobileNavProps) => {
  return (
    <>
      <nav className="body-size fixed left-0 z-50 w-full max-w-screen-2xl border-b border-[#B2B2A4] bg-white lg:hidden">
        <div className="flex items-center justify-between px-[30px] py-3 lg:px-20">
          <div className="flex items-center gap-10">
            <ImageComp image="/images/logo.svg" width={123} height={28} />
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 rounded-[80px] bg-[#FEF0C7] px-3 py-2.5">
              <ImageComp image="/images/coin.svg" width={20} height={20} />
              <p className="font-semibold text-[#7A2E0E]">100k</p>
            </div>
            <ImageComp
              image={
                isOpen ? "/images/menuclose.svg" : "/images/mobile-menu.svg"
              }
              styles="cursor-pointer"
              handleClick={() => handleChange()}
            />
          </div>
        </div>
      </nav>
      {isOpen && <MobileNavContent />}
    </>
  );
};

export default MobileNav;
