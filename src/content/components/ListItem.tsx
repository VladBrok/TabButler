import styled from "@emotion/styled";
import React from "react";

export interface ListItemProps<T> {
  data: T;
  selected: boolean;
  onClick: (data: T) => void;
  onHover: () => void;
}

// figure out best hover/selected colors
export const ListItem = styled.div<{ selected: boolean }>`
  width: 100%;
  /* height: 24px; */
  height: 50px;
  display: flex;
  flex-direction: row;
  row-gap: 8px;
  column-gap: 8px;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  /* if item is selected, the color should change (inspite of theme) */
  color: ${(props) => (props.selected ? "#F7FAFC" : "inherit")};
  background-color: ${(props) => (props.selected ? "#3182ce" : "transparent")};

  // hover css is technocally no longer needed as the element becomes selected on mouse over
  /* :hover {
    color: #f7fafc;
    background-color: #3182ce;
  } */

  img {
    height: 24px;
    width: 24px;
  }

  .main_text {
    font-size: 16px;
    font-weight: 450;
  }

  .secondary_text {
    font-size: 10px;
    /* if selected use special color if not fall back to the default one*/
    color: ${(props) =>
      props.selected ? "#cbd5e0" : "rgba(255, 255, 255, 0.36)"};
  }

  /* :hover .secondary_text {
    color: #cbd5e0;
  } */

  .main_text,
  .secondary_text {
    white-space: nowrap;
    width: 500px;
    max-width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    /* font-size: 16px; */
    user-select: none;
  }

  @media (prefers-color-scheme: light) {
    .secondary_text {
      color: ${(props) => (props.selected ? "#CBD5E0" : "rgba(0, 0, 0, 0.48)")};
    }

    /* :hover .secondary_text {
      color: #cbd5e0;
    } */
  }
`;
