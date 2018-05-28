import { wrapAction } from 'nexusdk';
import { exec } from 'child_process';

wrapAction((properties, event) => {
  return new Promise(resolve => {
    const { command, timeout, env } = properties;
    const proc = exec(command, { windowsHide: true, timeout, env, stdio: 'pipe' });
    const results = { stdout: [], stderr: [], code: -1 };
    proc.stdout.on('data', (data) => results.stdout.push(data));
    proc.stderr.on('data', (data) => results.stderr.push(data));
    proc.on('exit', (code) => {
      results.code = code;
      resolve(results);
    });
  });
})
