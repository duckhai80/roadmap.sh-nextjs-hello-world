import Image from "next/image";
import firstImage from "@/public/1.jpg";

function PetsPage(props) {
  return (
    <div>
      <Image
        src={firstImage}
        placeholder="blur"
        alt="pet"
        width={280}
        height={420}
        blurDataURL=""
      />

      {["1", "2", "3", "4", "5"].map((path) => (
        <div key={path}>
          {/* <img src={`/${path}.jpg`} alt="pet" width={280} height={420} /> */}
          <Image src={`/${path}.jpg`} alt="pet" width={280} height={420} />
        </div>
      ))}
    </div>
  );
}

export default PetsPage;
