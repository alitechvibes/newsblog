import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsUrl, author, date, source } = this.props;
        return (
            <>
                <div className="card" >
                    <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{ left: '90%', zindex: '1' }}>{source}</span>
                    <img src={!imageurl ? "https://media.zenfs.com/en/cbc.ca/71b0aa0e82fe394bdcff3c1cc1b311b0" : imageurl} className="card-img-top" alt="..." style={{ height: '230px' }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem