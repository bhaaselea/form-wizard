console.log('This is the content script');

const fillField = (field, detail) => {
  field.value = detail;
};

// Types a string into a field, one character at a time
const typeField = (field, detail) => {
  for (let index = 0; index < detail.length; index++) {
    field.value += detail.charAt(index);
  }
};
