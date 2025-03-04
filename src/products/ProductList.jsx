import { useEffect, useRef, useState } from "react";
import Product from "./product";

export default function ProductList() {
    let [products, setProducts] = useState([]);
    let [status, setStatus] = useState(true);
    let loaded = useRef(false);

    // Hati-hati jika menggunakan use effect terus didalamnya ada mengubah state
    // hal ini dapat berpotensi terjadinya infinite Loop
    // karena useEffect akan di panggil setelah component selesai di render
    // kemudian di dalam useEffect Ternyata terdapat code untuk mengubah state
    // sehingga seperti yang kita tau bahwa mengubah state akan memicu yang namanya render ulang
    // ketika render ulang terjadi maka useEffect akan di panggil kembali dan begitupun seterusnya
    // useEffect(() => {
    //     console.log("call use effect");
    //     fetch("/product.json")
    //         .then((response) => response.json())
    //         .then((data) => setProducts(data));
    // });


    // Cara yang benar (tanpa depedencies)
    useEffect(() => {
        console.log("call use effect");

        if(loaded.current === false) {
            fetch("/product.json")
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .then(() => loaded.current = true);
        }

        // ini berfungsi sebagai clean up
        // clean-up hanya akan di panggil ketika ada useEffect selanjutnya
        // sebagai contoh ketika component ini di jalankan coba lihat pada console di web 
        // akan menghasilkan:
        /**
         * call use effect
         * clean up berjalan -> nah clean up inii berjalan karena pada saat re-render, kita perlu menggail effect lagi
         * call use effect -> effect berjalan
         * clean up berjalan -> clean up berjalan karena perlu render ulang yang ada memanggil effect selanjutnya
         * call use effect -> effect berjalan
         *  -> kenapa tidak ada clean up ? karena sudah tidak ada effect yang akan berjalan lagi sehingga clean up tidak di jalankan
         */
        // Clean up biasanya di pakai ketika abis useEffect ingin melakukan sesuatu
        return () => {
            console.log("clean up berjalan")
        }
    });

    // kemudinn ada kasus dimana kita tak mau useEffect di jalan ketika dalam kondisi tertentu
    // misal kita tidak mau useEffect di jalankan jika status tidak berubah, bahwa walaupun componentnya di render ulang
    // selama statusnya tidak berubah maka useEffect tidak jalan
    // hal  ini bisa kita lakukan dengan menggunakan depedencies
    useEffect(() => {
        console.log("efek pakai depedencies sedang berjalan")
    }, [status]) // depedencies bisa di bikin menjadi [] jika ingin use effect hanya berjalan sekali walaupun component di render ulang
    
    // nah sekarang coba klik button yang akan mengubah state status dari true menjadi false
    // ketika awal klik useEffect akan berjalan karena state berubah
    // namun ketika kita klik lagi maka use effect tidak berjalan kenapa ? karena state status tidak berubah
    // sebelumnya false ketika di klik lagi state tetap menjadi false artinya nilai state tidak berubah
    // sehingga hal ini menyebabkan useEffect tidak akan berjalan lagi.
    

    const handleStatusClick = () => {
        setStatus(false)
    }


    return (
        <>
            <button onClick={handleStatusClick}>Ubah status</button>
            {products.map((product) => {
                    return <Product name={product.name} quantity={product.quantity} key={product.id} />
                })
            }
        </>
    )
}