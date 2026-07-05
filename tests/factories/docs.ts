import { testConstants } from "@tests/constants";
import type { DocPage } from "@/utils/docs";
import type { DocGroup } from "@/constants/docs-nav";

/** Hand-rolled factories (no faker). createTestX(overrides?) spreads defaults. */

const createTestDocGroup = (overrides?: Partial<DocGroup>): DocGroup => ({
  id: testConstants.doc.groupId,
  slugs: [testConstants.doc.slug],
  ...overrides,
});

const createTestDocPage = (overrides?: Partial<DocPage>): DocPage => ({
  slug: testConstants.doc.slug,
  title: testConstants.doc.title,
  body: testConstants.doc.body,
  ...overrides,
});

export { createTestDocGroup, createTestDocPage };
