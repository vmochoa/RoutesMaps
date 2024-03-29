import SideNav from './ui/dashboard/sidenav';
import { montserrat } from './ui/fonts';
import './ui/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${montserrat.className} antialiased`}>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-[#eeeeee]">
       
       <div className="w-full flex-none md:w-64">
         <SideNav />
       </div>
       <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
     </div>
        </body>
    </html>
  );
}
