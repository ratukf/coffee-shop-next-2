import Link from 'next/link'
// import { useAtom } from 'jotai';

export default function ButtonAddToCart() {
    return (
        <Link href="/target-page">
            <button type="button" className="btn">
                Go to Target Page
            </button>
        </Link>
    )
}