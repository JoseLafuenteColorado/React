import { useEffect, useState } from "react"
import './App.css';

const CAT_ENDPOINT_RAMDOM_FACT = 'https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()
    const [factError, setFactError] = useState()


        useEffect(() => {
            fetch(CAT_ENDPOINT_RAMDOM_FACT)
            .then(response => {
                if(!response.ok) {
                    throw new Error('No se pudo obtener el dato');
                }
                return response.json()
            })
            .then(data => {
                const {fact} = data;
                setFact(data.fact);               
                })
            }, []);

        useEffect(() => {
            if(!fact) return;
            const threeFirstWords = fact.split(' ', 3).join(' ');
            console.log(threeFirstWords);

            fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(response => response.json())
            .then(response => {
                
                const {url} = response;
                setImageUrl(url);
                })
        }, [fact]);

        return (
            <main>
                <section>
                <h1>App de gatitos</h1>
                </section>

                <section className="cardCat">
                    <article>
                        {fact && <p>{fact}</p>}
                    </article>
                    <article>
                        {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the firts trhee words for ${fact}`}/>}
                    </article>
                </section>
            </main>
        )};