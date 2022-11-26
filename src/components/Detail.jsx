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
    <section className="mt-4 grid animate-slideup grid-cols-detail gap-x-5 gap-y-8 rounded-2xl bg-white-as-heaven p-10 px-6 pt-4 pb-12 shadow-xl dark:bg-fainting-light dark:shadow-none md:mt-6 md:grid-cols-detail-large md:gap-x-10 md:p-10 lg:gap-x-9 lg:p-12">
      {/* Avatar */}
      <img
        className="col-start-1 rounded-full md:h-[117px] md:w-[117px]"
        src={user.avatar_url}
        width="70"
        height="70"
        alt="User avatar"
      />
      {/* Header */}
      <div className="col-start-2 md:self-center lg:flex lg:flex-wrap lg:content-start lg:items-center lg:justify-between lg:self-start">
        <h2 className="text-base font-bold text-anchors-aweigh dark:text-white md:text-[26px]">
          {user.name}
        </h2>
        <p className="text-blue-sparkle lg:order-3 lg:w-full mb-1 md:mt-2">@{user.login}</p>
        <p>Joined {getJoinedDate()}</p>
      </div>
      {/* Body */}
      <div className="col-span-full lg:col-start-2 lg:mt-[-70px]">
        <p className={!user.bio && "opacity-50"}>
          {user.bio ? user.bio : "This profile has no bio"}
        </p>
        {/* Stats */}
        <div className="mt-6 flex justify-between rounded-2xl bg-ghost-white p-5 text-center dark:bg-hei-se-black md:mt-8 md:px-8 md:text-start">
          <div>
            <p className="mb-2 text-xs md:mb-0">Repos</p>
            <p className="text-base font-bold text-anchors-aweigh dark:text-white">
              {user.public_repos}
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs md:mb-0">Followers</p>
            <p className="text-base font-bold text-anchors-aweigh dark:text-white">
              {user.followers}
            </p>
          </div>
          <div>
            <p className="mb-2 text-xs md:mb-0">Following</p>
            <p className="text-base font-bold text-anchors-aweigh dark:text-white">
              {user.following}
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="col-span-full grid gap-y-4 md:grid-cols-2 md:gap-x-6 lg:col-start-2">
        <div className="flex flex-col gap-y-4">
          <TextWithIcon text={user.location} icon={<IconLocation />} />
          <TextWithIcon
            text={user.html_url}
            icon={<IconWebsite />}
            link={user.html_url}
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <TextWithIcon text={user.twitter_username} icon={<IconTwitter />} />
          <TextWithIcon text={user.company} icon={<IconCompany />} />
        </div>
      </div>
    </section>
  );
}

function TextWithIcon({ text, icon, link }) {
  return (
    <div
      className={`flex items-center gap-x-5 [&>svg]:min-w-[20px] [&>svg>path]:fill-san-marino dark:[&>svg>path]:fill-white ${
        !text && "opacity-50"
      }`}
    >
      {icon}
      {link ? (
        <a href={link} target="_blank" className="break-all">
          {text}
        </a>
      ) : (
        <p>{text ? text : "Not Available"}</p>
      )}
    </div>
  );
}

export default Detail;
