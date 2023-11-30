import './css/home.scss'
import {Footer, Modal, ProductList, StockAvalaibel} from "../components/index.js";
import {  useSelector } from 'react-redux'
export default function Home() {
    const {products,modal,ingredients} = useSelector((state) => state.products)

    return (
        <>
            {modal ? (
                <Modal modal={modal} />
            ) : (

                <main className='main-section'>
                    <h1>Evidenta a stocurilor Amfiteatru Transilvania</h1>
                    <section className='main-section-wrapper'>
                        <ProductList products={products}/>
                        <StockAvalaibel ingredients={[ingredients]} />
                    </section>
                    <Footer />
                </main>
            )}
        </>    )
}
