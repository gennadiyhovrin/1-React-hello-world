import React, { Component } from 'react'

export class ContentBlock extends Component {
    render() {
        return (
            <div className='col-12 shadow-lg mt-5'>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://loremflickr.com/320/240/paris" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://loremflickr.com/320/240/cat" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://loremflickr.com/320/240/dog" className="d-block w-100" alt="..."/>
    </div>
  </div>
  
</div>
            </div>
        )
    }
}

export default ContentBlock
