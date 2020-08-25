import { comFaleMais, semFaleMais } from '../calculatePrice';

describe('Both results must be a number', () => {

    it('comFaleMais must return a number', () => {
        const totalComFaleMais = comFaleMais(0, 0, 0);

        expect(typeof totalComFaleMais).toBe('number');
    });

    it('semFaleMais must return a number', () => {
        const totalSemFaleMais = semFaleMais(0, 0);

        expect(typeof totalSemFaleMais).toBe('number');
    });
});
