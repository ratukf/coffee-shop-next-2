import { PropsWithChildren } from "react";
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

export default function Layout({children}: PropsWithChildren) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
