import Section_2 from "./Section-2";
import Section_1 from "./Section-1";

export default async function SongsByCategoriesPage( { params } : any ) {
  const { id } = await params;

  return (
    <>
      <div className="">
        <Section_1 id ={id}/> 
        <div className="">
          <Section_2 id = {id}/>
        </div>
      </div>
    </>
  );
}
