// Load multiple objects from extension's local storage via their key
export async function loadStorageObjs(keyArr) {
  let data = [];

  for (let i = 0; i < keyArr.length; i++) {
    if (keyArr[i] === 'loggedIn' || keyArr[i] === 'pw') {
      await chrome.storage.local.get(keyArr[i]).then((result) => {
        data[i] = result[keyArr[i]];
      });
    } else {
      await chrome.storage.local.get(keyArr[i]).then((result) => {
        data[i] = result[keyArr[i]].value;
      });
    }
  }

  return data;
}

// Load object from extension's local storage via key ('.value' and '.aliases')
export async function loadStorageObject(key) {
  let data;

  await chrome.storage.local.get(key).then((result) => {
    data = result[key];
  });

  return data;
}

// Save object to extension's local storage
export function saveStorageObject(key, value, aliasArr) {
  chrome.storage.local.set({ [`${key}`]: { aliases: aliasArr, value: value } });
}

// Validate string for correct email requirements
export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Validate string for correct password requirements
export function checkPassword(input) {
  const passw = /^[A-Za-z]\w{7,14}$/;
  if (input.match(passw)) {
    return true;
  }
  return false;
}
