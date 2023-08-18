import axios from 'axios';
import './App.scss';
import { useState } from 'react';



function App() {
 const [pokemons, setPokemons]= useState([])
let limit= 10


 

  async function BuscarPokemon(){
    let url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=' + limit;

    let response = await axios.get(url);

    let listaPokemons=[];

    for(let item of response.data.results){
      let pokemonResp = await axios.get(item.url);

      let imagem = pokemonResp.data.sprites.other['official-artwork'].front_default;

      let tipos =''
      for(let t of pokemonResp.data.types){
        tipos= tipos+ t.type.name + ',';


        listaPokemons.push({
          nome:item.name,
          imagem: imagem,
          tipos: tipos
        })
     
      }
    }
    
    setPokemons(listaPokemons)
  }




  



   async function plus(){
    let x= limit + 10
    limit=x 
    let url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=' + limit;

    let response = await axios.get(url);

    let listaPokemons=[];

    for(let item of response.data.results){
      let pokemonResp = await axios.get(item.url);

      let imagem = pokemonResp.data.sprites.other['official-artwork'].front_default;

      let tipos =''
      for(let t of pokemonResp.data.types){
        tipos= tipos+ t.type.name + ',';


        listaPokemons.push({
          nome:item.name,
          imagem: imagem,
          tipos: tipos
        })
     
      }
    }
    
    setPokemons(listaPokemons)
  }

  
  
  
  return (

    <div className="App">
      <div className='cabecalho'>
      <img  src='/assets/images/pokemon.png'   alt='' />
      
      <button onClick={BuscarPokemon} >Buscar Pokémons</button>
      </div>
      
      <div className='lista'>
        {pokemons.map(item =>
          <div className='card-pokemon'>
            <img src={item.imagem}/>
            <h1>{item.nome}</h1>
            <p>{item.tipos}</p>
          </div>  
          )}
      </div>


      <button onClick={plus} id='busca'>Buscar mais</button>
    </div>



  );
}

export default App;
