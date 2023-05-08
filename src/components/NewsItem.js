import React from 'react'

const NewsItem=(props)=>{
    let {title, description, img, newsUrl, author, date, source}=props;
    return (
      <div className='my-3'>
        <div className="card">
          <div>
        <span className="badge rounded-pill bg-dark" style={{
          display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'
        }}>
    {source}</span>
    </div>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
        <div className='text-center'>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-outline-dark">Read more</a>
        </div>
        </div>
</div>
      </div>
    )
  }


export default NewsItem