import React from 'react'

export default class Logout extends React.Component {

  render() {
    const { onLogoutClick } = this.props

    return (
      <button onClick={() => onLogoutClick()} className="btn btn-primary">
        Logout
      </button>
    )
  }

}

Logout.propTypes = {
  onLogoutClick: React.PropTypes.func.isRequired
}
