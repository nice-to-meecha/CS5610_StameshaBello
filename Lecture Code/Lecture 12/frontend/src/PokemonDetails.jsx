import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";

export default function PokemonDetails() {

    const params = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const navigate = useNavigate();

    async function fetchAndSetPokemon() {
        const pokemonResponse = await axios.get(`/api/pokemon/${params.pokemonId}`)
        setPokemonDetails(pokemonResponse.data)
    }

    useEffect(function() {
        fetchAndSetPokemon()
    })

    async function deletePokemon() {
        await axios.delete(`/api/pokemon/${params.pokemonId}`)
        // Need to navigate away from page, once data is deleted
        // Bad user experience to maintain out-of-date data
        navigate('/');
    }

    if (!pokemonDetails) {
        return (<div>Loading...</div>)
    }
    return (<div>
        <div>Name: {pokemonDetails.name}</div>
        <div>Color: {pokemonDetails.color}</div>
        <div>Health: {pokemonDetails.health}</div>
        <button onClick={deletePokemon}>Delete Me</button>
    </div>);
}