import './css/about.scss'
function About() {

    const glassInventory = [
        {id:1,title:'Pahar Apa (Jumbo)',quantity: 19,price:10,category:'Pahare'},
        {id:2,title:'Pahar Latte',quantity: 22,price:12.5,category:'Pahare'},
        {id:3,title:'Carafe Limonada',quantity: 23,price: 13.25,category:'Pahare'},
    ]
    return (
        <section className='inventory-glass-section'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {glassInventory.map((glass) => {
                        return(
                            <tr key={glass.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {glass.title}
                                </th>
                                <td className="px-6 py-4">
                                    {glass.quantity}
                                </td>
                                <td className="px-6 py-4">
                                    {glass.category}
                                </td>
                                <td className="px-6 py-4">
                                    {glass.price} RON
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}


export default About
