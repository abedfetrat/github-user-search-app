import { ReactComponent as IconLocation } from "../assets/icon-location.svg";
import { ReactComponent as IconWebsite } from "../assets/icon-website.svg";
import { ReactComponent as IconTwitter } from "../assets/icon-twitter.svg";
import { ReactComponent as IconCompany } from "../assets/icon-company.svg";

function Detail({ user }) {
  const getJoinedDate = () => {
    return new Date(user.created_at).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };
  
  if (!user) return;

  return (
    <section className="detail card">
      <img
        className="detail__avatar"
        src={user.avatar_url}
        width="70"
        height="70"
        alt="User avatar"
      />
      <div className="detail__header">
        <h2 className="detail__name">{user.name}</h2>
        <p className="detail__login">@{user.login}</p>
        <p>Joined {getJoinedDate()}</p>
      </div>
      <div className="detail__body">
        <p className={!user.bio && "muted"}>
          {user.bio ? user.bio : "This profile has no bio"}
        </p>
        <div className="card detail__stats">
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
        </div>
      </div>
      <div className="detail__footer">
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
      </div>
    </section>
  );
}

function TextWithIcon({ text, icon, link }) {
  return (
    <div className={`text-w-icon ${!text ? "muted" : ""}`}>
      {icon}
      {link ? (
        <a href={link} target="_blank">
          {text}
        </a>
      ) : (
        <p>{text ? text : "Not Available"}</p>
      )}
    </div>
  );
}

export default Detail;
