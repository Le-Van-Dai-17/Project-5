
import Section_2 from "./Section-2";
import Section_3 from "./Section-3";
import Section_1 from "./Section-1";

export default async function SongDetailPage ( { params}:any ) {
    const { id } = await params;

    return (
        <>
            <Section_1 id = {id}/>
            <Section_2 id = {id}/>
            <Section_3 id = {id}/>
        </>
    )
}