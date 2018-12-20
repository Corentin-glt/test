import React, {Component} from 'react';
import HomeScene from './homeScene';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../../Actions/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HomeScene name={this.props.userReducer.user.name} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userReducer: state.userReducer,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);