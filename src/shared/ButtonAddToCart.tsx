import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { loggedInUserAtom } from 'coffee/store/AuthAtom';


export default function ButtonAddToCart() {
    const [isLoggedIn] = useAtom(loggedInUserAtom);
    const router = useRouter();

    const buttonHandle = () => {
        if (!isLoggedIn) {
            alert('You must be logged in first to add product to cart')
            router.push('/login')
            return;
        }
        alert('Product telah ditambah ke cart')
    }

    return (
        <button type="button" className="px-2 py-1 bg-calm-brown text-white rounded" onClick={buttonHandle}>
            Add to cart
        </button>
    )
}