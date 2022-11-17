






import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';


import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHeroesByName } from '../helpers';
import { useEffect, useState } from 'react';


export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const [isActive, setisActive] = useState(false);

    const { q = '' } = queryString.parse(location.search);
    
    const heroes = getHeroesByName( q );
    
    const { searchText, onInputChange, onResetForm } = useForm({ searchText: '' });
    
    const [inputValue, setinputValue] = useState('');

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'auto'});
      }, []);
    
    const onSearchSubmit = (e) => {
        e.preventDefault();
        onResetForm();
        navigate(`?q=${ searchText }`)
    }
    
    const handleToggle = () => {
        setisActive(!isActive)
    }

    const onHandleClear = ( e) => {
      onResetForm();
    }

  return (
    <div className="container">

        <div className="search_grid">

            <div>
                <div>
                    <form onSubmit={ onSearchSubmit }>
                        <div className='form_container'>


                        <div className={`search dos ${isActive ? 'active' : ''}`}
                                 
                            >
                        <div className='icon'
                            onClick={ handleToggle }

                        > 
                        
                        </div>

                            <div className='input'>
                                <input 
                                    type="text" 
                                    placeholder='SEARCH'
                                    id='mysearch'
                                    className={`search_input ${isActive ? 'active' : ''}`}
                                    name="searchText"
                                    autoComplete="off"
                                    value={ searchText }
                                    onChange={ onInputChange }
                                />

                            </div>
                            <span className={`clear ${isActive ? 'activeClear' : ''}`} onClick={ onHandleClear }></span>
                        </div>
                        </div>

                      <button 
                        className='search_button'>
                        Search
                      </button>
                    </form>
                </div>
            </div>

            <div className="results_container">
                <div className="results_heading-container">
                    <h4 className="results_heading">Results</h4>
                </div>

                {
                    ( q === '' ) 
                    
                    ? 
                <div className="results_container ">
                    <div className="results_heading-container results_heading-container-success">
                        <p className="results_heading ta-center">Search a Hero</p>
                    </div>
                </div> : ( heroes.length === 0 ) 
                
                        && <div className="results_container ">
                    <div className="results_heading-container results_heading-container-unsuccess">
                        <p className="results_heading ">No hero with name { q } found</p>
                    </div>
                </div>
                }

             
                
            </div>

        </div>

           
        <div className=' search_list list_heroes-container container'>
                {
                    heroes.map( hero => (
                        <HeroCard className='search_item' key={hero.id} {...hero} />
                    ))
                }

                {/* <HeroCard /> */}
      </div>

                    



    </div>
  )
}
