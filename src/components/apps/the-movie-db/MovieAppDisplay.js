import React from 'react';
import { CarouselCaption } from 'reactstrap';
import styled, { withTheme } from 'styled-components';

const Movie = styled.div`
    margin: 5 px;
    width: 300 px;
    height: 500 px;
    border-radius: 5 px;
    text-align: center;
    background: #48B1BF;
`;

const Poster = styled.img`
    width: calc(100% - 20px);
    height: calc(70% - 10px);
    margin: 10 px 1 0px 0 10 px;
    border-radius: 5 px;
`;

const Title = styled.h5`
    margin: 5 px 0 0 0;
    color: white;
`;

const Description = styled.p`
    height: 20%;
    color: white;
    overflow-wrap: break-word;
    overflow: scroll;
`;

const MovieAppDisplay = ({movie}) => {
    return(
        <Movie>
            <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='' />
            <Title>{movie.original_title}</Title>
            <Description>{movie.overview}</Description>
        </Movie>
    );
};

export default MovieAppDisplay;