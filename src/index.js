import { wrapAction } from 'nexusdk';
import { exec } from 'child_process';

wrapAction((properties, sendMessage) => {
  return new Promise(resolve => {
    const { command, timeout, env } = properties;
    const proc = exec(command, { windowsHide: true, timeout, env, stdio: 'pipe' });
    proc.stdout.on('data', (data) => sendMessage('log', data));
    proc.stderr.on('data', (data) => sendMessage('err', data));
    proc.on('exit', (code) => {
      resolve(code);
    });
  });
})
