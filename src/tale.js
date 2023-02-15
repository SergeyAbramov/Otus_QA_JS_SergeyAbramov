

let name = ['deduchka', 'zayaz', 'lisa']

function colobok(name) {
  switch (name) {
    case 0:
      return ' Я от дедушки ушёл'
    case 1:
      return ' Я от зайчика ушёл'
    case 2:
      return ' Меня съели'
  }
}
//colobok(1);

let name1 = ['Дед Мороз!', 'Снегурочка!']

const moroz = 'Дед Мороз! Дед Мороз!'
const snegurka = 'Снегурочка! Снегурочка!'

//console.log('Скоро новый год =', )

function newYear(name1) {
  if (name1 === 'Дед Мороз!')
    return name1 + ` ${moroz}`
  else {
    return name1 + ` ${snegurka}`
  }
};

//newYear('Снегурочка!')

//const firstName = 'Sergey'
//const lastName = 'Abramov'
//const message = `${firstName} ${lastName}`