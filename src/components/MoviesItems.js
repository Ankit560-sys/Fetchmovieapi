import React, { Component } from 'react'

export class MoviesItems extends Component {
    render() {

        let { title, Image, overview, releaseDate,vote } = this.props;
        return (
            <div>
                <div className="card">
                    <img src={Image} className="card-img-top " alt="" style={{
                        height: '300px',

                        objectFit: 'cover'
                    }} />

                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {vote}
                    </span>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{overview}</p>
                        <p className="card-text"><small className="text-muted"> Movie releases on {releaseDate}</small></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default MoviesItems
