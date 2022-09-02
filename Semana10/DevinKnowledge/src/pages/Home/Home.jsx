import { Sidebar } from "@components";
import { MainContent } from "@components";


export const Home = () => {
  return (
    <body>
      <div class="containerTotal">
        <Sidebar/>
       <MainContent/>
      </div>
    </body>
  );
};
