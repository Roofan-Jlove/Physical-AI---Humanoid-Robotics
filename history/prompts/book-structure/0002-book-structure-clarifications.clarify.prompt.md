---
id: 0002
title: Book Structure Specification Clarifications
stage: clarify
date: 2025-12-06
surface: agent
model: claude-haiku-4-5-20251001
feature: book-structure
branch: 0001-book-structure
user: Rofan-Jlove
command: /sp.clarify
labels: ["clarification","specification","constitution-alignment","weekly-mapping","hardware-variants"]
links:
  spec: specs/0001-book-structure/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/0001-book-structure/spec.md (updated with clarifications)
tests:
  - Clarification integration: 3 questions resolved, no duplicates in Clarifications section
  - Spec consistency: FR-003 and FR-006 updated with clarified constraints
  - Constitution alignment: 30% hands-on requirement scoped to final book delivery
  - Weekly distribution: Module 1 (Weeks 1–2), Module 2 (Weeks 3–6), Module 3 (Weeks 7–10), Module 4 (Weeks 11–13)
  - Hardware strategy: Single canonical path with optional callout boxes per variant
---

## Prompt

re-check the constitution and specify again make your clarification in it

## Response snapshot

Performed structured ambiguity scan against constitution and specification using taxonomy covering:
- Functional Scope & Behavior (Partial - resolved)
- Domain & Data Model (Clear)
- Interaction & UX Flow (Partial - resolved)
- Non-Functional Quality (Missing - deferred to planning)
- Integration & Dependencies (Partial - resolved)
- Edge Cases & Failure (Partial - deferred to planning)
- Constraints & Tradeoffs (Partial - resolved)
- Terminology & Consistency (Partial - deferred to planning)
- Completion Signals (Clear)

**3 Critical Questions Asked & Resolved**:

1. **Constitution vs. Specification Alignment** → **Answer: Option A (Structure-only for Iteration 1)**
   - Constitution's 30% hands-on examples requirement applies to *final book delivery* (post-iteration 2), not this structural iteration
   - Iteration 1 remains purely organizational; iteration 2 delivers practical content
   - Clarified in FR-008 and Notes section

2. **Weekly Mapping Granularity & Distribution** → **Answer: Option B (Variable duration by module complexity)**
   - Module 1 (ROS 2 Foundations) = Weeks 1–2 (foundational, shorter)
   - Module 2 (Gazebo & Unity Simulation) = Weeks 3–6 (hands-on intensive, 4 weeks)
   - Module 3 (NVIDIA Isaac & Advanced Perception) = Weeks 7–10 (complex, 4 weeks)
   - Module 4 (Vision-Language-Action Systems) = Weeks 11–13 (capstone integration, 3 weeks)
   - Each week is exclusive to one module (no cross-module weeks)
   - Clarified in FR-003

3. **Hardware Variants & Deployment Strategy** → **Answer: Option A (Single primary path with optional hardware callouts)**
   - Single canonical book path targeting workstations as primary
   - Hardware variants (Jetson, humanoid robots, cloud labs) represented as *optional callout boxes* within each week/module
   - Example callouts: "For Jetson users," "For humanoid robots," "For cloud lab users"
   - Maintains structure simplicity; reduces content duplication; supports iteration 2 easily
   - Clarified in FR-006

**Integration into Spec**:
- Added `## Clarifications` section with `### Session 2025-12-06` subsection
- All 3 Q&A pairs recorded as bullets
- Updated FR-003, FR-006, and FR-008 with clarified constraints
- Updated Notes section with constitutional alignment statement
- No vague language ("should," "intuitive," "robust") remaining; all clarifications are testable

## Outcome

- ✅ Impact: Specification now fully aligned with constitution. Constitutional principles (30% hands-on, technical accuracy, clarity, consistency, practicality, traceability) are understood to apply to final delivery. Book structure is unambiguous: 13 weeks distributed unevenly across 4 modules based on complexity; single canonical path with hardware callouts.
- 🧪 Tests: 3 clarifications integrated; no duplicates; FR-003 and FR-006 updated with specific week ranges and hardware strategy; Notes section clarifies constitutional alignment. Spec validation passes: no [NEEDS CLARIFICATION] markers remain; all requirements are testable.
- 📁 Files: `specs/0001-book-structure/spec.md` (updated with clarifications section + requirement clarifications), `history/prompts/book-structure/0002-*` (this PHR).
- 🔁 Next prompts: `/sp.plan` to design detailed Docusaurus structure, sidebar configuration, chapter outline, and content roadmap. Coverage of Non-Functional Quality (performance, scalability, observability) and Terminology glossary deferred to planning phase (lower impact for iteration 1 structure).
- 🧠 Reflection: Clarification session successfully resolved constitution-spec tension and key structural ambiguities. The 3–4 week variable module duration (Option B) is pedagogically sound and aligns with curriculum design best practices. Single primary path with callouts (Option A) maintains simplicity while supporting hardware diversity. Ready to proceed to planning phase.

## Evaluation notes (flywheel)

- Failure modes observed: None; all 3 clarifications are material and reduce downstream rework risk.
- Graders run and results (PASS/FAIL): PASS (all clarifications are testable, integrated correctly, no contradictions introduced, no placeholders remain)
- Prompt variant (if applicable): N/A (user requested re-check of constitution and specify; clarification workflow addressed both)
- Next experiment (smallest change to try): Proceed to `/sp.plan` to translate clarified spec into detailed Docusaurus architecture, sidebar structure, chapter count per module, and content roadmap.

## Coverage Summary (Post-Clarification)

| Category | Status | Notes |
|----------|--------|-------|
| Functional Scope & Behavior | ✅ Resolved | Constitution-spec alignment clarified (30% hands-on applies to final delivery); structure-only scope confirmed for iteration 1 |
| Domain & Data Model | ✅ Clear | Modules, Weeks, Capstone Pipeline, Hardware Variants well-defined; no ambiguity |
| Interaction & UX Flow | ✅ Resolved | Weekly mapping fully specified: M1=Weeks 1–2, M2=Weeks 3–6, M3=Weeks 7–10, M4=Weeks 11–13; exclusive weeks (no transitions) |
| Non-Functional Quality | 🔄 Deferred | Performance, scalability, observability targets deferred to planning phase (lower impact for structural blueprint) |
| Integration & Dependencies | ✅ Resolved | Hardware variants strategy clarified: single path + callout boxes; single canonical navigation; reduces complexity |
| Edge Cases & Failure | 🔄 Deferred | Mid-course enrollment, transition handling better addressed in planning (behavioral, not structural) |
| Constraints & Tradeoffs | ✅ Resolved | Chapter count (10–14) vs. module distribution (4 modules, variable weeks) clarified through weekly mapping; structure now concrete |
| Terminology & Consistency | 🔄 Deferred | Canonical glossary ("hands-on," "practical examples," "callout box") deferred to planning; no contradictions in current spec |
| Completion Signals | ✅ Clear | All acceptance criteria testable; success criteria measurable |

**Outstanding Items (Deferred, Not Blocking)**:
- Non-Functional Quality targets (performance/scalability/observability) → Plan phase
- Terminology glossary and consistency standardization → Plan phase
- Edge case handling (mid-enrollment, mid-module transitions) → Plan phase

**Recommendation**: Proceed to `/sp.plan` with full confidence. All material ambiguities resolved. Spec is ready for detailed architecture and content roadmap design.
