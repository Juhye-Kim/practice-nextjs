import css from "styled-jsx/css";
import {GoLink, GoMail, GoLocation, GoOrganization} from "react-icons/go";

const style = css`
   .profile-box {
       width: 25%;
       max-width: 272px;
       margin-right: 26px;
   }
   .profile-image-wrapper {
       width: 100%;
       border: 1px solid #e1e4e8;
   }
   .profile-image-wrapper .profile-image {
       display: block;
       width: 100%;
   }
   .profile-username {
       margin: 0;
       padding-top: 16px;
       font-size: 26px;
   }
   .profile-user-login {
       margin: 0;
       font-size: 20px;
   }
   .profile-user-bio {
       margin: 0;
       padding-top: 16px;
       font-size: 14px;
   }
   .profile-user-info {
       display: flex;
       align-items: center;
       margin: 4px 0 0;
   }
   .profile-user-info-text {
       margin-left: 6px;
   }
`;

const Profile = ({user}) => {
    if (!user) {
        return null;
    }

    const {name, avatar_url, login, bio, company, location, email, blog} = user;

    return (
        <>
            <div className="profile-box">
                <div className="profile-image-wrapper">
                    <img className="profile-image" src={avatar_url} alt={`${name} profile image`} />
                </div>
                <h2 className="profile-username">{name}</h2>
                <p className="profile-user-login">{login}</p>
                <p className="profile-user-bio">{bio}</p>
                {
                    company? (
                        <p className="profile-user-info">
                            <GoOrganization size={16} color="#6a737d" />
                            <span className="profile-user-info-text">{company}</span>
                        </p>
                    ) : null
                }
                {
                    location? (
                        <p className="profile-user-info">
                            <GoLocation size={16} color="#6a737d" />
                            <span className="profile-user-info-text">{location}</span>
                        </p>
                    ) : null
                }
                {
                    email? (
                        <p className="profile-user-info">
                            <GoMail size={16} color="#6a737d" />
                            <span className="profile-user-info-text">{email}</span>
                        </p>
                    ) : null
                }
                {
                    blog? (
                        <p className="profile-user-info">
                            <GoLink size={16} color="#6a737d" />
                            <span className="profile-user-info-text">{blog}</span>
                        </p>
                    ) : null
                }
            </div>
            <style jsx>{style}</style>
        </>
    )
}

export default Profile;