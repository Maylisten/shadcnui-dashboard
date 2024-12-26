import {Lines} from "@/components/cards/Lines";
import {TableData} from "@/components/cards/TableData";
import {FullDiv} from "@/components/FullDiv";
import Calendar from "@/components/cards/Calendar";
import General from "@/components/cards/General";

function Home() {
  return (
    <div className="w-full h-full p-8 grid grid-rows-2 gap-6">
      <div className="grid grid-cols-2 gap-6">
        <FullDiv>
          <General/>
        </FullDiv>
        <div className="grid grid-rows-2 gap-6">
          <FullDiv>
            <Calendar/>
          </FullDiv>
          <FullDiv>
            <Calendar/>
          </FullDiv>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <FullDiv>
          <Lines/>
        </FullDiv>
        <FullDiv>
          <TableData/>
        </FullDiv>
        <FullDiv>
          <TableData/>
        </FullDiv>
      </div>
    </div>
  );
}

export default Home;
