/**
 * Minions Social-research SDK
 *
 * Trend sources, competitor snapshots, hashtag sets, and audience notes
 *
 * @module @minions-social-research/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Social-research.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
