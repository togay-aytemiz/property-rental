import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaRuler, FaMoneyBill, FaMap } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-md relative">
        <img
          src={property.image}
          alt=""
          className="object-cover rounded-t-xl w-full h-auto"
          width={0}
          height={0}
          sizes="100vw"
        />
        <div className="p-4">
          <div className="text-left md:text-center lg:text-left mb-6">
            <h3 className="text-xl font-bold">{property.title}</h3>
          </div>

          <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
            <p>
              <FaMoneyBill className="inline mr-1 mb-1" /> Monthly:{" "}
              {property.price}
            </p>
          </div>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <Link
              href={`/`}
              className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
