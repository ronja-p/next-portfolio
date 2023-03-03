import Navbar from './Navbar';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={poppins.className}>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
