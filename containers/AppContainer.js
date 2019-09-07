import { connect } from "react-redux";
import App from "../app";
import { getInputData } from '../modules/home'

const mapStateToProps = (state) => ({
  inputData:state.home.inputData || {}
});

const mapActionCreators = {
  getInputData
}

export default connect(mapStateToProps)(App)
