const Benchmark = require('benchmark');
const _ = require('lodash');

const suite = new Benchmark.Suite();

// max 60100000 for 20 level
const baseNumber = 60000000;

const bid1 = 60015000;
const ask1 = 60080000;
const baseList = _.times(20, (idx) => ({
  Id: baseNumber + idx * 5000,
}));

const mock20BuyList = _.cloneDeep(baseList);
const mock20SellList = _.cloneDeep(baseList);
const mockOld20BuyList = _.cloneDeep(baseList);
const mockOld20SellList = _.cloneDeep(baseList);
const shuffleBuyList = _.shuffle(_.cloneDeep(baseList));
const shuffleSellList = _.shuffle(_.cloneDeep(baseList));
const shuffleOldBuyList = _.shuffle(_.cloneDeep(baseList));
const shuffleOldSellList = _.shuffle(_.cloneDeep(baseList));

const findCrossIdx = (arr, id, isSeq = true) => {
  let i = 0;
  for (let len = arr.length; i < len; i += 1) {
    if (isSeq) {
      if (arr[i].Id >= Number(id)) {
        return i;
      }
    } else {
      if (arr[i].Id <= Number(id)) { // eslint-disable-line
        return i;
      }
    }
  }
  return i;
};

const oldFixBuylist = (buyList, bidId) => {
  const idx = findCrossIdx(buyList, bidId, false);
  buyList.splice(0, idx);
};
const oldFixSelllist = (sellList, askId) => {
  const idx = findCrossIdx(sellList, askId);
  sellList.splice(0, idx);
};

/**
 * Remove unexpected id which larger then bid1 id
 *
 * @param {array} buyList The buy list
 * @param {number} bidId The bid1 id
 */
const fixBuyList = (buyList, bidId) => {
  while (
    buyList
    && bidId !== '0'
    && buyList.length > 0
    && buyList[0].Id > Number(bidId)
  ) buyList.shift();
};
/**
 * Remove unexpected id which less then ask1 id
 *
 * @param {array} sellList The sell list
 * @param {number} askId The ask1 id
 */
const fixSellList = (sellList, askId) => {
  while (
    sellList
    && askId !== '0'
    && sellList.length > 0
    && sellList[sellList.length - 1].Id < Number(askId)
  ) sellList.pop();
};

suite
  .add('Fix OB cross#New with sorted', () => {
    fixBuyList(mock20BuyList, bid1);
    fixSellList(mock20SellList, ask1);
  })
  .add('Fix OB cross#Old with sorted', () => {
    oldFixBuylist(mockOld20BuyList, bid1);
    oldFixSelllist(mockOld20SellList, ask1);
  })
  .add('Fix OB cross#New with shuffle', () => {
    const sortOb = (a, b) => (a.Id > b.Id ? -1 : 0);
    fixBuyList(shuffleBuyList.sort(sortOb), bid1);
    fixSellList(shuffleSellList.sort(sortOb), ask1);
  })
  .add('Fix OB cross#Old with shuffle', () => {
    fixBuyList(shuffleOldBuyList.sort((a, b) => b.Id - a.Id), bid1);
    fixSellList(shuffleOldSellList.sort((a, b) => a.Id - b.Id), ask1);
    shuffleOldSellList.reverse();
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .run({ async: true });
