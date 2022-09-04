import { Sidebar } from "@components";
import { MainContent } from "@components";


export const Home = () => {
  return (    
      <div className="containerTotal">
        <Sidebar/>
       <MainContent/>
      </div>
  );
};
