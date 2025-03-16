import Section_2 from "./Section-2";
import Section_1 from "./Section-1";

export default async function SingerDetailPage( { params } : any ) {
    const { id } = await params;

    console.log(id);
     
    return (
      <>
        <div className="">
          <div className="">
            <Section_1 id = {id}/>
          </div>
          <div className="">
            <Section_2 id = {id}/>
          </div>
        </div>
      </>
    );
  }
  