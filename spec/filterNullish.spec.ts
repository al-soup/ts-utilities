import { from } from 'rxjs';
import { filterNullish } from '../src';

describe('filterNullish', () => {
  it('should filter nullish observables', (done) => {
    from([undefined, null, 12])
      .pipe(filterNullish())
      .subscribe({
        next: (num) => expect(num).toBe(12),
        complete: () => done()
      });
  });
});
