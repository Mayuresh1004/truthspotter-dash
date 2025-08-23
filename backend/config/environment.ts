import dotenv from 'dotenv';

dotenv.config();

export interface EnvironmentConfig {
  port: number;
  nodeEnv: string;
  supabase: {
    url: string;
    anonKey: string;
    serviceRoleKey: string;
  };
  database: {
    url: string;
  };
  api: {
    cors: {
      origin: string | string[];
      credentials: boolean;
    };
    rateLimit: {
      windowMs: number;
      max: number;
    };
  };
}

class ConfigManager {
  private config: EnvironmentConfig;

  constructor() {
    this.config = this.loadConfig();
    this.validateConfig();
  }

  private loadConfig(): EnvironmentConfig {
    return {
      port: parseInt(process.env.PORT || '3000', 10),
      nodeEnv: process.env.NODE_ENV || 'development',
      supabase: {
        url: process.env.SUPABASE_URL || '',
        anonKey: process.env.SUPABASE_ANON_KEY || '',
        serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
      },
      database: {
        url: process.env.DATABASE_URL || '',
      },
      api: {
        cors: {
          origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000', 'http://localhost:3001'],
          credentials: process.env.CORS_CREDENTIALS === 'true',
        },
        rateLimit: {
          windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10), // 15 minutes
          max: parseInt(process.env.RATE_LIMIT_MAX || '100', 10), // limit each IP to 100 requests per windowMs
        },
      },
    };
  }

  private validateConfig(): void {
    const requiredEnvVars = [
      'SUPABASE_URL',
      'SUPABASE_ANON_KEY',
    ];

    const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

    if (missingVars.length > 0) {
      throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }

    // Validate Supabase URL format
    try {
      new URL(this.config.supabase.url);
    } catch {
      throw new Error('Invalid SUPABASE_URL format');
    }

    // Validate port
    if (isNaN(this.config.port) || this.config.port < 1 || this.config.port > 65535) {
      throw new Error('Invalid PORT value');
    }
  }

  public getConfig(): EnvironmentConfig {
    return this.config;
  }

  public isDevelopment(): boolean {
    return this.config.nodeEnv === 'development';
  }

  public isProduction(): boolean {
    return this.config.nodeEnv === 'production';
  }

  public isTest(): boolean {
    return this.config.nodeEnv === 'test';
  }

  public logConfig(): void {
    console.log('Configuration loaded:');
    console.log(`- Environment: ${this.config.nodeEnv}`);
    console.log(`- Port: ${this.config.port}`);
    console.log(`- Supabase URL: ${this.config.supabase.url}`);
    console.log(`- Database URL: ${this.config.database.url ? 'Set' : 'Not set'}`);
    console.log(`- CORS Origins: ${JSON.stringify(this.config.api.cors.origin)}`);
    console.log(`- Rate Limit: ${this.config.api.rateLimit.max} requests per ${this.config.api.rateLimit.windowMs}ms`);
  }
}

export const configManager = new ConfigManager();
export const config = configManager.getConfig();