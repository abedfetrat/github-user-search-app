import styled, { css } from "styled-components";

const Card = styled.div`
  border-radius: 15px;
  background-color: var(--color-surface);
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);

  ${({ $theme }) =>
    $theme === "dark" &&
    css`
      box-shadow: none;
    `}
`;

export default Card;
