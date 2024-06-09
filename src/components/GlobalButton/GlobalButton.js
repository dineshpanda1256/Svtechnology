import React from "react";
import { Button, Spinner } from "react-bootstrap";
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
  isLoading,
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={isLoading || disabled}
      style={style}
      className={`global-button ${className}`}
    >
      {isLoading && <Spinner size="sm" variant="light" />} {children}
    </Button>
  );
};

GlobalButton.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

GlobalButton.defaultProps = {
  variant: "primary",
  size: "md",
  onClick: () => {},
  disabled: false,
  className: "",
  isLoading: false,
  style: {},
};

export default GlobalButton;
