import React from "react";
import styled from "styled-components";

const IconComponent = styled.img``;

interface IconProps {
  icon: any;
  width?: string;
  height?: string;
}
export const Icon: React.FC<IconProps> = ({
  icon,
  width,
  height,
  ...otherProps
}) => {
  return (
    <IconComponent src={icon} width={width} height={height} {...otherProps} />
  );
};
