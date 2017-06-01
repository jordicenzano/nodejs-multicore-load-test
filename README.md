# nodejs-multicore-load-test
Performs a very simple load test for nodejs using multicore

## Run
`node node index.js [TIME] [CPU-CORES]`. Example: `node node index.js 10000`

`TIME`: Millisecconds you want to run the test. Will default to 10000

`CPU-CORES`: Number of "threads" you want to run. Will default to the nimber of CPUs that the local machine has.
