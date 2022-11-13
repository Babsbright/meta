import React, {useState, useEffect}from "react";
import pictures from '../components/pictures.js'


function Adventure() {
    const [data, setData] = useState([]);
    const getData = () => {
console.log(pictures.picture)
        setData(pictures)

    }
    useEffect(() => {
        getData()
    }, [])


  return (
    <div>


            {data.map((item) => {
                console.log(item.picture)
                return (


                    <div key={item.id} className="card-group " data-aos-anchor-easing='ease-in-out'>

                        <div className="card m-3 mt-3 mb-5" data-aos="fade-up" data-aos-duration='1400'>
                            <img data-aos="fade-up" data-aos-duration='1500' src={item.picture} className="card-img-top" alt="grant type" />
                            <div className="card-body">
    

                            </div>
                        </div>
                    </div>

                )
            })}
    </div>
  );
}

export default Adventure;
