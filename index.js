function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = lists.length; i < l; i++) {
    let ranks = lists[i].ranks

    for (let j = 0, k = ranks.length; j < k; j++) {
      ranks[j].innerHTML = parseInt(ranks[j].innerHTML) + n
    }
  }
}
