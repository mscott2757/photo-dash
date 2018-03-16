import { connect } from 'react-redux';
import Login from '../components/Login';
import { login, clearLoginErr } from '../actions/login';

const mapStateToProps = ({ login }) => {
  return {
    isFetching: login.isFetching,
    hasErred: login.hasErred,
    errMessage: login.errMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (data) => {
      dispatch(login(data));
    },
    handleClear: () => {
      dispatch(clearLoginErr());
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
