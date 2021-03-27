// @flow

export function sortDataByColumn(
  data: array<any>,
  column: number,
  ascending?: boolean
) {
  const sortedData = data.slice();
  sortedData.sort(sortColumn(column, ascending || ascending === undefined));
  return sortedData;
}

function sortColumn(index: number, ascending: boolean) {
  if (ascending) {
    return function (a, b) {
      if (a[index] < b[index]) {
        return -1;
      } else if (a[index] === b[index]) {
        return 0;
      }
      return 1;
    };
  }

  return function (a, b) {
    if (a[index] < b[index]) {
      return 1;
    } else if (a[index] === b[index]) {
      return 0;
    }
    return -1;
  };
}
