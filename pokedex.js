const fetchPokemon = async (event) => {
    if(event.code != 'Enter') 
    return;
    const pokemonName = event.target.value.toLowerCase();
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const codeStatus = promise.status;
    if (codeStatus != 200){
        errControl()
        return;
    }
    const response = await promise.json();
        
    setImageToPokemon(response.sprites.front_default);
    setNamePokemon(response.species.name);
    setIdPokemon(response.id);
    setTypePokemon(response.types[0].type.name);
    setBodyColor(response.types[0].type.name);
}

const fetchPokemon2 = async (event) => {
    const pokemonName = document.getElementById("input-browser").value.toString().toLowerCase();
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const codeStatus = promise.status;
    if (codeStatus != 200){
        errControl()
        return;
    }
    const response = await promise.json();

    setImageToPokemon(response.sprites.front_default);
    setNamePokemon(response.species.name);
    setIdPokemon(response.id);
    setTypePokemon(response.types[0].type.name);    
    setBodyColor(response.types[0].type.name);
}

const setImageToPokemon = (urlImage) => {
    document.getElementById('pokemonImage').src = urlImage;
}

const setNamePokemon = (urlName) => {
    document.getElementById('pokeName').value = urlName;
}

const setIdPokemon = (urlId) => {
    document.getElementById('pokeId').value = urlId;
}

const setTypePokemon = (urlType) => {
    document.getElementById('pokemonType').value = urlType;
}

const errControl = () => {
    document.getElementById('pokemonImage').src = 'https://fb-dermatology.com/es/__base/2928DF0E806A6A0000000138F86EED1B/';
    document.getElementById('pokeName', 'pokeId', 'pokemonType').value = '';
    document.getElementById('body').style.backgroundColor= '#fff';
}

const setBodyColor = (pokeType) => {
    var pokeBackground = pokeType;
    switch(pokeBackground) {
        case 'electric': 
            document.getElementById('body').style.backgroundColor= '#E0E727';
            break;
        case 'normal':
            document.getElementById('body').style.backgroundColor= '#D085D9';
            break;
        case 'water':
            document.getElementById('body').style.backgroundColor= '#00b7ff';
            break;
        case 'fire':
            document.getElementById('body').style.backgroundColor= '#BF533C';
            break;
        case 'ghost':
            document.getElementById('body').style.backgroundColor= '#CEC8C6';
            break;
        case 'grass':
            document.getElementById('body').style.backgroundColor= '#76DA82';
            break;
        case 'rock':
            document.getElementById('body').style.backgroundColor= '#9E5D16';
            break;
        case 'poison':
            document.getElementById('body').style.backgroundColor= '#BB1DC3';
            break;
        case 'steel':
            document.getElementById('body').style.backgroundColor= '#70706E';
            break;
        case 'dragon':
            document.getElementById('body').style.backgroundColor= '#178A97';
            break;
        case 'bug':
            document.getElementById('body').style.backgroundColor= '#8FE6A9';
            break;        
        case 'fairy':
            document.getElementById('body').style.backgroundColor= '#905983';
            break;
        case 'ice':
            document.getElementById('body').style.backgroundColor= '#C7E4EA';
            break;
        case 'psychic':
            document.getElementById('body').style.backgroundColor= '#E16411';
            break;
        case 'fighting':
            document.getElementById('body').style.backgroundColor= '#ED826D';
            break;
        case 'dark':
            document.getElementById('body').style.backgroundColor= '#3D4491';
            break;
        case 'ground':
            document.getElementById('body').style.backgroundColor= '#764205';
            break;
        case 'flying':
            document.getElementById('body').style.backgroundColor= '#99CDF9';
            break;
        default:
            document.getElementById('body').style.backgroundColor= '#fff';
    }

}