'use client'

import { useState, useEffect, useLayoutEffect } from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import image1 from 'coffee/images/home-coffee-splash.png'
import image2 from 'coffee/images/home-coffee-cup.png'
import image3 from 'coffee/images/home-coffee-bean.png'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Interface for image data
interface ImageData {
    src: StaticImageData
    header1: string
    header2: string
    description: string
}

// Image data array
const images: ImageData[] = [
    {
        src: image1,
        header1: 'Every sip,',
        header2: 'a flavor adventure',
        description:
            'Indulge in the exquisite taste of our premium coffee. From its captivating aroma to its rich flavor of, each cup is a masterpiece.',
    },
    {
        src: image2,
        header1: 'Start your day with a boost,',
        header2: 'enjoy our coffee',
        description:
            'Not only delicious, our coffee is also packed with antioxidants, boosting your health and energy throught the day.',
    },
    {
        src: image3,
        header1: 'From bean to cup,',
        header2: 'we bring you the best',
        description:
            'Sourced from the finest plantations and processed using traditional methods, our coffee is crafted to perfection.',
    },
]

export default function ImageSlider(): JSX.Element {
    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    // State to determine if the image is being hovered over
    const [isHovered, setIsHovered] = useState<boolean>(false)

    // Function to show the previous slide
    const prevSlide = (): void => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        )
    }

    // Function to show the next slide
    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    // useEffect hook to handle automatic slide transition
    useEffect(() => {
        // Start interval for automatic slide change if not hovered
        if (!isHovered) {
            const interval = setInterval(() => {
                nextSlide()
            }, 3000)

            // Cleanup the interval on component unmount
            return () => {
                clearInterval(interval)
            }
        }
    }, [isHovered])

    // Handle mouse over event
    const handleMouseOver = (): void => {
        setIsHovered(true)
    }

    // Handle mouse leave event
    const handleMouseLeave = (): void => {
        setIsHovered(false)
    }

    return (
        <section className="sm:p-8 md:p-20 w-full bg-calm-brown">
            <div
                className="h-auto flex flex-col md:flex-row items-center"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                <div className="description flex flex-col text-black text-center md:text-left lg:w-1/2 sm:w-full p-4 md:p-0">
                    <h1 className="font-black text-4xl sm:text-5xl md:text-6xl">
                        {images[currentIndex].header1}
                    </h1>
                    <h2 className="font-black text-2xl sm:text-3xl md:text-4xl my-4">
                        {images[currentIndex].header2}
                    </h2>
                    <p className="font-extralight text-xl sm:text-xl md:text-lg">
                        {images[currentIndex].description}
                    </p>
                </div>
                <Image
                    src={images[currentIndex].src}
                    alt={`Slider Image ${currentIndex + 1}`}
                    className="image transition-all duration-500 ease-in-out cursor-pointer w-full md:w-1/2 rounded-tl-lg rounded-bl-lg mt-4 md:mt-0"
                />
            </div>

            {/* Button */}
            <button
                className="absolute left-0 md:left-6 top-2/3 transform -translate-y-1/2 h-10 w-10 rounded-full hover:bg-[#1a222f] bg-[#111927] text-white flex items-center justify-center"
                onClick={prevSlide}
            >
                <ChevronLeft className="text-gray-400 group-hover:text-white" />
            </button>
            <button
                className="absolute right-0 md:right-6 top-2/3 transform -translate-y-1/2 h-10 w-10 rounded-full hover:bg-[#1a222f] bg-[#111927] text-white flex items-center justify-center"
                onClick={nextSlide}
            >
                <ChevronRight className="text-gray-400 group-hover:text-white" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-6 sm:w-8 md:w-10 mx-1 ${
                            index === currentIndex
                                ? 'bg-white rounded-xl'
                                : 'bg-black rounded-xl'
                        } transition-all duration-500 ease-in-out`}
                    ></div>
                ))}
            </div>
        </section>
    )
}
