import React, {useEffect,useState } from "react";
import axios from  "axios";
import "./bootstrap.css";
import "./navbar.css"
const Navbar = ()=>{
    const [images,setImages] = useState([]);

const apiKey = "Ss3GXeYV7S3autcfqfx5wtBjByF9HH4Rr9hZSAzTKl0";
const [searchTerm, setSearchTerm] = useState("random");
const [input,setInput] = useState("")
useEffect(()=>{
        axios.get(`https://api.unsplash.com/search/photos?page=1&per_page=30&order_by=popular&query=${searchTerm}&client_id=${apiKey}`)
        .then(response =>{
            const data = response.data.results;
            setImages(data)
        })
        .catch(error=>error)
    
},[searchTerm])
const keyHandler = () => {
    setSearchTerm("")
    setSearchTerm(input);
}
console.log(input)

// const url2 = `http://farm${images.farm}`
    return(
        <div>
            <div id="heading">
                <h1>My Gallary search Photos</h1>
                <div className="container">
                    {/* <button onClick={()=>{keyHandler("mountain")}}>Mountain</button> */}
                    <input type="text" className="form-control" value={input}  onChange={(e)=>{setInput(e.target.value)}}/>
                    <button className="btn btn-primary" onClick={keyHandler} >Search</button>
                </div>
            </div>
            <div id="imageContainer">
                {images.map(item=>{
                    let url2 = item.urls.regular;
                    return(
                        <div>
                           <img src={url2} alt="img" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Navbar;


//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2e71078c7aab1f6736da40a788bd4389&tags=mountain&per_page=50&format=json&nojsoncallback=1