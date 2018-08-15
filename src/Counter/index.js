import React, { Component } from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import * as selectors from "./selectors";
import { bindActionCreators } from "redux";
import Actions from "./actions";
import { withStyles } from "@material-ui/core/styles";
import STYLES from "./constants";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const styles = () => STYLES;

class Counter extends Component {
  render() {
    const {
      classes,
      count,
      increment,
      decrement,
      asyncIncrement,
      asyncDecrement
    } = this.props;
    return (
      <div className={classes.appContainer}>
        <div className={classes.counterContainer}>
          <Typography variant="display2">{count}</Typography>
          <div className={classes.buttonContainer}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.buttonWrapper}
              onClick={increment}
            >
              increment
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.buttonWrapper}
              onClick={decrement}
            >
              decrement
            </Button>
          </div>
          <Button
            variant="outlined"
            color="primary"
            className={classes.buttonWrapper}
            onClick={asyncIncrement}
          >
            async increment
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.buttonWrapper}
            onClick={asyncDecrement}
          >
            async decrement
          </Button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  classes: PropTypes.any,
  count: PropTypes.any,
  increment: PropTypes.any,
  decrement: PropTypes.any,
  asyncIncrement: PropTypes.any,
  asyncDecremen: PropTypes.any
};

const mapStateToProps = createStructuredSelector({
  count: selectors.makeCount()
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...Actions.Creators
    },
    dispatch
  )
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter)
);
