
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-[1250px] mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-800">About BikeZone</h1>
          <p className="mt-4 text-lg text-gray-600">
            We are your trusted partner in providing top-quality bikes and reliable repair services.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="https://t4.ftcdn.net/jpg/02/62/54/89/360_F_262548938_RuzYCvVE4mcFDGLSkYltZic7fMZ9DdnV.jpg"
              alt="Bike Shop"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>


          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
            <p className="mt-4 text-base text-gray-600">
              BikeZone has been serving the cycling community for over a decade. We specialize in a wide range of bikes
              for all types of riders, from beginners to professionals. Our goal is to provide exceptional service with
              a focus on quality, safety, and customer satisfaction. Whether you're looking for a new bike or need expert
              repair services, we've got you covered.
            </p>
            <p className="mt-4 text-base text-gray-600">
              Our skilled technicians ensure your bike is in top condition, and our sales team is always ready to help
              you find the perfect bike that fits your needs. At BikeZone, we pride ourselves on offering the best bike
              products and services in the industry.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">Quality</h3>
              <p className="mt-4 text-gray-600">
                We provide top-notch bikes and services, ensuring every product meets the highest standards of quality.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">Customer Focus</h3>
              <p className="mt-4 text-gray-600">
                Our customers are at the heart of everything we do, and we strive to exceed their expectations with every
                interaction.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
              <p className="mt-4 text-gray-600">
                We stay ahead of the curve by offering the latest bike models and repair techniques, ensuring we provide
                the best solutions to our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
