import React, {useState, useEffect} from 'react';
import Title from './Title';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import useForceUpdate from 'use-force-update';
toast.configure()

const Admin = () => {
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState([]);
    const [ad, setAd] = useState({});
    const [adLink, setAdLink] = useState('');
    const [adImage, setAdImage] = useState('');

    async function updateAd(){
        var updateInfo = {}
        if(adImage.length>0 && adLink.length>0)
            updateInfo = JSON.stringify({link: String(adLink), image: String(adImage)})
        else if(adLink.length>0 && adImage.length===0)
            updateInfo = JSON.stringify({link: String(adLink)})
        else
            updateInfo = JSON.stringify({image: String(adImage)})
        const url = "http://localhost:8080/updateAd";
        const options = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
        },
        body: updateInfo
        };
        await fetch(url, options)
            .then(function(response) {
            if(response.status === 400){
                console.log(response.message);
            }
            else if(response.status === 500){
                toast.error("Je potrebné zadať link v tvare https")
            }
            else{
                toast.success("Reklama upravená")
                setAdLink('')
                setAdImage('')
                getAd()
            }
        })
    }

    async function getAd() {
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
    
    async function getData() {
        const url = "http://localhost:8080/admin";
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
            .then(res => setData(res))
            .catch(err => setErrors(err))
    }

    async function payOrder(orderId) {
        const url = "http://localhost:8080/updateOrder";
        const options = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
        },
        body: JSON.stringify({id:orderId})
        };
        await fetch(url, options)
        .then(function(response) {
        if(response.status === 200){
            toast.success("Objednávka zaplatená")
            getData()
        }
        else if(response.status === 400){
            toast.error("Chyba pri spracovaní zaplatenia objednávky")
        }
        else{
            toast.error("Chyba pri spracovaní zaplatenia objednávky") 
        }
    })
    }

    function handleAdLinkChange(event){
        setAdLink(event.target.value);
    }

    function handleAdImageChange(event){
        setAdImage(event.target.value);
    }

    function handleUpdate(){
        updateAd()
    }

    useEffect(() => {
        getData()
        getAd()
    }, []);

    return (
        <div>
            <Title name="Admin"/>

            <div className="container-fluid">
                <Title name="Objednávky"/>
                {data.map(item=>{
                    return (
                        <div  key={item.id} className="bg-secondary rounded w-50 order"> 
                            <div className="container-fluid">
                                <div className="salmon bg-light mb-30" style={{"marginBottom": "10px"}}>Objednávka č.{item.id}</div>
                                <div className="px-10 salmon">Údaje zákazníka : </div>
                                    <p>E-mail : {item.customer.email}</p>
                                    <p>Meno a priezvisko : {item.customer.name} </p>
                                    <p>Adresa : {item.customer.street} {item.customer.number}, {item.customer.postcode}  {item.customer.city}</p>   
                            </div>
                            <div className="container-fluid">
                                <div className="row ">
                                    <div className="col-sm-2">
                                        <p className="salmon">Produkty</p>
                                    </div>
                                    <div className="col-sm-2 text-center">
                                        <p className="salmon">Názov produktu</p>
                                    </div>
                                    <div className="col-sm-1 text-center">
                                        <p className="salmon">Cena</p>
                                    </div>
                                    <div className="col-sm-1 text-center">
                                        <p className="salmon">Kusy</p>
                                    </div>
                                </div>
                            </div>

                            {item.products.map(prod=>{
                                return (
                                    <div key={prod.productId} className="container-fluid">
                                        <div className="row" style={{"marginBottom": "5px"}}>
                                            <div className="col-sm-2">
                                                <img
                                                    src={prod.details.image}
                                                    style={{ width: "5rem", height: "5rem" }}
                                                    className="img-fluid"
                                                    alt="produkt"
                                                />
                                            </div>
                                            <div className="col-sm-2 text-center">
                                                {prod.details.title}
                                            </div>
                                            <div className="col-sm-1 text-center">
                                                {prod.details.price}€
                                            </div>
                                            <div className="col-sm-1 text-center">
                                                {prod.quantity}
                                            </div>
                                        </div>
                                    </div> 
                                ) 
                            })}
                            {item.state ? (
                                <div className="px-10 container-fluid green">Zaplatená</div> 
                                
                            ) :
                            <div className="container-fluid">
                                <div className="red">
                                    Nezaplatená  
                                </div>
                                <button type="button" className="btn btn-success w-30" onClick={()=>payOrder(item.id)}>Zaplatiť</button>
                            </div>
                            
                            }
                        </div>
                    );
                })}
            </div>
            
            <Title name="Zmena reklamy"/>
            <table className="table table-dark table-bordered table-striped w-auto container-fluid text-center">
                <thead>
                <tr>
                    <th>Aktuálny Link</th>
                    <th>Aktuálny Obrázok</th>
                    <th>Počet kliknutí</th>
                    <th>Nový link</th>
                    <th>Nový obrázok</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ad.link}</td>
                        <td>{ad.image}</td>
                        <td>{ad.counter}</td>
                        <td>
                            <input type="text" name="adLink" value={adLink} onChange={handleAdLinkChange}/>
                        </td>
                        <td>
                            <input type="text" name="adImage" value={adImage} onChange={handleAdImageChange}/>
                        </td>
                    </tr>
                </tbody>
            </table>   
            <div className="container-fluid text-center">
                <button type="button" className="btn btn-outline-info mb-3 px-5 mybtn" onClick={()=>handleUpdate()}>Zmeniť</button>        
            </div> 
        </div>
    )
    
}

export default Admin;
