import Section_1 from "./Section-1";
import Section_2 from "./Section-2";
import Section_3 from "./Section-3";

export default function HomePage() {

  return (
    <>
      <div className="flex items-start">
        <Section_1/>
      </div>
      <div className="mt-[30px]">
        <Section_2/>
      </div>
      <div>
        <Section_3/>
      </div>
    </>
  );
}
