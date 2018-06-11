'use strict';

const mergeLists = (list1, list2) => {
  if (!list1.head && !list2.head) return undefined;
  if (!list1.head) return list2;
  if (!list2.head) return list1;

  let currentNode1 = list1.head;
  let currentNode2 = list2.head;
  
  let counter = 0;
  while (currentNode1) {
    if (counter % 2 === 1 && currentNode2) {
      list1.insertBefore(currentNode1.value, currentNode2.value);
    } 
    currentNode1 = currentNode1.next;
    if (counter > 0) currentNode2 = currentNode2.next;
    counter += 1;
  }
  return list1;
};

export default mergeLists;
