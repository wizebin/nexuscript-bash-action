import nexusdk from 'nexusdk';
import { exec } from 'child_process';

function callWrap(messageType) {
  return function (message) {
    nexusdk.sendMessage({ type: messageType, data: message });
  }
}

nexusdk.on('configuration', () => {
  return {
    command: { required: true, _type: 'string' },
    timeout: { required: false, _type: 'number' },
    env: { required: false, _type: 'object', description: 'key value environment variables to send to process' },
  };
});

nexusdk.on('execute', (properties) => {
  const { command, timeout, env } = properties;
  const proc = exec(command, { windowsHide: true, timeout, env, stdio: 'pipe' });
  proc.stdout.on('data', callWrap('log'));
  proc.stderr.on('data', callWrap('err'));
  proc.stdout.on('close', callWrap('close'));
});
