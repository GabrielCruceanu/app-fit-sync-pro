import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src="/assets/icons/logo-icon.svg"
        width={30}
        height={30}
        alt="logo icon"
      />
      <p className="text-xl">FitSyncPro</p>
    </div>
  );
};
export default Logo;
