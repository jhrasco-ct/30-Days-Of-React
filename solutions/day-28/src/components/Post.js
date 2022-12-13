import { useRef, useState } from "react";

import ButtonIcon from "../shared/ButtonIcon";
import "../styles/Post.css";

const Post = ({ data, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef();

  const onEditPost = () => {
    setIsEditing(true);
  };

  const onSaveEditedPost = () => {
    data.tweet = textareaRef.current.value;
    setIsEditing(false);
  };

  const onCancelEditPost = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="post">
        <textarea defaultValue={data.tweet} ref={textareaRef} />
        <br />
        <button className="save-button" onClick={onSaveEditedPost}>
          Save
        </button>
        <button className="cancel-button" onClick={onCancelEditPost}>
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="post">
      <div className="user-info">
        <i className="fas fa-user" />
        <h4>{data.fullName}</h4>&nbsp;
        <span>{data.username}</span>
      </div>
      <div>
        <p>{data.tweet}</p>
      </div>
      <div className="post-detail">
        <div>
          <ButtonIcon className="far fa-edit" onClick={onEditPost} />
          <ButtonIcon
            className="far fa-trash-alt"
            onClick={() => {
              onDelete(data);
            }}
          />
        </div>
        <div>
          <ButtonIcon className="far fa-comment" />
          <ButtonIcon className="far fa-heart" />
          <ButtonIcon className="far fa-retweet" />
        </div>
        <div>
          <small className="tweeted-date">{data.date}</small>
        </div>
      </div>
    </div>
  );
};

export default Post;
