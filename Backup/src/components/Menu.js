import React, { useEffect, useState } from 'react';
import Dishes from './Dishes';
import Filtredish from './Filtredish';
import Hero from './Hero';
import './Style.scss';
import './spiner.scss'


function Menu() {

    let [Menu, setMenu] = useState([])
    let [Cat, setCat] = useState([])
    const [Loading, setLoading] = useState(true)
    const [SingleDish, setSingleDish] = useState([])

    const all = async () => {
        const api_url = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
        let responce = await fetch(api_url)
        let data = await responce.json()
        setMenu(data.meals)
        setLoading(false)

    }
    const category = async () => {
        const api_url = "https://www.themealdb.com/api/json/v1/1/categories.php";
        let responce = await fetch(api_url)
        let data = await responce.json()

        setCat(data.categories)

    }
    const getOnlyOneDish = async () => {
        const api_url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
        let responce = await fetch(api_url)
        let SingleDishData = await responce.json()
        setSingleDish(SingleDishData.meals)
        
    }


    useEffect(() => {
        all()
        category()
        getOnlyOneDish()
    }, [])

    return (
        <div className="hero-container">
            <Hero />
            {!Loading ? <Dishes spMenu={Menu} /> : <div className="loaders">
                <div class="spinner">
                    <div class="loader" />
                </div>
                <h1>  LOADING....</h1></div>}
            {!Loading ? <Filtredish spCat={Cat} allMenu={Menu} SingleDish={SingleDish} setSingleDish={setSingleDish} /> : null}

            


        </div>
    )
}

export default Menu
