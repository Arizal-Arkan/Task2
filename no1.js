let pegawai =[
	{
        id:1,
        name : 'Tatas',
		company: 'Arkademy',
		job: 'Trainer',
		status: 'single',
		city: 'Jogja'
	},
	{
        id:2,
		name: 'Pratam',
		company: 'Emago',
		job: 'Trainer',
		status: 'single',
		city: 'Jakarta'
	}
]
let update = pegawai.map(ganti => {return{...ganti}});

update.find(ganti => ganti.id == 1).status = 'marry';
update.find(ganti => ganti.id == 1).city = 'jakarta';
update.find(ganti => ganti.id == 2).company = 'Arkademy';
update.find(ganti => ganti.id == 2).city = 'jogja';

console.log(update)
