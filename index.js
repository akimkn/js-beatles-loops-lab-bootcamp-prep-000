function theBeatlesPlay(musicians,instruments) {
  var result = []
  for (var i=0; i < musicians.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return result
}

function johnLennonFacts(lennonfacts) {
  var result =[]
  var testnumber = 0
  while (testnumber<lennonfacts.length) {
    result.push(lennonfacts[testnumber++] + '!!!')
  }
  return result
}
