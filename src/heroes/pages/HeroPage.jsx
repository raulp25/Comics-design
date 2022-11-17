import { useEffect,  useMemo  } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';



export const HeroPage = () => {
  const navigate = useNavigate();
  const onNavigateBack = () => navigate( -1 );
  
  const params = useParams();
  
  const { id } = params;
  
  const hero = useMemo( () => getHeroById( id ), [ id ] );

  useEffect(() => {
    
    document.body.style.backgroundImage = `url('../images/${id}.png')`
    window.scrollTo({top: 0, left: 0, behavior: 'auto'});
    
  }, [])
  
  if ( !hero ) {

    return <Navigate to="/search" />

  }
  const { superhero, alter_ego, publisher, first_appearance,characters } = hero;

  return (
    <>
      <div className="hero_page">
            <div className="hero_page-container">
            <h2  className="hero_page-title stroke-text">{superhero}</h2>
                <div className="hero_page-img">

                  <div className="div_img">
                    <img 
                      src={ `../images/${ id }.jpg`} 
                      alt={ superhero }
                      className="img_thumbnail animate__animated animate__pulse" 
                    />
                  </div>

                </div>

            </div>
            
      </div>


        <div className="super_container ">

            <div className="super_container-card">

              <div className="hero_text-container">
                  <div className="hero-text-card">
                    <div className="mini_card-container">
                    <img 
                        src={ `../images/${id}1.png`} 
                        alt={ superhero }
                        className="img_mini-card" 
                      />
                    </div>

                  <div className="hero_page-list-container">
                    
                    <ul className="hero_page-list font">
                      <li className="hero_page-list-item" ><span className="hero_page-list-item-span">Alter ego: </span>{alter_ego}</li>
                      <li className="hero_page-list-item" ><span className="hero_page-list-item-span">Publisher: </span>{publisher}</li>
                      <li className="hero_page-list-item" ><span className="hero_page-list-item-span">First Appearance: </span>{first_appearance}</li>
                    </ul>
                  </div>

                  <div className="hero_page-characters-container font">
                      <p className="hero_page-characters-title">Characters</p>
                      <p className="hero_page-characters-text">{characters}</p>
                  </div>

                  <div className="hero_page-back-button-container">   
                      <button 
                        className="hero_page-back-button font-btn"
                        onClick={ onNavigateBack }
                        >
                          Go Back
                      </button>
                  </div>
                  </div>

                </div>

      
                  <div className="gallery_container">
                          <div >
                              <figure className="gallery_figure">
                                  <img src={`../images/${id}2.png`} alt="gallery" className="gallery_img"/>
                              </figure>
                          </div>

                          <div className="">
                              <figure className="gallery_figure">
                                  <img src={`../images/${id}3.png`} alt="gallery" className="gallery_img"/>
                              </figure>
                          </div>

                          <div className="">
                              <figure className="gallery_figure">
                                  <img src={`../images/${id}4.png`} alt="gallery" className="gallery_img"/>
                              </figure>
                          </div>
                      </div>
                </div>
            </div>
    </>
  )
}
