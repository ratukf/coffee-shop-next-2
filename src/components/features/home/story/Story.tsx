import { StaticImageData } from 'next/image'
import Image from 'next/image'
import image from 'coffee/images/home-tamping.jpg'

interface HomeData {
    header: string
    description: string
    src: StaticImageData
}

const story: HomeData[] = [
    {
        header: 'Fantastic Coffee Sip Story',
        description:
            'Every sip of our coffee is a journey. From carefully selected beans harvested at peak ripeness to the expert brewing of our baristas, each cup tells a unique story. Indulge in rich flavors, enticing aromas, and a cozy atmosphere. We serve the highest quality coffee that will tantalize your taste buds. Each coffee bean is meticulously selected and roasted to perfection to deliver rich and complex flavors. Taste the difference in every sip.',
        src: image,
    },
]
export default function Story() {
    return (
        <section className="w-full sm:pl-8 md:pl-14">
            {story.map((data, index) => (
                <div
                    key={index}
                    className="w-full flex flex-col md:flex-row items-center py-8"
                >
                    <div className="lg:w-1/3 sm:w-full text-left mb-8 md:mb-0 md:mr-8 pr-8 text-calm-black">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 ">
                            {data.header}
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl font-extralight ">
                            {data.description}
                        </p>
                    </div>
                    <div className="lg:w-2/3 sm:w-full">
                        <Image
                            className="w-full h-auto rounded-tl-full rounded-bl-full"
                            src={data.src}
                            alt={data.header}
                        />
                    </div>
                </div>
            ))}
        </section>
    )
}
