import React, {useState, useEffect} from 'react';
import Title from './Title';


const Thanks = () => {
    const [hasError, setErrors] = useState(false);
    const [ad, setAd] = useState({});
    
    async function fetchAd() {
        const url = "http://localhost:8080/ad";
        const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
        }};
        const res = await fetch(url, options);
        res
            .json()
            .then(res => setAd(res))
            .catch(err => setErrors(err))
    }

    async function incCounter(){
        console.log(ad.counter)
        const url = "http://localhost:8080/updateAdCounter";
        const options = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
        }};
        const res = await fetch(url, options);
        res.json()
            .then(res => {
                setAd(res)
                fetchAd()
            })
            .catch(err => setErrors(err))
    }

    useEffect(() => {
        fetchAd();
        global.cart=[]
        global.customer = {}
        global.subtotal = 0
    }, []);

    return (
        <div>
            <Title name="Ďakujeme za objednávku"/>
            <div className="thankyou">
                <img
                    src={ad.image}
                    style={{ width: "300px", height: "300px" }}
                    alt="reklama"
                />
            </div>
            <div className="thankyou">
                <a href={ad.link} target="_blank" onClick={()=>incCounter()}>Link</a>
                <br></br>
                Počet ľudí, ktorí klikli na reklamu: {ad.counter} 
            </div>
        </div>
    ) 
}

export default Thanks;