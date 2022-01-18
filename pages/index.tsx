import SideBar from '../components/SideBar';
import MobileMenuButton from '../components/MobileMenuButton';
import {Section, SectionTitle, SectionText} from '../styles/GlobalComponents/index';
export default function Home () {
  return (
    <div className="h-screen w-screen md:flex">
      
      {/* mobile menu bar */}
      <div className="bg-gray-500 flex justify-between md:hidden">
        {/* logo */}
        <a href="#" className="block p-4">
          <h2 className="text-2xl text-gray-100">PN</h2>
        </a>

        {/* mobile menu button */}
        <MobileMenuButton></MobileMenuButton>
      </div>

      {/*side bar */}
      <SideBar></SideBar>

      {/* content */}
      <div className="flex-1 p-20 text-2xl font-bold">
        <Section>
          <SectionTitle>
            Welcome To <br/>
            My Personal Portfolio 
          </SectionTitle>
          <SectionText>
            Nothing much here
          </SectionText>
        </Section>
      </div>
    </div>
  );
}
