import React from "react";

const SocialMedia = () => {
  const SOCIAL_MEDIA_LINKS = [
    {
      name: "LinkedIn",
      icon: "linkedin-in",
      url: "https://www.linkedin.com/in/raquel-jackson"
    },
    {
      name: "Github",
      icon: "github-alt",
      url: "https://github.com/rj4ck"
    },
    {
      name: "Discord",
      icon: "discord",
      url: "https://discord.com/users/rj4ck"
    }
  ];

  return (
    <div className="justify-self-end">
      {SOCIAL_MEDIA_LINKS.map((media) => (
        <a href={media.url} target="_blank" className="text-[1.2rem] hover:text-orange-500 mx-2">
          <i className={`fa-brands fa-${media.icon}`}></i>
        </a>
      ))}
    </div>
  )
}

export default SocialMedia
