






import { useEffect } from "react"
import { HeroList } from "../components"

export const MarvelPage = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }, []);
  return (
    <>
    
    {/* <div className="container mt-5 pt-5"> */}

      {/* <h1 className="text-white mt-5">Marvel Page</h1> */}
    {/* </div> */}

    {/* <h1  className="text-white mt-5">Marvel</h1> */}

    <div className='unorder_list-container'>
       <HeroList  publisher={'Marvel Comics'} />
    </div>
    
    </>
  )
}
