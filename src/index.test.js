//import { whatWeekIsIt } from './index.js';
import { whatWeekIsIt } from 'what-week-is-it';

test('what week is it', () => {
    expect(whatWeekIsIt()).toBe(40); //should be up-to-date :)
});
