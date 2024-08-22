import React, { Component } from 'react';
import MoviesItems from './MoviesItems';

export class Movies extends Component {



    
    apiEndPoints="https://api.themoviedb.org/3";
    IMGPATH = "https://image.tmdb.org/t/p/w1280";

    constructor(props) {
        super(props)

        this.state = {
            results:[],
            page: 1,
            loading: false
        }
    }




     async componentDidMount() {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=1a80a0a05c62436764262bb290abcdce");

            const data = await response.json();

            this.setState({
              results: data.results,
              loading: false  
            })



        } catch (error) {
            console.log("Something is not working in componentDidMount function!")

        }
    }




    render() {
        return (
            <div className='container my-4'>
                <h1 className='text-center my-3'>Most popular watched movies</h1>



                <div className="row">

                    {this.state.results.map((element) => {

                        return <div className='col-md-4 my-2'>
                            <MoviesItems title={element.original_title} Image={this.IMGPATH + element.poster_path} overview={element.overview} releaseDate={element.release_date}
                            vote={element.vote_average} /></div>
                    })
                    }




                </div>






            </div>
        )
    }
}

export default Movies
