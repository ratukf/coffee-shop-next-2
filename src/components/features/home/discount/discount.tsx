import React from 'react';
import Image from 'next/image';

import imageCoffee from 'coffee/images/menu-mocha.png';

export default function Discount() {
    return (
        <>

            <section 
                className="p-10 flex gap-10"
                style={{ backgroundImage: `url('images/home-indonesia.png')`}}
            >
                <div>
                    <h1
                        className='text-6xl font-black'
                        style={{
                            background: 'linear-gradient(90deg, #000000 0%, #B10808 6%, #F8EFFD 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '5px 5px #242424',
                        }}
                    >PROMO ULANG TAHUN INDONESIA</h1>
                    <h3 className="text-2xl font-black">Berlaku dari tanggal 17 Agustus 2024 - 20 Agustus 2024</h3>
                    <p>*selama persediaan masih ada</p>
                </div>
                <div>
                        <Image
                            src={imageCoffee}
                            alt="Coffee Mocha"
                            width={500}
                            height={500}
                        />
                        <h1 className="font-bold text-2xl">1 Cup Mocha</h1>
                        <div className="flex">
                            <s className='mr-5'>Rp. 35k</s>
                            <h1 className="text-4xl font-bold">Rp. 25k</h1>
                        </div>
                </div>
            </section>
        </>
    );
}
