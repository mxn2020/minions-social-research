"""
Minions Social-research SDK — Type Schemas
Custom MinionType schemas for Minions Social-research.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

trend_source_type = MinionType(
    id="social-research-trend-source",
    name="Trend source",
    slug="trend-source",
    description="A configured source for social media trends.",
    icon="📈",
    schema=[
        FieldDefinition(name="platform", type="select", label="platform"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="url", type="string", label="url"),
        FieldDefinition(name="category", type="string", label="category"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
        FieldDefinition(name="lastCheckedAt", type="string", label="lastCheckedAt"),
    ],
)

competitor_snapshot_type = MinionType(
    id="social-research-competitor-snapshot",
    name="Competitor snapshot",
    slug="competitor-snapshot",
    description="A point-in-time capture of a competitor's social presence.",
    icon="🔎",
    schema=[
        FieldDefinition(name="competitorHandle", type="string", label="competitorHandle"),
        FieldDefinition(name="platform", type="select", label="platform"),
        FieldDefinition(name="followerCount", type="number", label="followerCount"),
        FieldDefinition(name="engagementRate", type="number", label="engagementRate"),
        FieldDefinition(name="recentTopics", type="string", label="recentTopics"),
        FieldDefinition(name="capturedAt", type="string", label="capturedAt"),
    ],
)

hashtag_set_type = MinionType(
    id="social-research-hashtag-set",
    name="Hashtag set",
    slug="hashtag-set",
    description="A curated set of hashtags for a content theme.",
    icon="��️",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="hashtags", type="string", label="hashtags"),
        FieldDefinition(name="platform", type="select", label="platform"),
        FieldDefinition(name="reach", type="select", label="reach"),
        FieldDefinition(name="category", type="string", label="category"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

audience_insight_type = MinionType(
    id="social-research-audience-insight",
    name="Audience insight",
    slug="audience-insight",
    description="An observed pattern about the target audience.",
    icon="#👁️",
    schema=[
        FieldDefinition(name="accountGroupId", type="string", label="accountGroupId"),
        FieldDefinition(name="insight", type="string", label="insight"),
        FieldDefinition(name="confidence", type="select", label="confidence"),
        FieldDefinition(name="source", type="string", label="source"),
        FieldDefinition(name="observedAt", type="string", label="observedAt"),
    ],
)

custom_types: list[MinionType] = [
    trend_source_type,
    competitor_snapshot_type,
    hashtag_set_type,
    audience_insight_type,
]

