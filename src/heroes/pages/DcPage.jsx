





import { useEffect } from "react"
import { HeroList } from "../components"



export const DCPage = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'auto'});
  }, []);
  
  
  return (
    <>
        <div className="container">
              {/* <h1  className="">DC Comics</h1> */}
        </div>
        <div className='unorder_list-container'>
              <HeroList  publisher={'DC Comics'} />
        </div>
    </>
  )
}
