import dataFaq from './data.json'

const initialState = {
  list: dataFaq,
};

export default function faq(state = initialState, action){
  switch (action.type) {
    default:
      return state;
  }
}

