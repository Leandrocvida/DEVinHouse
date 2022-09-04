import { Sidebar } from "@components";
import { MainContent } from "@components";


export const Home = () => {
  return (
    <body>
      <div className="containerTotal">
        <Sidebar/>
       <MainContent/>
      </div>
    </body>
  );
};
