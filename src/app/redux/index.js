import { connect } from "react-redux";
import App from "../../app/index";
import { updateCart } from "../redux/actions";

export const AppContainer = connect(
  function mapStateToProps(state) {
    return { items: state.items };
  },
  function mapDispatchToProps(dispatch) {
    return {
      onUpdateCart: (item, quantity) => dispatch(updateCart(item, quantity)),
    };
  }
)(App);
