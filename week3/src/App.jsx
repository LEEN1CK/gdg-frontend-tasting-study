import "./App.css";

const post = [
  {
    id: 1,
    username: "JISOO",
    userImage: "/images/blackpink.png",
    postImage: "/images/Jisoo.png",
    likeCount: 31,
    caption: "CLICK",
  },
  {
    id: 2,
    username: "JENNIE",
    userImage: "/images/blackpink.png",
    postImage: "/images/Jennie.png",
    likeCount: 30,
    caption: "Fallen Angel",
  },
  {
    id: 3,
    username: "ROSE",
    userImage: "/images/blackpink.png",
    postImage: "/images/Rose.png",
    likeCount: 29,
    caption: "new trick",
  },
  {
    id: 4,
    username: "LISA",
    userImage: "/images/blackpink.png",
    postImage: "/images/Lisa.png",
    likeCount: 29,
    caption: "PRESS PLAY", 
  }
];


function Profile({userImage, username}) {
  return  (
    <header className="post-profile">
          <img className="profile-image" src={userImage} alt={username} />

          <strong className="profile-username">{username}</strong>

          <button className="more-button" type="button" aria-label="더 보기">
            <span></span>
            <span></span>
            <span></span>
          </button>
    </header>
  );
}

function PostImage({ postImage, username }) {
  return (
    <div className="post-image-area">
      <img className="post-image" src={postImage} alt={username} />
    </div>
  );
}

function PostActions() {
  return (
    <div className="post-actions">
      <div className="left-actions">
        <button type="button" aria-label="좋아요">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
          </svg>
        </button>

        <button type="button" aria-label="댓글">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 11.6a9.2 9.2 0 1 0-4.8 8.1L22 22l-1.9-5.7a9.1 9.1 0 0 0 .9-4.7Z" />
          </svg>
        </button>

        <button type="button" aria-label="공유">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m22 2-8.5 20-4-11L1 2h21ZM9.5 11 22 2" />
          </svg>
        </button>
      </div>

      <button type="button" aria-label="저장">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 2h16v20l-8-6-8 6V2Z" />
        </svg>
      </button>
    </div>
  );
}
  
function App() {
  return (
    <main className="page">
      {post.map((post) => (
        <article className="post" key={post.id}>
          <Profile userImage={post.userImage} username={post.username} />
          <PostImage postImage={post.postImage} username={post.username} />
          <PostActions />

          <section className="post-content">
            <p className="like-count">
              좋아요 <strong>{post.likeCount}</strong>개
            </p>

            <p className="caption">
              <strong>{post.username}</strong>
              <span>{post.caption}</span>
            </p>
          </section>
        </article>
      ))}
    </main>
  );
}

export default App;
