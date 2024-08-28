import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import {Button, ButtonGroup} from "@nextui-org/button";

export default function Footer() {
    return(
        <footer className="bg-calm-brown p-14 flex md:flex-row sm:flex-col justify-between">
              <div>
                <h1 className='text-4xl font-black mb-4'>CoffeeKing</h1>
                <p className='mb-4'>
                Experience the freshness of coffee daily at CoffeeKing 
                </p>

                <div className="iconFooter flex text-4xl mb-4">
                    <Link href="/"><FaFacebook className='text-calm-black mr-4'/></Link>
                    <Link href="/"><FaInstagram className='text-calm-black mr-4'/></Link>
                    <Link href="/"><FaTiktok className='text-calm-black mr-4'/></Link>
                </div>
            </div>
            <div>
                <p className='text-2xl font-black mb-4'>Subscribe to our newsletter</p>
                <p className='mb-4'>Dapatkan informasi terbaru mengenai promo, diskon, dan product terbaru dari CoffeeKing</p>
                <input placeholder='Enter your email' className="p-2 rounded-xl mb-4" />
                <div>
                    <Button className='bg-calm-black text-white mb-4'>Submit</Button>
                </div>
                 
            </div>
        </footer>
    )
}