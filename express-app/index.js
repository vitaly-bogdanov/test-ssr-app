'use strict';

import dotenv from 'dotenv'; dotenv.config();
import { cpus } from 'os';
import cluster from 'cluster';
import app from './config/app.js';
import db from './config/db.js';

if (cluster.isMaster) {
  const cpuCount = cpus().length;
  for (let i = 0; i <= cpuCount; i++) {
    cluster.schedulingPolicy = cluster.SCHED_RR;
    cluster.fork();
  }
} else {
  (async ()  => {
    try {
      await db.authenticate();
      await db.sync();
      app.listen(process.env.PORT, () => console.log(`Server run on port ${process.env.PORT}`));
    } catch (error) {
      console.log(error);
    } 
  })();
}