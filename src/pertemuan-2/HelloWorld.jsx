export default function HelloWorld(){ //helloworld adalah parent
    const propsUserCard = {   //cara 1 utk menampilkan usercard
        nama: "Ruthiana",
        nim: "2355301186",
        tanggal: "2025-03-11",
        alamat: "Pekanbaru",
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <ArtikelDetail/>
            <QuoteText/>
            <UserCard {...propsUserCard}/> {/* cara 1 utk menampilkan usercard  */} 
            <img src="img/pcr.jpg" alt="PCR"/>
            <UserCard           //cara 2 tk menampilkan usercard
	            nama="Ruthiana"    
	            nim="2355301186"
	            tanggal={new Date().toLocaleDateString()}
	          />
        </div>
    )
}
function GreetingBinjai(){ //child dari helloworld
    return (
        <small>Salam dari Binjai</small>
    )
}

function QuoteText() { //child dari helloworld
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/> {/* buat garis   */}
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function ArtikelDetail() { 
    const artikel = "Pendidikan Karakter Sekolah";
    const artikel2 = "Penjelasan lebih dalam";
    return (
        <div>
            <hr/> {/* buat garis   */}
            <h3>{artikel.toUpperCase()}</h3>
            <p>{artikel2}</p>
            {/* <p>{artikel2.toUpperCase()}</p> */}
        </div>
    )
}

function UserCard(props){   //komponen dengan props
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
            <p>Alamat: {props.alamat}</p>
        </div>
    )
}