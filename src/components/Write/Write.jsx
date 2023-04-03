import React, { useEffect, useState } from 'react';
import './write.css';
import { Avatar } from 'components';
import { useSession } from 'utils/SessionManager';
import { SlLocationPin, SlTag } from 'react-icons/sl';
import { v4 } from 'uuid';
import { doc, setDoc } from 'firebase/firestore';
import { db, storage } from 'utils/firebase';
import { useWrite } from 'utils/WriteManager';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import ImageUpload from 'components/ImageUpload/ImageUpload';

const Write = () => {
  /* Router */
  /* State */
  const initialWrite = {
    id: v4(),
    title: '',
    content: '',
    tags: [],
    location: '',
    albums: [],
  };
  const [write, setWrite] = useState(initialWrite);
  const [tags, setTags] = useState('');
  const [files, setFiles] = useState();
  const [imageList, setImageList] = useState([]);
  const { session } = useSession();
  const { handleIsWrite } = useWrite();
  /* Functions */
  const onSubmit = async (e) => {
    e.preventDefault();
    const _data = {
      ...write,
      timestamp: new Date(),
      writer: {
        user_id: session.user_id,
        user_nm: session.user_nm,
        user_thumbnail: session.thumbnail,
      },
    };

    await setDoc(doc(db, 'community', write.id), _data);
    setWrite(initialWrite);
    handleIsWrite(false);
  };

  const uploadImage = () => {
    const imageRef = ref(storage, `images/${write.id}/${v4()}`);
    uploadBytes(imageRef, files).then(() => {
      setFiles();
    });
  };

  const handleTag = (e) => {
    setTags(e.target.value);
  };

  const handleCreateTag = (e) => {
    if (e.key === 'Enter') {
      const temp = write.tags.some((item) => item === `#${tags}`);
      if (tags === '' || temp) return;

      const _tag = write.tags.concat([`#${tags}`]);
      setWrite({ ...write, tags: _tag });
      setTags('');
    }
  };

  const onRemove = (item) => {
    const _tag = write.tags.filter((tag) => {
      return tag !== item;
    });
    setWrite({ ...write, tag: _tag });
  };

  const handleWrite = (e) => {
    setWrite({ ...write, [e.target.name]: e.target.value });
  };
  /* Hooks */
  useEffect(() => {
    if (!files) {
      return;
    }
    uploadImage();
  }, [files]);

  useEffect(() => {
    const imageListRef = ref(storage, `images/${write.id}`);
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, [files]);

  useEffect(() => {
    setWrite({ ...write, albums: imageList });
  }, [imageList]);

  /* Render */
  const tagRender = write.tags.map((item) => {
    return (
      <div className="tag-item" key={item} onClick={() => onRemove(item)}>
        {item}
      </div>
    );
  });
  return (
    session && (
      <div className="write-container">
        <div className="user">
          <Avatar
            char={session.user_nm}
            thumbnail={session.thumbnail}
            size={32}
          />
          <div className="user-nm">{session.user_nm}</div>
        </div>
        <div className="title">
          <input
            type="text"
            name="title"
            placeholder="제목을 작성해주세요"
            value={write.title}
            onChange={handleWrite}
          />
        </div>
        <div className="tag">
          <div className="tag-icon">
            <SlTag size={24} />
          </div>
          <div className="tag-list">
            {tagRender}
            <div className="tag-input">
              <div className="tag-input-icon">#</div>
              <input
                type="text"
                value={tags}
                onChange={handleTag}
                onKeyUp={handleCreateTag}
              />
            </div>
          </div>
        </div>
        <div className="location">
          <div className="location-icon">
            <SlLocationPin size={24} />
          </div>
          <input
            type="text"
            placeholder="지역을 작성해 주세요"
            name="location"
            value={write.location}
            onChange={handleWrite}
          />
        </div>
        <div className="desc">
          <textarea
            name="content"
            rows="15"
            placeholder="여행에 대한 자유로운 이야기를 작성해 주세요"
            vlaue={write.content}
            onChange={handleWrite}
          ></textarea>
        </div>
        <div className="img-group">
          <ImageUpload setImage={setFiles} />
          <br />
          {imageList.map((item, idx) => {
            return (
              <img
                key={idx}
                src={item}
                style={{ width: '100px', height: '100px' }}
              />
            );
          })}
        </div>
        <div className="btn-group">
          <button className="submit" onClick={onSubmit}>
            등록
          </button>
          <button className="cancel">취소</button>
        </div>
      </div>
    )
  );
};

export default Write;
