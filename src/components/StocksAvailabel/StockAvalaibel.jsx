
function StockAvailable({ingredients}) {

    return (
        <section className='stock-available-section'>
            <h2>Stocul disponibil depozit restaurant 2</h2>
            <ul>
                {Object.entries(ingredients).map(([key, value], idx) => (
                    <li key={idx}>
                        <ul>
                            {Object.entries(value).map(([property, val], i) => (
                                <li key={i}>
                                    Cantitatea ramasa de {property}: {val}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

        </section>
    )
}
export default StockAvailable
