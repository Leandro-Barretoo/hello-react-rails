import React from "react"
import PropTypes from "prop-types"

class Greeting extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greetings: {this.props.greetingcommand}
      </React.Fragment>
    );
  }
}

Greeting.propTypes = {
  greeting: PropTypes.string
};

export default Greeting
