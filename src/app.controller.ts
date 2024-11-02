import { Controller, Get, Render } from '@nestjs/common';
import * as os from 'os';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  getSystemInfo() {
    const info = {
      os: {
        type: os.type(),
        release: os.release(),
        arch: os.arch(),
        hostname: os.hostname(),
      },
      memory: {
        total: (os.totalmem() / (1024 * 1024)).toFixed(2) + ' MB',
        free: (os.freemem() / (1024 * 1024)).toFixed(2) + ' MB',
      },
      cpu: {
        cores: os.cpus().length,
        model: os.cpus()[0].model,
      },
    };

    return { info };
  }
}
