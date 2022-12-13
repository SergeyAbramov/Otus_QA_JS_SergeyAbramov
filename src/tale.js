

let name = ['deduchka', 'zayaz', 'lisa']

function colobok(name) {
  switch (name) {
    case 0:
      return ' Я от дедушки ушёл'
    case 1:
      return 'Я от зайчика ушёл'
    case 2:
      return 'Меня съели'
  }
}
colobok(1);

let name1 = ['Дед Мороз!', 'Снегурочка!']

function newYear(name1) {
  if (name1 === 'Дед Мороз!')
    return name1 + ` Дед Мороз! Дед Мороз!`
  else {
    return name1 + ` Снегурочка! Снегурочка!`
  }
}
newYear('Снегурочка!')

