/**
 * Created by jcenzano on 6/1/17.
 */
var cluster = require('cluster');

var m_duration_in_ms = 10000;
var m_max_threads = require('os').cpus().length;

if (process.argv.length > 2)
    m_duration_in_ms = parseInt(process.argv[2]);

if (process.argv.length > 3)
    m_max_threads = parseInt(process.argv[3]);

if (cluster.isMaster) {
    // Code to run if we're in the master process
    console.log("Entered in master! Using time: " + m_duration_in_ms + ", max threads: " + m_max_threads);

    // Count the machine's CPUs
    var cpuCount = m_max_threads;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i++) {
        console.log("Creating thread: " + i);
        cluster.fork();
    }
}
else {
    console.log("Started execution!");

    var start_at = new Date().getTime();
    var now = start_at;

    //Put CPU core at 100%
    while (now - start_at < m_duration_in_ms) {
        var random = Math.floor(Math.random() * (1000 - 1)) + 1;
        var res = random * random;

        now = new Date().getTime();
    }

    console.log("Finished execution!");
}