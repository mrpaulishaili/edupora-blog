// import logoImg from '/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'}>
      <a className="logo flex gap-2 items-center justify-center font-bold text-[#589685]">
        <Image
          loading="lazy"
          alt=""
          src="/images/logo.png"
          height="30"
          width="30"
        />{' '}
        Edupora
      </a>
    </Link>
  );
};

export default Logo;
