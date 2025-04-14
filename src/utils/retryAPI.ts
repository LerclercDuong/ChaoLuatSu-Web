import { Observable, throwError, timer } from 'rxjs';
import { mergeMap, retryWhen } from 'rxjs/operators';

const RETRY_ATTEMPTS = 3;  // Số lần thử lại tối đa
const RETRY_DELAY = 2000;  // Thời gian chờ giữa các lần thử lại (ms)

export function retryStrategy() {
    return retryWhen((errors) =>
        errors.pipe(
            mergeMap((error, attempt) => {
                if (attempt >= RETRY_ATTEMPTS || !error.response) {
                    return throwError(() => error);
                }
                console.log(`Retrying request... (${attempt + 1}/${RETRY_ATTEMPTS})`);
                return timer(RETRY_DELAY);
            })
        )
    );
}

export function withRetry<T>(request: Promise<T>): Promise<T> {
    return new Observable<T>((observer) => {
        request
            .then((response) => {
                observer.next(response);
                observer.complete();
            })
            .catch((error) => observer.error(error));
    })
        .pipe(retryStrategy())
        .toPromise() as Promise<T>;
}


