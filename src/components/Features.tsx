import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function FeatureSection() {
  const features = [
    {
      title: "Seamless Buying",
      description:
        "Engage in a smooth buying and selling experience. List your products for sale and browse other listings to find what you need. Our platform supports secure transactions to ensure trust and satisfaction for both buyers and sellers",
      link: "",
    },
    {
      title: "Bulk Discounting",
      description:
        "Take advantage of our bulk discounting feature. Sellers can offer discounts for bulk purchases, and buyers can select the price that suits their budget. This flexible pricing model helps you save money and optimize your sales strategy.",
      link: "",
    },
    {
      title: "Catalogue Management",
      description:
        "Easily create and manage your product catalogue. Upload images, set prices, and add descriptions to showcase your items effectively. Keep your catalogue up-to-date and organized to attract more buyers.",
      link: "",
    },
    {
      title: "Order Tracking",
      description:
        "Keep track of all your orders in one place. Our tracking feature provides real-time updates on the status of your purchases and sales, ensuring transparency and peace of mind throughout the transaction process.",
      link: "",
    },
    {
      title: "Advanced Search and Filtering",
      description:
        "Quickly find exactly what you're looking for with our advanced search and filtering options. Narrow down your search by categories, price range, ratings, and more. Our intuitive search tools make it easy to navigate through extensive catalogues.",
      link: "",
    },
    {
      title: "Purchase Orders",
      description:
        "Streamline your procurement process with our purchase order management system. Easily create, track, and manage purchase orders, ensuring accuracy and efficiency in your supply chain operations. Simplify your order fulfillment and maintain control over your inventory.",
      link: "",
    },
  ];

  return (
    <>
    <hr className="opacity-65 md:mb-0 mb-5"/>
      <div className="md:h-20" id="About"></div>
      <div className="flex justify-center items-center" id="About">
        <div className="text-[#DADAD9] flex flex-col items-center justify-center text-center">
          <div className="Headings flex flex-col items-center justify-center md:gap-4">
            <div className="main_head md:text-5xl text-2xl font-semibold">
              What do we offer?
            </div>
            <div className="desc md:text-xl">
              Take a look at what we do, for you!
            </div>
          </div>

          <div className="Cards container flex flex-wrap gap-5 items-center justify-center p-8 md:pb-32">
            {features.map((feature, index) => (
              <div key={index} className="md:w-[30%] md:h-[45vh] w-[80%]">
                <Card className="w-full h-full flex flex-col justify-between hover:bg-[#101010] hover:scale-[1.01]">
                  <CardHeader className="font-semibold">
                    {feature.title}
                  </CardHeader>
                  <div className="flex-grow flex items-center justify-center">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src="https://nextui.org/images/hero-card-complete.jpeg"
                      width={300}
                    />
                  </div>
                  <CardBody className="text-xs">{feature.description}</CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
