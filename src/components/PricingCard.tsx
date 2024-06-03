import { Button } from "@nextui-org/react"

interface PricingCardProps{
    title: string
    price: string
    description: string
    features: string[]
    buttonprompt: string
}

export default function PricingCard(props: PricingCardProps){
    return(
        <div className="md:w-[20vw] md:h-[60vh] w-[85vw] rounded-xl flex flex-col gap-2 justify-start items-start md:py-6 py-4 md:px-8 px-5 border-1 hover:scale-[1.01] hover:bg-[#18181B] transition-all border-[#A1A1A1] text-[#EDEDED]">

            <div className="title md:text-xl text-lg font-semibold">
                {props.title}
            </div>

            <div className="price font-semibold md:text-4xl text-2xl">
                {(props.price === 'Custom') ? null : <span>&#8377;</span>} {props.price}
            </div>

            <div className="description text-[#A1A1A1] text-justify">{props.description}</div>

            <div className="md:py-4 py-3"></div>

            <div className="features flex flex-col items-start text-sm md:gap-1 gap-[10px] text-[#A1A1A1]">
                {props.features.map((feature, index) => (
                    <div>
                       &#10004; {feature}
                    </div>
                ))}
            </div>

            <div className="md:py-3 py-1"></div>

            <div className="promptbtn">
                <Button>{props.buttonprompt}</Button>
            </div>

        </div>
    )
}