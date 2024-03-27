import properties from "../../data/apartments.json";
import PropertyCard from "./PropertyCard";

const PropertyList = () => {
  return (
    <div>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Properties for rent...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties === 0 ? (
              <p>No Properties Found</p>
            ) : (
              properties.map((property) => {
                return <PropertyCard key={property.id} property={property} />;
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
export default PropertyList;
