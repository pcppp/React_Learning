import http from './http';
import { UpLoadFiles } from './api';
export function upLoadFiles(files) {
  http
    .post(UpLoadFiles, files, '')
    .then()
    .catch(() => {});
}
export function mergeChunks(files) {
  http
    .post(UpLoadFiles, files, '')
    .then()
    .catch(() => {});
}
