function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelectorAll("#nested .target")[0];
}

function deepestChild() {
  var element = document.querySelectorAll("#grand-node");
  for (var i = 0; i < element.length; i++) {
    if (i === element.length - 1) {
      return element[i];
    }
  }
}

function increaseRankBy(n) {
  var list = document.querySelectorAll(".ranked-list li")[0];
  for (let i = 0; i < list.length; i++) {
    list[i] = list[i] + n;
  }
  return list;
}
