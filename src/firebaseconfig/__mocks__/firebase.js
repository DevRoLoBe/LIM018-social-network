export const loginExistent = jest.fn(() => Promise.resolve());

// Mock de la propiedad que necesitamos de UserCredential, el uid
export const createRegister = () => Promise.resolve({
  user: {
    uid: '123',
  },
});
