import { ReactComponent as IconLocation } from "../assets/icon-location.svg";
import { ReactComponent as IconWebsite } from "../assets/icon-website.svg";
import { ReactComponent as IconTwitter } from "../assets/icon-twitter.svg";
import { ReactComponent as IconCompany } from "../assets/icon-company.svg";
import TextWithIcon from "./TextWithIcon";
import Card from "./Card";
import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
   0% {
    opacity: 0;
    transform: translateY(100vh);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled(Card)`
  display: grid;
  grid-template-columns: 70px 1fr;
  column-gap: 20px;
  row-gap: 32px;
  margin-top: 16px;
  padding: 32px 24px 48px;
  animation: ${slideUp} 500ms cubic-bezier(0, 0, 0.01, 1.02);

  & > * {
    grid-column: 1 / -1;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 117px 1fr;
    column-gap: 41px;
    margin-top: 24px;
    padding: 40px;
  }

  @media screen and (min-width: 1110px) {
    column-gap: 37px;
    padding: 48px;

    & > * {
      grid-column: 2;
    }
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  grid-column: 1;

  @media screen and (min-width: 768px) {
    width: 117px;
    height: 117px;
  }

  @media screen and (min-width: 1110px) {
    grid-column: 1;
  }
`;

const Header = styled.div`
  grid-column: 2;

  .detail__name {
    font-size: 16px;
    color: var(--color-text-secondary);
  }

  .detail__login {
    margin-bottom: 6px;
    color: var(--color-primary);
  }

  @media screen and (min-width: 768px) {
    .detail__name {
      font-size: 26px;
    }
  }

  @media screen and (min-width: 1110px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    align-items: center;

    .detail__login {
      width: 100%;
      order: 3;
    }
  }
`;

const Body = styled.div`
  .detail__bio {
    opacity: ${({ $hasBio }) => ($hasBio ? 1 : 0.5)};
  }

  @media screen and (min-width: 1110px) {
    margin-top: -70px;
  }
`;

const Stats = styled(Card)`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  padding: 18px;
  background-color: var(--color-canvas);
  text-align: center;
  box-shadow: none;

  .detail__stat-heading {
    margin-bottom: 8px;
    font-size: 11px;
  }

  .detail__stat-text {
    font-size: 16px;
    font-weight: 700;
    color: var(--color-text-secondary);
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    padding-inline: 32px;
    text-align: start;

    .detail__stat-heading {
      margin-bottom: 0;
      font-size: 13px;
    }
    .detail__stat-text {
      font-size: 22px;
    }
  }
`;

const Footer = styled.div`
  display: grid;
  row-gap: 16px;

  & > * {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
  }
`;

function Detail({ user, theme }) {
  const getJoinedDate = () => {
    return new Date(user.created_at).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (!user) return;

  return (
    <Wrapper as="section" $theme={theme}>
      <Avatar src={user.avatar_url} width="70" height="70" alt="User avatar" />
      <Header>
        <h2 className="detail__name">{user.name}</h2>
        <p className="detail__login">@{user.login}</p>
        <p>Joined {getJoinedDate()}</p>
      </Header>
      <Body $hasBio={user.bio}>
        <p className="detail__bio">
          {user.bio ? user.bio : "This profile has no bio"}
        </p>
        <Stats>
          <div>
            <p className="detail__stat-heading">Repos</p>
            <p className="detail__stat-text">{user.public_repos}</p>
          </div>
          <div>
            <p className="detail__stat-heading">Followers</p>
            <p className="detail__stat-text">{user.followers}</p>
          </div>
          <div>
            <p className="detail__stat-heading">Following</p>
            <p className="detail__stat-text">{user.following}</p>
          </div>
        </Stats>
      </Body>
      <Footer>
        <div>
          <TextWithIcon text={user.location} icon={<IconLocation />} />
          <TextWithIcon
            text={user.html_url}
            icon={<IconWebsite />}
            link={user.html_url}
          />
        </div>
        <div>
          <TextWithIcon text={user.twitter_username} icon={<IconTwitter />} />
          <TextWithIcon text={user.company} icon={<IconCompany />} />
        </div>
      </Footer>
    </Wrapper>
  );
}

export default Detail;
