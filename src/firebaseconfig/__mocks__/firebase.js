/* eslint-disable no-else-return */
/* eslint-disable prefer-promise-reject-errors */
// export const loginExistent = jest.fn(() => Promise.resolve());
export const loginExistent = (gmail, pass) => {
  if (gmail === 'email@gmail.com' && pass === '123456') {
    return Promise.resolve({
      user: {
        uid: '49wfRdokn4Rd5agIKyb0Fa5B9PR2',
      },
    });
  } else if (gmail === 'noexist@gmail.com') {
    return Promise.reject({
      code: 'auth/user-not-found',
    });
  } else if (gmail === 'wrongpas@gmail.com') {
    return Promise.reject({
      code: 'auth/wrong-password',
    });
  } return Promise.reject({
    code: 'auth/user-disabled',
  });
};
// Mock de la propiedad que necesitamos de UserCredential, el uid
export const createRegister = () => Promise.resolve({
  user: {
    uid: '123',
  },
});
