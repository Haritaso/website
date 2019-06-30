import React from 'react';
import Footer from './footer';

const Profile = () => {
  const [year, setYear] = React.useState();
  React.useEffect(() => {
    const now = new Date();
    setYear(now.getFullYear() - 2000);
  }, []);
  return (
    <>
      <div className="main">
        <div className="box">
          <h2 className="title">Personal information</h2>
          <p className="text">
            Age:
            {year}
            <br />
            Birthday: June 20
          </p>
        </div>
        <div className="box">
          <h2 className="title">Experienced Framework</h2>
          <p className="text">React Redux redux-saga redux-thunk Vue.js Vuex Nuxt.js etc...</p>
        </div>
        <div className="box">
          <h2 className="title">Skills</h2>
          <p className="text">Python JavaScript TypeScript</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
