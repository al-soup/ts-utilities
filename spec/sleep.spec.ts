import { sleep } from '../src/sleep';

describe('sleep', () => {
  it('should halt execution for a specified time', async () => {
    const ms = 500;
    const tick = new Date().getTime();
    await sleep(ms);
    const tock = new Date().getTime();
    const duration = tock - tick;
    expect(duration).toBeGreaterThanOrEqual(ms);
  });
});
