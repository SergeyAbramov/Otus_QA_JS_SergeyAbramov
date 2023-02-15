
//import {jest} from "@jest/globals"; jest;
//import expect from "expect"; jest;
//import {colobok, newYear} from '../src/tale.js'

//const name = require('../src/tale');
//const name1 = require('../src/tale');
const colobok = require('../src/tale');
const newYear = require('../src/tale');

describe('Test all the tale function ', () => {

    test('That the colobok name = deduchka returns Я от дедушки ушёл', () => {
        expect(colobok('deduchka').toBe(' Я от дедушки ушёл'))
    });

    test('That the colobok name = lisa returns Меня съели', () => {
        expect(colobok('lisa')).toBe(' Меня съели')
    });
    test('That the colobok name = zayaz returns Я от зайчика ушёл', () => {
        expext(colobok('zayaz')).toBe(' Я от зайчика ушёл')
    });
    test('That the newYear function name1 = Дед Мороз! returns Дед Мороз! Дед Мороз! Дед Мороз!', () => {
        expect(newYear('Дед Мороз!')).toBe('Дед Мороз! Дед Мороз! Дед Мороз!')
    });
    test('That the newYear function name = Снегурочка! returns Снегурочка! Снегурочка! Снегурочка!', () => {
        expect(newYear('Снегурочка!').toBe('Снегурочка! Снегурочка! Снегурочка!'))
    });
});
