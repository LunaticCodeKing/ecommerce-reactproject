import React from "react";
import "../styling/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

          <div className = "home__row">
                   <Product 
                        id = "12345678"
                        title="Iphone 12 Pro Max | 6.7 inch |
                        120hz pro-motion display | 128GB | SpaceGray" 
                        price={1059}
                        image='https://www.techgenyz.com/wp-content/uploads/2020/06/tgnz-iphone-12-pro-max.png'
                        rating={5} 
                    />
                   <Product 
                        id = "666666"
                        title="Apple AirPods with Wireless Charging Case" 
                        price={649} 
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM1iphDsoAh7Se2uIFoNajR0v86H2DJMygCw&usqp=CAU' 
                        rating={4} 
                   />
               </div>

               <div className = "home__row">
                   <Product
                        id = "5748494"
                        title="OnePlus 8 (Onyx Black 12GB RAM+256GB Storage)" 
                        price={700} 
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDp8-nv9Ugv74iS7NPePovxyoASw4XRUIP4A&usqp=CAU'
                        rating={3} 
                   />
                   <Product 
                        id = "3457984"
                        title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)" 
                        price={120} 
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHQ1bLZtxctGnms2m7uvYDIbhsRnTyUmqvAg&usqp=CAU' 
                        rating={4} 
                    />
                   <Product 
                        id = "9876544"
                        title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey" 
                        price={2100} 
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYac6Xm5nG4Qm_B-HUnpfgBjZlJNK2v0bg4Q&usqp=CAU'
                        rating={4} 
                    />
                </div> 

               <div className = "home__row">
                   <Product
                     id = "5739745"
                     title="Sony Bravia 138.8 cm (55 inches) 4K Ultra HD Smart LED TV KD-55X7002G (Black)"
                     price={1059}
                     image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0HKwFdbAH8rtxSCFi7b2BLMJePNMkQs9E9g&usqp=CAU'
                     rating={5}
                   />
               </div>  
        </div>
    </div>
  );
}

export default Home;
