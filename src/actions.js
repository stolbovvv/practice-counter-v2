export const actions = {
  inc: () => ({ type: "INC", payload: null }),
  dec: () => ({ type: "DEC", payload: null }),
  res: () => ({ type: "RES", payload: null }),
  rnd: () => ({ type: "RND", payload: Math.floor(Math.random() * 100 - 50) }),
};
