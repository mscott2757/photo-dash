import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { withRouter } from 'react-router-dom';
import { validateUserDashboard } from '../actions/validation';
import { getUser } from '../cookies';

const mapStateToProps = ({ validation }) => {
  return { ...validation }
}

const mapDispatchToProps = dispatch => {
  return {
    validateUser: () => {
      let userId = getUser();
      dispatch(validateUserDashboard({ _id: userId }));
    }
  }
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default withRouter(DashboardContainer);
