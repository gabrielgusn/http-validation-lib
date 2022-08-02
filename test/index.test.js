import catchFile from '../index.js';

const resultArray = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('catchFile::', () => {
    it('Must be a funtion', () => {
        expect(typeof catchFile).toBe('function');
    });
    it('Must return an array with the results', async () => {
        const result = await catchFile('/home/gabriel/Desktop/jsBackend/NodeJS/lib-markdown/test/files/text1.md');
        expect(result).toEqual(resultArray);
    });
    it('Must return "There is no links"', async () => {
        const result = await catchFile('/home/gabriel/Desktop/jsBackend/NodeJS/lib-markdown/test/files/text1-nolinks.md');
        expect(result).toBe('There is no links');
    })
})


// test('Must be a function', () => {
//     expect(typeof catchFile).toBe('function');
// });
