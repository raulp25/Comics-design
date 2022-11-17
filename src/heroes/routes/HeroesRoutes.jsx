




import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { LoginPage } from "../../auth"
import { Footer, Navbar } from "../../UI"
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../pages"



export const HeroesRoutes = () => {
  const {pathname} = useLocation();

  return (
    <>
  
        
        {
          pathname !== '/login' && <Navbar />
        } 

        <Routes>
          
            <Route path="login" element={<LoginPage />} />
            <Route path="dc" element={<DCPage />} />
            <Route path="hero/:id" element={<HeroPage />} />
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="search" element={<SearchPage />} />

            {/* Search, hero by id */}
            
            <Route path="/" element={<Navigate to="/login" />} />
        </Routes>

        {
          pathname !== '/login' && <Footer/>
        } 

        
        
    </>
  )
}

