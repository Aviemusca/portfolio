import React from "react";
import { Heading } from "../common/heading";
import { Button, Icon } from "semantic-ui-react";

export const SnippetsHeading = ({ mobile }) => (
  <Heading
    mobile={mobile}
    headingText="Snippets"
    subHeadingText="Interactive mini code snippets"
    actionButton={
      <Button primary size="huge">
        Check them out
        <Icon name="right arrow" />
      </Button>
    }
  />
);
