import './profile.css'

const Profile = () => {
  return (
      <div className="app-profile">
          <div className='profile-img'>
              <img
                  src='https://avatanplus.com/files/resources/original/5de2e2451c7b916ebe43ddfd.jpg' alt=''/>
          </div>
          <div className='about-me'>
              <div className='profile-photo'>
                  <img
                      src='https://st3.depositphotos.com/15208558/i/600/depositphotos_180183478-stock-photo-portrait-silhouette-man-hood-black.jpg' alt=''/>
              </div>
              <div>
                  About
              </div>
          </div>
          <div className='posts'>
              My Posts
              <div>
                  New post ы
              </div>
              <div>
                  <div>
                      Post1
                  </div>
                  <div>
                      Post2
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Profile