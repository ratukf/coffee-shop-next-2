export default function AboutView() {
    return (
        <>
            <section
                className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center text-white p-8"
                style={{
                    backgroundImage: `url('/images/about-coffeeshop.jpg')`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="z-10">
                    <h1 className="text-6xl font-black mb-4 text-white">
                        Coffee Monster
                    </h1>
                    <p className="text-xl font-bold mb-6 text-white">
                        Experience the freshness of coffee daily at CoffeeKing
                    </p>
                    <p className="text-lg max-w-2xl  text-white">
                        Every day, we serve freshly roasted, select coffee beans
                        to provide you with a true coffee experience. Enjoy the
                        rich aroma and authentic taste of every cup, accompanied
                        by a cozy and relaxing atmosphere.
                    </p>
                </div>
            </section>
        </>
    )
}
