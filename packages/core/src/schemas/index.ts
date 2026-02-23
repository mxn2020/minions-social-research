/**
 * @module @minions-social-research/sdk/schemas
 * Custom MinionType schemas for Minions Social-research.
 */

import type { MinionType } from 'minions-sdk';

export const trendsourceType: MinionType = {
  id: 'social-research-trend-source',
  name: 'Trend source',
  slug: 'trend-source',
  description: 'A configured source for social media trends.',
  icon: '📈',
  schema: [
    { name: 'platform', type: 'select', label: 'platform' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'url', type: 'string', label: 'url' },
    { name: 'category', type: 'string', label: 'category' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
    { name: 'lastCheckedAt', type: 'string', label: 'lastCheckedAt' },
  ],
};

export const competitorsnapshotType: MinionType = {
  id: 'social-research-competitor-snapshot',
  name: 'Competitor snapshot',
  slug: 'competitor-snapshot',
  description: 'A point-in-time capture of a competitor's social presence.',
  icon: '🔎',
  schema: [
    { name: 'competitorHandle', type: 'string', label: 'competitorHandle' },
    { name: 'platform', type: 'select', label: 'platform' },
    { name: 'followerCount', type: 'number', label: 'followerCount' },
    { name: 'engagementRate', type: 'number', label: 'engagementRate' },
    { name: 'recentTopics', type: 'string', label: 'recentTopics' },
    { name: 'capturedAt', type: 'string', label: 'capturedAt' },
  ],
};

export const hashtagsetType: MinionType = {
  id: 'social-research-hashtag-set',
  name: 'Hashtag set',
  slug: 'hashtag-set',
  description: 'A curated set of hashtags for a content theme.',
  icon: '��️',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'hashtags', type: 'string', label: 'hashtags' },
    { name: 'platform', type: 'select', label: 'platform' },
    { name: 'reach', type: 'select', label: 'reach' },
    { name: 'category', type: 'string', label: 'category' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const audienceinsightType: MinionType = {
  id: 'social-research-audience-insight',
  name: 'Audience insight',
  slug: 'audience-insight',
  description: 'An observed pattern about the target audience.',
  icon: '#👁️',
  schema: [
    { name: 'accountGroupId', type: 'string', label: 'accountGroupId' },
    { name: 'insight', type: 'string', label: 'insight' },
    { name: 'confidence', type: 'select', label: 'confidence' },
    { name: 'source', type: 'string', label: 'source' },
    { name: 'observedAt', type: 'string', label: 'observedAt' },
  ],
};

export const customTypes: MinionType[] = [
  trendsourceType,
  competitorsnapshotType,
  hashtagsetType,
  audienceinsightType,
];

