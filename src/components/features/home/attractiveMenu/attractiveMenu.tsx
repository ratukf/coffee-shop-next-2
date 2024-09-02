import { Card, CardBody } from '@nextui-org/card'
import { useState } from 'react'
import Image from 'next/image'

import AttractiveMenuData from 'coffee/data/attractive-menu'

export default function AttractiveMenu() {
    const [AttractiveMenu] = useState(AttractiveMenuData)

    return (
        <section className="bg-light-gray p-14 w-full">
            <div className="mb-5">
                <h1 className="font-black text-calm-black text-6xl text-center">
                    Our Attractive
                </h1>
                <h2 className="font-black text-calm-brown text-4xl text-center">
                    Menu
                </h2>
            </div>
            <div className="md:flex gap-10">
                {AttractiveMenu.map((item, index) => (
                    <Card key={index} className="md:flex-grow p-3">
                        <div className="relative w-full h-60">
                            <Image
                                src={`/images/${item.url}`}
                                alt={`${item.title}`}
                                layout="fill"
                                objectFit="contain"
                                className="rounded-t-lg"
                            />
                        </div>
                        <CardBody className="font-bold text-xl">
                            <h2 className="text-center">{item.title}</h2>
                            <h2>Rp. {item.price.toLocaleString('id-ID')}</h2>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    )
}
