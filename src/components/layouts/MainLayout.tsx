import { PropsWithChildren } from 'react'
import Header from 'coffee/components/layouts/Header/index'
import Footer from 'coffee/components/layouts/Footer/Footer'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
