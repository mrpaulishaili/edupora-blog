import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im';
import Link from 'next/link';
import Newslatter from './_child/newsletter';

export default function footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
  };

  return (
    <footer className="bg-green-500 p-3 px-[2%]">
      <Newslatter></Newslatter>
      <div className="container mx-auto flex justify-center py-8">
        <div className="py-3">
          <div className="flex gap-6 justify-center">
            <Link href={'/'}>
              <a>
                <ImFacebook color="white" />
              </a>
            </Link>
            <Link href={'/'}>
              <a>
                <ImTwitter color="white" />
              </a>
            </Link>
            <Link href={'/'}>
              <a>
                <ImYoutube color="white" />
              </a>
            </Link>
          </div>

          <p className="py-5 text-gray-100 text-center">
            Copyright ©2023 All rights reserved | A product of APPHEART
          </p>
          <p className="text-gray-100 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
