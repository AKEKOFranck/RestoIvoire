import '../styles/Second.css'

function Second() {

    const products = [
        {id: 1, name: "Entrées",  prices: [4327, 3568, 4892, 3124, 4015, 3789, 4951, 3246], items: ["Bruschetta", "Tartare de saumon", "Samossas", "Carpaccio de bœuf", "Nem vietnamien", "pita", "Calamars frits", "Soupe à l'oignon gratinée"]},
        {id: 2, name: "Plats",  prices: [5432, 2876, 6215, 1983, 4892, 7034, 2567, 6789],  items: ["Poulet braisé", "poisson grillé", "foutou igname", "Kedjenou de pintade", "sauce feuille", "Riz gras", "Poisson braisé avec alloco", "Mafé ivoirien"]},
    ];

    const foods = [
        {id: 3, name: "Boissons",  prices: [3245, 1876, 3987, 2456, 3567, 1234, 2876, 3765],  items: ["Bissap", "Gnamakoudji", "Bandji", "Dégué", "Cocktail coco-passion", "Limonade gingembre", "Bouye", "Dolo"]},
        {id: 4, name: "Desserts",  prices: [5432, 3765, 4876, 3245, 5987, 4321, 3567, 5123],  items: ["Gâteau à la noix de coco", "Yaourt sucré à la mangue", "Pain de singe", "Glace coco", "Fruits frais", "Beignets de banane", "Pâte d'arachide sucrée", "Banane plantin grillée au miel"]}
    ]



    return(
        <div className='second_main'>
            <div className='second_box'>
        {products.map(product => (
    <div className='second_content' key={product.id}>
        <h2>{product.name}</h2>
        <ul>
            {product.items.map((item, index) => (
                <li className='second_text' key={index}>
                    {/* Affiche le prix correspondant comme index avant l'item */}
                    <span className="price">{product.prices[index]} FCFA - </span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
))}
            </div>

             <div className='second_box'>
        {foods.map(product => (
    <div className='second_content' key={product.id}>
        <h2>{product.name}</h2>
        <ul>
            {product.items.map((item, index) => (
                <li className='second_text' key={index}>
                    {/* Affiche le prix correspondant comme index avant l'item */}
                    <span className="price">{product.prices[index]} FCFA - </span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
))}
            </div>
        </div>
    )
}

export default Second;