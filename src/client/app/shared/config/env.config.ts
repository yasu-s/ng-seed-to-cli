import { EnvConfig } from '../../../../../tools/env/env-config.interface';
import * as DevConfig from '../../../../../tools/env/dev';

const envJson = '<%= ENV_CONFIG %>';
export const Config: EnvConfig = (envJson.indexOf('= ENV_CONFIG ') >= 0) ? DevConfig : JSON.parse(envJson);
