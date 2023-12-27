const products = [
    {
        id: '1' ,
        name: 'Iphone' ,
        price: 1000,
        category: 'celular',
        img: "https://th.bing.com/th/id/OIP.MOcfaj0mdHeSJ6VI-G4FJwHaMK?pid=ImgDet&rs=1",
        stock: 5,
        description: 'Iphone normal con description'
    },
    {
        id: '2' ,
        name: 'Samsung S21',
        price: 2000,
        category: 'celular',
        img: "https://v1.vodafone.it/portal/resources/media/Images/demag/smartphone/samsung-galaxy-s21-ultra-black-729x726-backside.png",
        stock: 10 ,
        description: 'Samsung S21 esto ni idea que es'
    },
    {
        id: '3' ,
        name: 'Ipad 8',
        price: 3000,
        category: 'tablet',
        img: "https://th.bing.com/th/id/R.d4d1d271e8b8739e38ef65ac01dfea9a?rik=QlGjTCSD0pDMRQ&pid=ImgRaw&r=0",
        stock: 15,
        description: 'Ipad 8 buscar la descripción en internet'
    },
    {
        id: '4' ,
        name: 'Motorola G13',
        price: 12500,
        category: 'celular',
        img: "https://th.bing.com/th/id/OIP.VajS5NVupub48Y1ZBGg-OQHaJM?w=126&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        stock: 10,
        description: 'Motorola G13 Un celular con 50mp de cámara 128 de memoria interna y 4 GB de RAM'
    },
    {
        id: '5' ,
        name: 'PC Samsung',
        price: 160000,
        category: 'notebook',
        img: "https://th.bing.com/th/id/OIP.v3cVmr0-AwxPVj4AHCzNXAHaE7?w=257&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        stock: 8,
        description: 'Una pc ideal para gammer y disfrutar en la casa'
    },
    {
        id: '6' ,
        name: 'Tablet PNG',
        price: 23000,
        category: 'tablet',
        img: "https://th.bing.com/th/id/OIP.1W1x7YUlXu-YmxypdNeuVAHaE8?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        stock: 2,
        description: 'Una tablet que te permitirá libertad y conexión'
    },
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}
