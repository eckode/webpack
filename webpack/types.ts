
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

export interface EckodeWebpackConfig extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}
