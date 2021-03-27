// @flow

type direction = "ASC" | "DESC";

export function sortDataByColumn(
  data: array<any>,
  column: number,
  direction?: direction
) {
  const sortedData = data.slice();
  const sortOrder = direction ? direction : "ASC";
  sortedData.sort(sortColumn(column, sortOrder));
  return sortedData;
}

function sortColumn(index: number, direction: direction) {
  if (direction === "ASC") {
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
