import { Add } from "@mui/icons-material";
import { Autocomplete, Button, Grid, IconButton, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
const data = [{
    "id": 1,
    "codigo": "63824-743",
    "nombre": "Carbonated Water - Blackberry",
    "precio": 1287,
    "modificado": "2/17/2022",
    "registrado": "12/27/2021"
}, {
    "id": 2,
    "codigo": "59746-015",
    "nombre": "Shrimp - Prawn",
    "precio": 800,
    "modificado": "8/9/2022",
    "registrado": "12/28/2021"
}, {
    "id": 3,
    "codigo": "43742-0009",
    "nombre": "Cheese - Brie",
    "precio": 1735,
    "modificado": "8/20/2022",
    "registrado": "9/17/2021"
}, {
    "id": 4,
    "codigo": "0573-0187",
    "nombre": "Cream - 35%",
    "precio": 2359,
    "modificado": "12/21/2021",
    "registrado": "10/3/2021"
}, {
    "id": 5,
    "codigo": "10742-8582",
    "nombre": "Longos - Grilled Chicken With",
    "precio": 411,
    "modificado": "6/22/2022",
    "registrado": "6/6/2022"
}, {
    "id": 6,
    "codigo": "46414-2222",
    "nombre": "Bread - Frozen Basket Variety",
    "precio": 1698,
    "modificado": "2/26/2022",
    "registrado": "10/4/2021"
}, {
    "id": 7,
    "codigo": "68599-5306",
    "nombre": "Flour Pastry Super Fine",
    "precio": 2847,
    "modificado": "6/12/2022",
    "registrado": "10/19/2021"
}, {
    "id": 8,
    "codigo": "62175-446",
    "nombre": "Jameson - Irish Whiskey",
    "precio": 2290,
    "modificado": "1/19/2022",
    "registrado": "3/15/2022"
}, {
    "id": 9,
    "codigo": "55154-6236",
    "nombre": "Beer - Maudite",
    "precio": 720,
    "modificado": "6/20/2022",
    "registrado": "1/22/2022"
}, {
    "id": 10,
    "codigo": "65044-1341",
    "nombre": "Tea - Grapefruit Green Tea",
    "precio": 2872,
    "modificado": "12/26/2021",
    "registrado": "12/26/2021"
}, {
    "id": 11,
    "codigo": "68180-180",
    "nombre": "Sambuca - Opal Nera",
    "precio": 1931,
    "modificado": "8/15/2022",
    "registrado": "7/30/2022"
}, {
    "id": 12,
    "codigo": "16110-259",
    "nombre": "Syrup - Monin, Irish Cream",
    "precio": 717,
    "modificado": "6/1/2022",
    "registrado": "5/24/2022"
}, {
    "id": 13,
    "codigo": "65044-2317",
    "nombre": "Dikon",
    "precio": 1112,
    "modificado": "11/18/2021",
    "registrado": "3/16/2022"
}, {
    "id": 14,
    "codigo": "41250-416",
    "nombre": "Lettuce - Boston Bib - Organic",
    "precio": 1152,
    "modificado": "8/16/2022",
    "registrado": "5/17/2022"
}, {
    "id": 15,
    "codigo": "49738-140",
    "nombre": "Crab - Meat",
    "precio": 1655,
    "modificado": "3/4/2022",
    "registrado": "12/13/2021"
}, {
    "id": 16,
    "codigo": "64768-2920",
    "nombre": "Lid Coffeecup 12oz D9542b",
    "precio": 1930,
    "modificado": "5/7/2022",
    "registrado": "8/26/2021"
}, {
    "id": 17,
    "codigo": "52389-126",
    "nombre": "Chocolate - Unsweetened",
    "precio": 1205,
    "modificado": "1/7/2022",
    "registrado": "8/29/2021"
}, {
    "id": 18,
    "codigo": "11410-413",
    "nombre": "Cheese - Valancey",
    "precio": 1128,
    "modificado": "12/29/2021",
    "registrado": "7/6/2022"
}, {
    "id": 19,
    "codigo": "54633-101",
    "nombre": "Ice Cream Bar - Rolo Cone",
    "precio": 2924,
    "modificado": "9/24/2021",
    "registrado": "11/27/2021"
}, {
    "id": 20,
    "codigo": "0093-7147",
    "nombre": "Sugar - Individual Portions",
    "precio": 2626,
    "modificado": "9/29/2021",
    "registrado": "6/17/2022"
}, {
    "id": 21,
    "codigo": "17478-064",
    "nombre": "Mussels - Cultivated",
    "precio": 1065,
    "modificado": "2/2/2022",
    "registrado": "9/6/2021"
}, {
    "id": 22,
    "codigo": "43419-035",
    "nombre": "Sauce - Bernaise, Mix",
    "precio": 1966,
    "modificado": "10/31/2021",
    "registrado": "9/25/2021"
}, {
    "id": 23,
    "codigo": "50563-138",
    "nombre": "Cheese - Marble",
    "precio": 1540,
    "modificado": "10/21/2021",
    "registrado": "5/18/2022"
}, {
    "id": 24,
    "codigo": "0904-5657",
    "nombre": "Bread - Multigrain",
    "precio": 2144,
    "modificado": "2/4/2022",
    "registrado": "6/9/2022"
}, {
    "id": 25,
    "codigo": "43419-509",
    "nombre": "Coffee - Almond Amaretto",
    "precio": 2760,
    "modificado": "7/1/2022",
    "registrado": "1/17/2022"
}, {
    "id": 26,
    "codigo": "0430-0570",
    "nombre": "Fuji Apples",
    "precio": 1317,
    "modificado": "4/3/2022",
    "registrado": "8/27/2021"
}, {
    "id": 27,
    "codigo": "42254-129",
    "nombre": "Pasta - Detalini, White, Fresh",
    "precio": 1110,
    "modificado": "5/15/2022",
    "registrado": "5/20/2022"
}, {
    "id": 28,
    "codigo": "36987-2879",
    "nombre": "Gelatine Leaves - Bulk",
    "precio": 408,
    "modificado": "10/11/2021",
    "registrado": "7/14/2022"
}, {
    "id": 29,
    "codigo": "35356-849",
    "nombre": "Coconut - Shredded, Unsweet",
    "precio": 811,
    "modificado": "9/30/2021",
    "registrado": "9/19/2021"
}, {
    "id": 30,
    "codigo": "66621-1005",
    "nombre": "Rabbit - Whole",
    "precio": 453,
    "modificado": "3/15/2022",
    "registrado": "3/2/2022"
}, {
    "id": 31,
    "codigo": "0143-9717",
    "nombre": "Cheese - Bakers Cream Cheese",
    "precio": 2744,
    "modificado": "5/8/2022",
    "registrado": "8/22/2021"
}, {
    "id": 32,
    "codigo": "61657-0952",
    "nombre": "Radish - Pickled",
    "precio": 1543,
    "modificado": "11/12/2021",
    "registrado": "6/26/2022"
}, {
    "id": 33,
    "codigo": "0904-6200",
    "nombre": "Cake - Lemon Chiffon",
    "precio": 1683,
    "modificado": "7/24/2022",
    "registrado": "3/5/2022"
}, {
    "id": 34,
    "codigo": "63187-181",
    "nombre": "Wine - Harrow Estates, Vidal",
    "precio": 2620,
    "modificado": "10/17/2021",
    "registrado": "1/1/2022"
}, {
    "id": 35,
    "codigo": "58668-2281",
    "nombre": "Lamb - Shoulder",
    "precio": 2942,
    "modificado": "2/12/2022",
    "registrado": "2/27/2022"
}, {
    "id": 36,
    "codigo": "63629-4304",
    "nombre": "Cattail Hearts",
    "precio": 2080,
    "modificado": "10/31/2021",
    "registrado": "3/12/2022"
}, {
    "id": 37,
    "codigo": "59088-856",
    "nombre": "Tarts Assorted",
    "precio": 2124,
    "modificado": "6/12/2022",
    "registrado": "7/10/2022"
}, {
    "id": 38,
    "codigo": "49288-0266",
    "nombre": "Beef - Rouladin, Sliced",
    "precio": 223,
    "modificado": "2/16/2022",
    "registrado": "6/26/2022"
}, {
    "id": 39,
    "codigo": "24385-403",
    "nombre": "Lettuce - Boston Bib",
    "precio": 543,
    "modificado": "12/11/2021",
    "registrado": "7/22/2022"
}, {
    "id": 40,
    "codigo": "61957-0202",
    "nombre": "Nescafe - Frothy French Vanilla",
    "precio": 777,
    "modificado": "10/29/2021",
    "registrado": "12/14/2021"
}, {
    "id": 41,
    "codigo": "16590-436",
    "nombre": "Mcgillicuddy Vanilla Schnap",
    "precio": 610,
    "modificado": "9/28/2021",
    "registrado": "2/8/2022"
}, {
    "id": 42,
    "codigo": "49349-055",
    "nombre": "Mushroom - White Button",
    "precio": 851,
    "modificado": "8/28/2021",
    "registrado": "8/21/2021"
}, {
    "id": 43,
    "codigo": "57520-0090",
    "nombre": "Cotton Wet Mop 16 Oz",
    "precio": 2205,
    "modificado": "12/3/2021",
    "registrado": "6/15/2022"
}, {
    "id": 44,
    "codigo": "56062-416",
    "nombre": "Sauce - Vodka Blush",
    "precio": 1112,
    "modificado": "9/25/2021",
    "registrado": "11/24/2021"
}, {
    "id": 45,
    "codigo": "67015-1100",
    "nombre": "Initation Crab Meat",
    "precio": 1486,
    "modificado": "7/23/2022",
    "registrado": "10/28/2021"
}, {
    "id": 46,
    "codigo": "55111-646",
    "nombre": "Beef - Ox Tail, Frozen",
    "precio": 1622,
    "modificado": "6/11/2022",
    "registrado": "11/9/2021"
}, {
    "id": 47,
    "codigo": "65111-005",
    "nombre": "Nut - Walnut, Chopped",
    "precio": 29,
    "modificado": "10/22/2021",
    "registrado": "11/19/2021"
}, {
    "id": 48,
    "codigo": "75997-024",
    "nombre": "Lemons",
    "precio": 162,
    "modificado": "1/2/2022",
    "registrado": "6/26/2022"
}, {
    "id": 49,
    "codigo": "76237-218",
    "nombre": "Beer - Labatt Blue",
    "precio": 481,
    "modificado": "6/19/2022",
    "registrado": "3/27/2022"
}, {
    "id": 50,
    "codigo": "10096-0868",
    "nombre": "Compound - Mocha",
    "precio": 1855,
    "modificado": "1/9/2022",
    "registrado": "8/6/2022"
}, {
    "id": 51,
    "codigo": "25021-669",
    "nombre": "Octopus",
    "precio": 2549,
    "modificado": "11/25/2021",
    "registrado": "2/6/2022"
}, {
    "id": 52,
    "codigo": "67147-221",
    "nombre": "Juice - Cranberry 284ml",
    "precio": 1641,
    "modificado": "11/20/2021",
    "registrado": "11/1/2021"
}, {
    "id": 53,
    "codigo": "54868-0192",
    "nombre": "Bread - Pita",
    "precio": 89,
    "modificado": "1/1/2022",
    "registrado": "8/1/2022"
}, {
    "id": 54,
    "codigo": "62007-011",
    "nombre": "Muffin Mix - Banana Nut",
    "precio": 2145,
    "modificado": "1/9/2022",
    "registrado": "9/19/2021"
}, {
    "id": 55,
    "codigo": "0406-8096",
    "nombre": "Parsley Italian - Fresh",
    "precio": 1895,
    "modificado": "10/31/2021",
    "registrado": "6/19/2022"
}, {
    "id": 56,
    "codigo": "76237-257",
    "nombre": "Kahlua",
    "precio": 136,
    "modificado": "11/22/2021",
    "registrado": "7/2/2022"
}, {
    "id": 57,
    "codigo": "63323-379",
    "nombre": "Compound - Rum",
    "precio": 2493,
    "modificado": "4/7/2022",
    "registrado": "4/9/2022"
}, {
    "id": 58,
    "codigo": "54473-222",
    "nombre": "Chinese Foods - Chicken Wing",
    "precio": 2380,
    "modificado": "1/30/2022",
    "registrado": "11/11/2021"
}, {
    "id": 59,
    "codigo": "55301-281",
    "nombre": "Vol Au Vents",
    "precio": 371,
    "modificado": "9/12/2021",
    "registrado": "12/11/2021"
}, {
    "id": 60,
    "codigo": "37000-807",
    "nombre": "Carbonated Water - Strawberry",
    "precio": 1318,
    "modificado": "7/27/2022",
    "registrado": "5/9/2022"
}, {
    "id": 61,
    "codigo": "52862-013",
    "nombre": "Sole - Iqf",
    "precio": 1380,
    "modificado": "2/10/2022",
    "registrado": "5/30/2022"
}, {
    "id": 62,
    "codigo": "54868-2463",
    "nombre": "Pastry - Raisin Muffin - Mini",
    "precio": 467,
    "modificado": "3/2/2022",
    "registrado": "2/27/2022"
}, {
    "id": 63,
    "codigo": "44567-331",
    "nombre": "Table Cloth 54x54 Colour",
    "precio": 1957,
    "modificado": "1/17/2022",
    "registrado": "10/27/2021"
}, {
    "id": 64,
    "codigo": "51655-414",
    "nombre": "Sauce - Vodka Blush",
    "precio": 268,
    "modificado": "5/12/2022",
    "registrado": "9/27/2021"
}, {
    "id": 65,
    "codigo": "52125-434",
    "nombre": "Molasses - Fancy",
    "precio": 378,
    "modificado": "3/13/2022",
    "registrado": "7/10/2022"
}, {
    "id": 66,
    "codigo": "10191-1250",
    "nombre": "Monkfish Fresh - Skin Off",
    "precio": 2525,
    "modificado": "3/23/2022",
    "registrado": "3/25/2022"
}, {
    "id": 67,
    "codigo": "68180-114",
    "nombre": "Wine - German Riesling",
    "precio": 859,
    "modificado": "8/24/2021",
    "registrado": "11/30/2021"
}, {
    "id": 68,
    "codigo": "10812-914",
    "nombre": "Veal - Inside, Choice",
    "precio": 2413,
    "modificado": "1/25/2022",
    "registrado": "5/12/2022"
}, {
    "id": 69,
    "codigo": "30805-009",
    "nombre": "Milk - Homo",
    "precio": 2154,
    "modificado": "3/13/2022",
    "registrado": "8/17/2022"
}, {
    "id": 70,
    "codigo": "68788-9204",
    "nombre": "Arizona - Plum Green Tea",
    "precio": 1377,
    "modificado": "3/8/2022",
    "registrado": "12/13/2021"
}, {
    "id": 71,
    "codigo": "42507-463",
    "nombre": "Crab - Meat",
    "precio": 1051,
    "modificado": "1/10/2022",
    "registrado": "7/5/2022"
}, {
    "id": 72,
    "codigo": "0023-1145",
    "nombre": "Tea - Jasmin Green",
    "precio": 1692,
    "modificado": "12/22/2021",
    "registrado": "3/29/2022"
}, {
    "id": 73,
    "codigo": "0363-0214",
    "nombre": "Pickles - Gherkins",
    "precio": 447,
    "modificado": "9/21/2021",
    "registrado": "3/5/2022"
}, {
    "id": 74,
    "codigo": "60793-526",
    "nombre": "Beans - Fine",
    "precio": 1057,
    "modificado": "5/4/2022",
    "registrado": "1/16/2022"
}, {
    "id": 75,
    "codigo": "21695-058",
    "nombre": "Lettuce - Frisee",
    "precio": 2402,
    "modificado": "3/2/2022",
    "registrado": "5/1/2022"
}, {
    "id": 76,
    "codigo": "76282-213",
    "nombre": "Wine - Two Oceans Cabernet",
    "precio": 1203,
    "modificado": "10/10/2021",
    "registrado": "11/1/2021"
}, {
    "id": 77,
    "codigo": "35356-955",
    "nombre": "Wine - Pinot Noir Pond Haddock",
    "precio": 570,
    "modificado": "6/27/2022",
    "registrado": "6/16/2022"
}, {
    "id": 78,
    "codigo": "55714-2329",
    "nombre": "Sauce - Hp",
    "precio": 200,
    "modificado": "11/4/2021",
    "registrado": "1/17/2022"
}, {
    "id": 79,
    "codigo": "51346-235",
    "nombre": "Pepper - Red Chili",
    "precio": 2446,
    "modificado": "5/5/2022",
    "registrado": "8/9/2022"
}, {
    "id": 80,
    "codigo": "63187-070",
    "nombre": "Parsley - Dried",
    "precio": 1115,
    "modificado": "7/15/2022",
    "registrado": "10/13/2021"
}, {
    "id": 81,
    "codigo": "50436-3897",
    "nombre": "Nantucket - Carrot Orange",
    "precio": 714,
    "modificado": "6/13/2022",
    "registrado": "2/4/2022"
}, {
    "id": 82,
    "codigo": "63629-5284",
    "nombre": "Bread - Bistro Sour",
    "precio": 2690,
    "modificado": "11/17/2021",
    "registrado": "4/13/2022"
}, {
    "id": 83,
    "codigo": "60505-0266",
    "nombre": "Jam - Strawberry, 20 Ml Jar",
    "precio": 2439,
    "modificado": "10/25/2021",
    "registrado": "3/21/2022"
}, {
    "id": 84,
    "codigo": "0006-9275",
    "nombre": "Wine - Vidal Icewine Magnotta",
    "precio": 1270,
    "modificado": "4/24/2022",
    "registrado": "4/18/2022"
}, {
    "id": 85,
    "codigo": "49884-205",
    "nombre": "Roe - Flying Fish",
    "precio": 1336,
    "modificado": "6/7/2022",
    "registrado": "10/11/2021"
}, {
    "id": 86,
    "codigo": "63354-921",
    "nombre": "Pastry - Cheese Baked Scones",
    "precio": 1913,
    "modificado": "8/17/2022",
    "registrado": "10/14/2021"
}, {
    "id": 87,
    "codigo": "63629-3213",
    "nombre": "Ocean Spray - Ruby Red",
    "precio": 734,
    "modificado": "12/13/2021",
    "registrado": "12/22/2021"
}, {
    "id": 88,
    "codigo": "0113-2365",
    "nombre": "Nut - Macadamia",
    "precio": 1707,
    "modificado": "3/16/2022",
    "registrado": "7/3/2022"
}, {
    "id": 89,
    "codigo": "62011-0077",
    "nombre": "Sausage - Chorizo",
    "precio": 1969,
    "modificado": "12/3/2021",
    "registrado": "1/28/2022"
}, {
    "id": 90,
    "codigo": "21695-644",
    "nombre": "Beans - Kidney White",
    "precio": 1816,
    "modificado": "10/13/2021",
    "registrado": "2/23/2022"
}, {
    "id": 91,
    "codigo": "63323-025",
    "nombre": "Sauce - Rosee",
    "precio": 833,
    "modificado": "6/22/2022",
    "registrado": "6/26/2022"
}, {
    "id": 92,
    "codigo": "57955-6021",
    "nombre": "Wine - Cotes Du Rhone Parallele",
    "precio": 2857,
    "modificado": "10/16/2021",
    "registrado": "6/16/2022"
}, {
    "id": 93,
    "codigo": "58895-2001",
    "nombre": "Piping - Bags Quizna",
    "precio": 877,
    "modificado": "9/15/2021",
    "registrado": "1/23/2022"
}, {
    "id": 94,
    "codigo": "13537-999",
    "nombre": "Blueberries",
    "precio": 2175,
    "modificado": "9/19/2021",
    "registrado": "3/8/2022"
}, {
    "id": 95,
    "codigo": "67405-575",
    "nombre": "Cup Translucent 9 Oz",
    "precio": 2940,
    "modificado": "3/25/2022",
    "registrado": "4/21/2022"
}, {
    "id": 96,
    "codigo": "44911-0118",
    "nombre": "Rabbit - Frozen",
    "precio": 511,
    "modificado": "2/21/2022",
    "registrado": "10/11/2021"
}, {
    "id": 97,
    "codigo": "55714-2346",
    "nombre": "Apple - Royal Gala",
    "precio": 2547,
    "modificado": "10/2/2021",
    "registrado": "10/8/2021"
}, {
    "id": 98,
    "codigo": "43353-860",
    "nombre": "Cookies - Oreo, 4 Pack",
    "precio": 2504,
    "modificado": "9/14/2021",
    "registrado": "12/31/2021"
}, {
    "id": 99,
    "codigo": "16714-365",
    "nombre": "Sobe - Orange Carrot",
    "precio": 1137,
    "modificado": "10/17/2021",
    "registrado": "8/17/2022"
}, {
    "id": 100,
    "codigo": "63323-493",
    "nombre": "Bar Special K",
    "precio": 1305,
    "modificado": "2/22/2022",
    "registrado": "5/3/2022"
}]
const ListMenu = () => {
    const [rows, setRows] = useState([]);
    const columns = [
        {
            field: 'id',
            headerName: '#',
            type: 'number',
            width: 80,
        },
        {
            field: 'codigo',
            headerName: 'Codigo',
            type: 'string',
            width: 100,
        },
        {
            field: 'nombre',
            headerName: 'Nombre',
            type: 'string',
            width: 300,
        },
        {
            field: 'precio',
            headerName: 'Precio',
            type: 'number',
            width: 100,
        },
        {
            field: 'modificado',
            headerName: 'Ultima modificacion',
            type: 'string',
            width: 150,
        },
        {
            field: 'registrado',
            headerName: 'Registrado',
            type: 'string',
            width: 150,
        },
    ]
    useEffect(() => {
        setRows(
            data.map((item) => {
                return { ...item, id: item.codigo };
            })
        );
    }, []);

    return (<>
        <div
            style={{
                padding: 25,
            }}
        >
            <Grid container spacing={2} >
                <Grid container spacing={2} >
                    <Grid item xs={6} >
                        <Stack spacing={2} sx={{ width: 300 }}>
                            <Autocomplete
                                id="buscar"
                                freeSolo
                                // options={top100Films.map((option) => option.title)}
                                renderInput={(params) => <TextField {...params} label="Buscar" />}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={6} >
                        <Button variant="contained" color="primary" aria-label="add to shopping cart">
                            <Add />
                            Crear nuevo producto
                        </Button>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    style={{
                        height: '70vh',
                    }}
                >
                    <DataGrid autoHeight={false} rows={rows} columns={columns} />
                </Grid>
            </Grid>
        </div>
    </>);
}

export default ListMenu;