import { EnvConfig } from '../../../../../tools/env/env-config.interface';

async function getConfig() {
    const config = await import('../../../../../tools/env/dev');
    return config;
}

const envJson = '<%= ENV_CONFIG %>';
export const Config: EnvConfig = (envJson.indexOf('= ENV_CONFIG ') >= 0) ? getConfig() : JSON.parse(envJson);
