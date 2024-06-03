import PricingCard from "./PricingCard";

export default function PricingPage() {
  const cardData = [
    {
      title: "Hobby",
      price: "0",
      description: "The ultimate project kickstart.",
      features: [
        "Import any git repo, deploy in seconds",
        "Automatic CI/CD",
        "Serverless Compute",
        "Traffic & performance insights",
        "Traffic & performance insights",
        "Web Application Firewall",
      ],
      buttonprompt: "Start Deploying",
    },
    {
      title: "Pro",
      price: "1500",
      description: "The plan to keep you growing.",
      features: [
        "First member included",
        "Secure team collaboration",
        "Frontend Observability tools",
        "Advanced Protection",
        "Scales with you",
        "Email support",
      ],
      buttonprompt: "Upgrade Now",
    },
    {
      title: "Enterprise",
      price: "Custom",
      description:
        "For teams with more security and performance needs.",
      features: [
        "Guest & Team access controls",
        "SCIM & Directory Sync",
        "Managed WAF Rulesets",
        "Multi-region compute & failover",
        "99.99% SLA",
        "Advanced Support",
      ],
      buttonprompt: "Request Trial",
    },
  ];

  return (
    <>
      <hr className="opacity-65 mb-2 md:mb-5" id="Pricing" />
      <div className="md:h-20" id="About"></div>
      <div className="flex flex-col justify-center items-center md:pb-32">
        <div className="container flex flex-col justify-center items-center md:gap-8 gap-4 text-center">
          <div className="title md:text-5xl text-2xl font-semibold text-[#DADAD9]">
            Find a plan that suits you.
          </div>

          <div className="desc md:text-xl md:px-0 px-12">
            Pick a plan that is best fit for your business
          </div>

            <div className="cardContainer flex flex-wrap justify-center items-center gap-8">
                {cardData.map((card, index) => (
                    <PricingCard 
                    key={index} 
                    title={card.title} 
                    description={card.description}
                    price={card.price}
                    features={card.features}
                    buttonprompt={card.buttonprompt}/>
                ))}
            </div>

        </div>
      </div>
    </>
  );
}
