import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {
  constructor() {
    super();
    console.log("i am constructor and i am runing ");
    this.state = {
      articles: [],
      loading: false,
      totalResults: 0,
      ButtonStatus: "disabled",
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f1afe45bb38432993ef9fdd848052f2&page=1&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
       articles: parsedData.articles ,
        totalResults: parsedData.totalResults,
        loading: false
      
      })
  }
  handlePrevClick = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f1afe45bb38432993ef9fdd848052f2&page=${this.state.page-1}&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        page : this.state.page-1,
        articles: parsedData.articles,
        loading: false
    });
  }
  handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
      this.setState({ButtonStatus: "disabled"});
    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f1afe45bb38432993ef9fdd848052f2&page=${this.state.page+1}&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        page : this.state.page+1,
        articles: parsedData.articles,
        loading: false
    });
  }
  }
  render() {
    return (
      <div className='container my-3'>
        <h3>Get Latest News Updates from all over te world - Results Found :{this.state.totalResults}</h3>
        <div className="text-center">
       {this.state.loading && <Spinner />} 
        </div>
        <div className="row my-3 p-5">
          {!(this.state.loading) && this.state.articles.map((c) => {
            return  <div className="col-md-4 p-3" key={c.url}>
                      <NewsItem
                        title={c.title.length<30?c.title:c.title.slice(0, 30)+' ...'}
                        description={c.description}
                        imageurl={c.urlToImage}
                        newsUrl={c.url} 
                        author={c.author}
                        date={c.publishedAt}
                        source={c.source.name}
                        ></NewsItem>
                    </div>
          })};
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} className="btn btn-sm btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)?true:false} className="btn btn-sm btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News