import { Link } from "react-router-dom"

export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,

}) => {

const heroImageUrl = `../images/${ id }.jpg`

  return (
    <>
   <Link to={ `/hero/${ id }` } className='hero-card_link'>
        <div className='unorder_list-hero-item '>
            <div className="card_hero">
                <div className="div_img-container">
                    <div className="img_container">
                        <figure className="img-figure">
                        <img src={heroImageUrl} className="card_img " alt={ superhero } />
                        </figure>
                    </div>
                </div>

                <div className="card_text-container">
                    <div className="card_body">
                        <h2 className="card_title">{ superhero }</h2>

                        <div className="card_text-absolute">
                            <p className="card_text">{ alter_ego }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Link>
    
    </>
  )
}
