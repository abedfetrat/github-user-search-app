import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  opacity: ${({$muted}) => $muted ? 0.5 : 1};
  svg {
    min-width: 20px;

    path {
      fill: var(--color-text);
    }
  }
`;

function TextWithIcon({ text, icon, link }) {
  return (
    <Wrapper $muted={!text}>
      {icon}
      {link ? (
        <a href={link} target="_blank">
          {text}
        </a>
      ) : (
        <p>{text ? text : "Not Available"}</p>
      )}
    </Wrapper>
  );
}

export default TextWithIcon;
