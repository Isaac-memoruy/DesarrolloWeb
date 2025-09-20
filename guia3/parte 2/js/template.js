const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    {
        titulo: "Laptop",
        desc: "16GB RAM, 512GB SSD",
        price: "$1,200,000",
        image: "https://th.bing.com/th/id/R.a243c72be94e93f1399f3399b06c7677?rik=hrhQ9%2b%2fJ1SSPHA&riu=http%3a%2f%2fwww.riskmanagementmonitor.com%2fwp-content%2fuploads%2f2014%2f12%2fLaptop1.jpg&ehk=OfidPRNnM1a1JERcjUs9J725LwV1tT7YdUTEmeAi5Gw%3d&risl=1&pid=ImgRaw&r=0"
    },
    {
        titulo: "Mouse",
        desc: "Inalámbrico, RGB",
        price: "$70,000",
        image: "https://th.bing.com/th/id/R.aaea1d133db20ff71618210d08a1a9da?rik=idWasde6b%2biqHw&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2017%2f01%2fMouse-HD.jpg&ehk=BPgZqOuWUfktgETfOcddfymeydQv6BFUztyunsk5AW0%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        titulo: "Teclado",
        desc: "Mecánico, Retroiluminado",
        price: "$300,000",
        image: "https://mike.miracomosehace.com/uploads/images/content/image_1589082922.jpg"
    },
    {
        titulo: "Monitor",
        desc: "24 pulgadas, Full HD",
        price: "$250,000",
        image: "https://m.media-amazon.com/images/I/81H9p23xquS._AC_SL1500_.jpg"
    },
    {
        titulo: "Auriculares",
        desc: "Bluetooth, AirPods",
        price: "$90,000",
        image: "https://m.media-amazon.com/images/I/71Zmh1Le7NL._AC_SL1500_.jpg"
    }
];

productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = producto.titulo;
    clon.querySelector(".desc").textContent = producto.desc;
    clon.querySelector(".price").textContent = producto.price;
    clon.querySelector(".image").src = producto.image;
    clon.querySelector(".image").alt = producto.titulo;

    contenedor.appendChild(clon);
});

