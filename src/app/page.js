import Image from "next/image";
import Hero from "../../components/Hero";
import PropertyList from "../../components/PropertyList";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <PropertyList />
      </div>
    </>
  );
}
