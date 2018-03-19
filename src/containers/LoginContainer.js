import { connect } from 'react-redux';
import Login from '../components/Login';
import { login, clearLoginErr } from '../actions/login';
import { withRouter } from 'react-router-dom';
import { validateUserLogin } from '../actions/validation';
import { getUser } from '../cookies';

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
    },
    validateUser: () => {
      let userId = getUser();
      dispatch(validateUserLogin({ _id: userId }));
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default withRouter(LoginContainer);
