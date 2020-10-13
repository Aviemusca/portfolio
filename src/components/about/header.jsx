import React from "react";
import PropTypes from "prop-types";

import { BodyHeader, OpacityAndTranslateX } from "../common/styles/index";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

export const Header = ({ mobile }) => {
  const [triggerHeader, headerRef] = useScrollTrigger(false);
  return (
    <OpacityAndTranslateX
      trigger={triggerHeader}
      ref={headerRef}
      distance="-10em"
    >
      <BodyHeader as="h1" mobile={mobile}>
        About
      </BodyHeader>
    </OpacityAndTranslateX>
  );
};

Header.propTypes = {
  mobile: PropTypes.bool,
};