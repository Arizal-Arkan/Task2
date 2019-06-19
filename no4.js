let DataBuku = [
    {
        Name : 'Learn HTML',
        Genre : 'Education',
        Release : 2015,
        Available : true
    },
    {
        Name : 'My Heart',
        Genre : 'Novel',
        Release : 2010,
        Available : false
    },
    {
        Name : 'Bakuman',
        Genre : 'Comic',
        Release : 2017,
        Available : true
    },
    {
        Name : 'Spider-Man Secret War',
        Genre : 'Comic',
        Release : 2017,
        Available : true
    },
    {
        Name : 'Learn Android',
        Genre : 'Education',
        Release : 2012,
        Available : false
    },
    {
        Name : 'Angel Beast',
        Genre : 'Novel',
        Release : 2012,
        Available : true
    },
]

function CariBuku(cari){
    return DataBuku.find(proses => proses.Name = cari).Available
}

function Tersedia(){
    let ada = []
    for(x = 0; x < DataBuku.length; x++){
        if(DataBuku[x].Available ===true){
            ada.push(DataBuku[x])
        }
    }
    ada.map(i => i)
    console.log(ada)
}

console.log("Hasil :" + CariBuku('Angel Beast'))
Tersedia()