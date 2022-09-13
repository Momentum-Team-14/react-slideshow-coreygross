import { useState } from "react";
import { filmData } from "./film-data";



export const Slideshow = () => {
    const [filmIndex, setFilmIndex] = useState(0)
    return (
    <>
        <div className = 'slideshow-info'>
            <div>
                <FilmDetail
                setFilmIndex={setFilmIndex}
                filmIndex={filmIndex}
                title={filmData[filmIndex].title}
                original_title={filmData[filmIndex].original_title}
                image={filmData[filmIndex].image}
                description={filmData[filmIndex].description}
                release_date={filmData[filmIndex].release_date}
                filmData={filmData}
                />
            </div>
        </div>
    </>
)}
        
const FilmDetail = ({ setFilmIndex, filmIndex, title, original_title, image, description, release_date, filmData }) => {

    return (
        <div className="container" style={{padding: '50px'}}>
            <h1 style={{ textAlign: 'center', marginBottom: '50px'}}>{title}</h1>
            <div style={{ display: 'flex', flexDirection:'row', boxShadow: '1px 2px #888888', marginBottom: '20px'}}>
                <img src={image} alt="cover picture" style={{ height: "300px", width: "500px" }}/>
                <div style={{ textAlign: 'center', maxWidth: '75%', padding: '20px'}}>
                    <h2>{original_title}</h2>
                    <h3>{release_date}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button onClick={() => {setFilmIndex(0)}} 
                    style={{ marginRight: '100px'}}
                    disabled={filmIndex === 0}
                    > First Page
                </button>
                <button onClick={() => {setFilmIndex(parseInt(filmIndex-1))}}
                disabled={filmIndex === 0} style={{ marginRight: '100px'}}
                > Back </button>
                <button onClick={() => {setFilmIndex(parseInt(filmIndex+1))}}
                disabled={filmIndex === filmData.length -1}
                > Next </button>
            </div>
        </div>
    )}
