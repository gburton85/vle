import React from 'react'

export default class Posts extends React.Component {
  renderPosts() {
    return this.props.posts.map((post, i) => {
      return (
        <div className='post' key={`post_${i}`}>
          <div className='col-lg-4 text-center portfolio-box'>
            <div className='box1'>
              <h2 className='section-heading'>{ post.title }</h2>
              <hr className='light' />
              <a
                href={`studentHome/${post.title}`}
                className='btn btn-default'
              >Go!</a>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className='posts'>
        { this.renderPosts() }
      </div>
    );
  }
}
