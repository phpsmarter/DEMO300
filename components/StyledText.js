import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
export class MonoText extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[this.props.style, { fontFamily: "space-mono" }]}
      />
    );
  }
}

export const StyleText = styled(Text)`
  color: ${props => props.color || "black"};
  font-size: ${props => props.size || 14};
`;
