const express = require('express');

const router = express.Router();

const PAISES = [
    {
        id: "1",
        país: "Ecuador",
        ciudad: "Guayaquil"

    },
    {
        id: "2",
        país: "Russia",
        ciudad: "Moscow"
    },
    {
        id: "3",
        país: "Colombia",
        ciudad: "Medellín"
    },
    {
        id: "4",
        país: "Estados Unidos",
        ciudad: "Nueva York"
    },
    {
        id: "5",
        país: "Japón",
        ciudad: "Tokio"
    },
    {
        id: "6",
        país: "Francia",
        ciudad: "París"
    },
    {
        id: "7",
        país: "Alemania",
        ciudad: "Berlín"
    },
    {
        id: "8",
        país: "Italia",
        ciudad: "Roma"
    },
    {
        id: "9",
        país: "Australia",
        ciudad: "Sídney"
    },
    {
        id: "10",
        país: "Brasil",
        ciudad: "Río de Janeiro"
    },
    {
        id: "11",
        país: "Canadá",
        ciudad: "Toronto"
    },
    {
        id: "12",
        país: "España",
        ciudad: "Madrid"
    },
    {
        id: "13",
        país: "Reino Unido",
        ciudad: "Londres"
    },
    {
        id: "14",
        país: "China",
        ciudad: "Pekín"
    },
    {
        id: "15",
        país: "India",
        ciudad: "Mumbai"
    },
    {
        id: "16",
        país: "Argentina",
        ciudad: "Buenos Aires"
    },
    {
        id: "17",
        país: "Corea del Sur",
        ciudad: "Seúl"
    },
    {
        id: "18",
        país: "México",
        ciudad: "Ciudad de México"
    },
    {
        id: "19",
        país: "Sudáfrica",
        ciudad: "Ciudad del Cabo"
    },
    {
        id: "20",
        país: "Suiza",
        ciudad: "Zúrich"
    },
    {
        id: "21",
        país: "Portugal",
        ciudad: "Lisboa"
    },
    {
        id: "22",
        país: "Holanda",
        ciudad: "Ámsterdam"
    },
    {
        id: "23",
        país: "Grecia",
        ciudad: "Atenas"
    },
    {
        id: "24",
        país: "Turquía",
        ciudad: "Estambul"
    },
    {
        id: "25",
        país: "Irlanda",
        ciudad: "Dublín"
    },
    {
        id: "26",
        país: "Singapur",
        ciudad: "Singapur"
    }
    
    
];

router.get('/', (req, res, next)=>{
    res.json({paises : PAISES});
});

module.exports = router;

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get(':pid', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    const formattedPaises = JSON.stringify(PAISES, null, 2);
    res.send(formattedPaises);
});