import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./GlobalButton.css";

const GlobalButton = ({
  variant,
  size,
  onClick,
  children,
  disabled,
  className,
  style,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`global-button ${className}`}
    >
      {children}
    </Button>
  );
};

GlobalButton.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

GlobalButton.defaultProps = {
  variant: "primary",
  size: "md",
  onClick: () => {},
  disabled: false,
  className: "",
};

export default GlobalButton;
