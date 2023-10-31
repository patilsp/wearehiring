import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Image
        src='assets/icons/loader.svg'
        width={80}
        height={80}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;
