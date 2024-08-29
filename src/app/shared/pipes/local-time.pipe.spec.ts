import { LocalTimePipe } from './local-time.pipe';

describe('LocalTimePipe', () => {
  it('create an instance', () => {
    const pipe = new LocalTimePipe();
    expect(pipe).toBeTruthy();
  });
});
