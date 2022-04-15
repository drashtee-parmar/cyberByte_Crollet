export const getSavedCoinIds = () => {
  const savedCoinIds = localStorage.getItem('saved_coins')
    ? JSON.parse(localStorage.getItem('saved_coins'))
    : [];

  return savedCoinIds;
};

export const saveCoinIds = (coinIdArr) => {
  if (coinIdArr.length) {
    localStorage.setItem('saved_coins', JSON.stringify(coinIdArr));
  } else {
    localStorage.removeItem('saved_coins');
  }
};

export const removeCoinId = (coinId) => {
  const savedCoinIds = localStorage.getItem('saved_coins')
    ? JSON.parse(localStorage.getItem('saved_coins'))
    : null;

  if (!savedCoinIds) {
    return false;
  }

  const updatedSavedCoinIds = savedCoinIds?.filter((savedCoinId) => savedCoinId !== coinId);
  localStorage.setItem('saved_coins', JSON.stringify(updatedSavedCoinIds));

  return true;
};

export const cartCoinIds = (coinIdArr) => {
  if (coinIdArr.length) {
    localStorage.setItem('cart_coins', JSON.stringify(coinIdArr));
  } else {
    localStorage.removeItem('saved_coins');
  }
};
