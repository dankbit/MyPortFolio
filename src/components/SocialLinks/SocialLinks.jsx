<<<<<<< HEAD
<<<<<<< HEAD
import { social4 } from "../../data/social4";

const SocialLinks = () => {
  return (
    <div className="socialLinks flex flex-col items-center justify-center gap-5">
      {social4.map(
        (item, index) =>
          index < 3 && (
            <a
              className="inline-block"
              href={item.socialLink}
              title={item.socialTitle}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              {item.socialIcon}
            </a>
          )
      )}
      {/* Social Links */}
    </div>
  );
};

export default SocialLinks;
=======
=======
>>>>>>> 892f3f4 (done)
import { social4 } from "../../data/social4";

const SocialLinks = () => {
  return (
    <div className="socialLinks flex flex-col items-center justify-center gap-5">
      {social4.map(
        (item, index) =>
          index < 3 && (
            <a
              className="inline-block"
              href={item.socialLink}
              title={item.socialTitle}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              {item.socialIcon}
            </a>
          )
      )}
      {/* Social Links */}
    </div>
  );
};

export default SocialLinks;
<<<<<<< HEAD
>>>>>>> f057f81 (Updated Site)
=======
=======
import { social4 } from "../../data/social4";

const SocialLinks = () => {
  return (
    <div className="socialLinks flex flex-col items-center justify-center gap-5">
      {social4.map(
        (item, index) =>
          index < 3 && (
            <a
              className="inline-block"
              href={item.socialLink}
              title={item.socialTitle}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              {item.socialIcon}
            </a>
          )
      )}
      {/* Social Links */}
    </div>
  );
};

export default SocialLinks;
>>>>>>> fc4c443 (done)
>>>>>>> 892f3f4 (done)
