/**
 * Created by hemery on 23/12/2016.
 */
import ApplicationComponent from './application';
describe('ApplicationComponent', () => {
    it('is successfully instantiated', () => {
        const app = new ApplicationComponent();
        expect(app instanceof ApplicationComponent).toEqual(true);
    });
});