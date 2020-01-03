import React from 'react';
import Footer from './footer';

const Profile = () => {
  const [year, setYear] = React.useState();
  React.useEffect(() => {
    const today = new Date();
    const birthday = new Date(2000, 5, 20);
    const thisYearBirthday = new Date(
      today.getFullYear(),
      birthday.getMonth(),
      birthday.getDate()
    );
    const age = today.getFullYear() - birthday.getFullYear();
    if (today < thisYearBirthday) setYear(age - 1);
    else setYear(age);
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
          <p className="text">
            React Redux redux-saga redux-thunk Vue.js Vuex Nuxt.js etc...
          </p>
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
