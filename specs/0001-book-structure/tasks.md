# Tasks: High-Level Book Structure for AI/Spec-Driven Humanoid Robotics Curriculum

**Feature**: Book Structure & Docusaurus Architecture
**Branch**: `0001-book-structure`
**Created**: 2025-12-06
**Spec**: `specs/0001-book-structure/spec.md`
**Plan**: `specs/0001-book-structure/plan.md`

---

## Overview

This tasks.md organizes implementation work into **4 phases** covering **4 user stories**. All tasks follow the checklist format and are independently testable.

- **Phase 1**: Setup & Project Initialization (research foundations, Docusaurus scaffold)
- **Phase 2**: Foundational Infrastructure (templates, GitHub Actions, book skeleton)
- **Phase 3**: Content Structure & Analysis (module outlines, capstone integration)
- **Phase 4**: Content Delivery & Deployment (full content writing & GitHub Pages launch)

**Total Tasks**: 78 tasks across all phases
**Independent Test Criteria**: Each user story is independently testable before integration
**MVP Scope**: User Story 1 (Instructors) + Phase 1 & 2 setup = foundational book blueprint ready for content writing

---

## User Story Mapping

| Story | Title | Priority | Phase | Tasks |
|-------|-------|----------|-------|-------|
| **US1** | Instructors Plan Course Using Book Structure | P1 | Phase 3–4 | 18 tasks |
| **US2** | Students Navigate Book to Find Relevant Content | P1 | Phase 3–4 | 16 tasks |
| **US3** | Developers Build Docusaurus Site from Specification | P1 | Phase 2–3 | 22 tasks |
| **US4** | Content Authors Write Detailed Lessons | P2 | Phase 4+ | 8 tasks (deferred to iteration 2) |

---

## Phase 1: Setup & Project Initialization (Research Foundations)

**Objective**: Establish research artifacts, citation framework, and technical foundations

**Deliverables**: research.md, citation framework, hardware specs validation

**Duration**: Weeks 1–2 (concurrent with Phase 2)

### Research & Foundations

- [ ] T001 Research ROS 2 Humble vs. Iron distributions and create comparison memo in `specs/0001-book-structure/research.md`
- [ ] T002 Validate Gazebo 7+ integration with ROS 2 Humble against official documentation
- [ ] T003 Research NVIDIA Isaac Sim latest version and ROS 2 bridge capabilities, document findings in `research.md`
- [ ] T004 [P] Gather official documentation links for ROS 2, Gazebo, Unity, Isaac Sim, Jetson and create curated `docs/references/official-docs.md`
- [ ] T005 [P] Create glossary draft with robotics/AI terminology in `specs/0001-book-structure/glossary-draft.md`
- [ ] T006 Define APA citation format template and create example citations for `specs/0001-book-structure/citation-framework.md`
- [ ] T007 Validate Jetson Orin specifications against hardware matrix in `specs/0001-book-structure/hardware-specs.md`
- [ ] T008 Create research summary with ≥50 findings/decisions documenting all decisions in `specs/0001-book-structure/research.md`
- [ ] T009 Compile all NEEDS CLARIFICATION resolution notes in `specs/0001-book-structure/clarifications-resolved.md`

---

## Phase 2: Foundation & Architecture (Docusaurus Setup & Templates)

**Objective**: Create Docusaurus project structure, templates, and GitHub Actions workflow

**Deliverables**: Docusaurus project, sidebars.js, chapter template, GitHub Actions workflow

**Duration**: Weeks 3–4 (can start in parallel with Phase 1)

### Docusaurus Project Initialization

- [ ] T010 Initialize Docusaurus 3.x project in `docs/` directory with `npm create docusaurus@latest`
- [ ] T011 Create `docs/docusaurus.config.js` with site metadata (title, URL, GitHub Pages settings)
- [ ] T012 Create `docs/package.json` with dependencies (Docusaurus, Node 18+, markdownlint)
- [ ] T013 [P] Create root directory structure per architecture: `docs/module-1-ros2/`, `docs/module-2-simulation/`, `docs/module-3-isaac/`, `docs/module-4-vla/`, `docs/capstone/`, `docs/hardware-setup/`, `docs/references/`, `docs/troubleshooting/`

### Sidebar Navigation & Section Metadata

- [ ] T014 Create `docs/sidebars.js` with full navigation tree (all 13 weeks, 4 modules, capstone, appendices)
- [ ] T015 [P] Create `docs/module-1-ros2/_category_.json` with Module 1 metadata (label, position)
- [ ] T016 [P] Create `docs/module-2-simulation/_category_.json` with Module 2 metadata
- [ ] T017 [P] Create `docs/module-3-isaac/_category_.json` with Module 3 metadata
- [ ] T018 [P] Create `docs/module-4-vla/_category_.json` with Module 4 metadata
- [ ] T019 [P] Create `docs/capstone/_category_.json`, `docs/hardware-setup/_category_.json`, `docs/references/_category_.json`, `docs/troubleshooting/_category_.json`

### Chapter Template & Style Guide

- [ ] T020 Create `docs/.templates/chapter-template.md` with standard format (intro → concepts → examples → exercises → references)
- [ ] T021 Create `docs/.templates/hardware-callout-template.md` with Jetson, robot, and cloud variant patterns
- [ ] T022 Create `docs/.templates/lab-activity-template.md` with objective, prerequisites, hardware, steps, validation sections
- [ ] T023 Create `specs/0001-book-structure/style-guide.md` documenting formatting rules, code blocks, figures, citations

### GitHub Actions CI/CD Workflow

- [ ] T024 Create `.github/workflows/build-deploy.yml` with Docusaurus build, lint, and deploy steps
- [ ] T025 [P] Configure Node.js setup in workflow (Node 18+)
- [ ] T026 [P] Add Markdown linting step (`markdownlint`) to workflow
- [ ] T027 [P] Add Docusaurus build step (`npm run build`) to workflow
- [ ] T028 [P] Add GitHub Pages deployment step to workflow
- [ ] T029 Configure branch protection rules to require workflow checks pass before merging

### Local Build & Initial Deployment

- [ ] T030 Test local build: `npm run build` in `docs/` directory and verify no errors
- [ ] T031 Test local preview: `npm run serve` and verify sidebar navigation renders correctly
- [ ] T032 Deploy initial scaffolding to GitHub Pages and verify site is accessible at GitHub Pages URL
- [ ] T033 Create `docs/intro.md` (introduction page) with welcome, learning path diagram, audience, prerequisites

---

## Phase 3: Content Architecture & Analysis (Detailed Outlines & Integration)

**Objective**: Define detailed structure for each module/week, create capstone diagram, map hardware callouts

**Deliverables**: Module overviews, week outlines, capstone diagram, lab placeholders

**Duration**: Weeks 5–6

### Module 1: ROS 2 & Robotics Foundations (Weeks 1–2)

- [ ] T034 [P] [US1] [US2] Create `docs/module-1-ros2/00-overview.md` with Module 1 summary (3–5 paragraphs), learning outcomes, prerequisites, hardware considerations, time estimate
- [ ] T035 [P] [US1] [US2] Create `docs/module-1-ros2/01-ros2-fundamentals.md` (Week 1) with week objectives, conceptual overview, lab flow, hardware callouts, key takeaways
- [ ] T036 [P] [US1] [US2] Create `docs/module-1-ros2/02-robotics-basics.md` (Week 2) with week objectives, conceptual overview, lab flow, hardware callouts, key takeaways
- [ ] T037 [P] [US3] Create `docs/module-1-ros2/labs/00-overview.md` with lab activity structure (headers only: Lab 1 Setup ROS 2, Lab 2 URDF Manipulation)

### Module 2: Gazebo & Unity Digital Twin Simulation (Weeks 3–6)

- [ ] T038 [P] [US1] [US2] Create `docs/module-2-simulation/00-overview.md` with Module 2 summary (3–5 paragraphs), learning outcomes, prerequisites, hardware considerations
- [ ] T039 [P] [US1] [US2] Create `docs/module-2-simulation/03-gazebo-fundamentals.md` (Week 3) overview, lab flow, callouts, takeaways
- [ ] T040 [P] [US1] [US2] Create `docs/module-2-simulation/04-gazebo-physics.md` (Week 4) overview, lab flow, callouts, takeaways
- [ ] T041 [P] [US1] [US2] Create `docs/module-2-simulation/05-unity-basics.md` (Week 5) overview, lab flow, callouts, takeaways
- [ ] T042 [P] [US1] [US2] Create `docs/module-2-simulation/06-hybrid-simulation.md` (Week 6) overview, lab flow, callouts, takeaways
- [ ] T043 [P] [US3] Create `docs/module-2-simulation/labs/00-overview.md` with lab placeholder headers

### Module 3: NVIDIA Isaac & Advanced Perception (Weeks 7–10)

- [ ] T044 [P] [US1] [US2] Create `docs/module-3-isaac/00-overview.md` with Module 3 summary (3–5 paragraphs), learning outcomes, prerequisites
- [ ] T045 [P] [US1] [US2] Create `docs/module-3-isaac/07-isaac-fundamentals.md` (Week 7) overview, lab flow, callouts, takeaways
- [ ] T046 [P] [US1] [US2] Create `docs/module-3-isaac/08-perception-vision.md` (Week 8) overview, lab flow, callouts, takeaways
- [ ] T047 [P] [US1] [US2] Create `docs/module-3-isaac/09-advanced-perception.md` (Week 9) overview, lab flow, callouts, takeaways
- [ ] T048 [P] [US1] [US2] Create `docs/module-3-isaac/10-isaac-ros2-jetson.md` (Week 10) overview, lab flow, callouts, takeaways
- [ ] T049 [P] [US3] Create `docs/module-3-isaac/labs/00-overview.md` with lab placeholder headers

### Module 4: Vision-Language-Action Systems (Weeks 11–13)

- [ ] T050 [P] [US1] [US2] Create `docs/module-4-vla/00-overview.md` with Module 4 summary (3–5 paragraphs), learning outcomes, prerequisites
- [ ] T051 [P] [US1] [US2] Create `docs/module-4-vla/11-vla-foundations.md` (Week 11) overview, lab flow, callouts, takeaways
- [ ] T052 [P] [US1] [US2] Create `docs/module-4-vla/12-multimodal-sensing.md` (Week 12) overview, lab flow, callouts, takeaways
- [ ] T053 [P] [US1] [US2] Create `docs/module-4-vla/13-capstone-integration.md` (Week 13) overview, lab flow, callouts, takeaways
- [ ] T054 [P] [US3] Create `docs/module-4-vla/labs/00-overview.md` with lab placeholder headers

### Capstone Project Structure

- [ ] T055 [P] [US1] [US2] Create `docs/capstone/00-overview.md` with capstone overview (1–2 pages), pipeline architecture diagram, module integration points, hardware requirements, learning outcomes
- [ ] T056 [P] [US1] [US2] Create `docs/capstone/01-stage-voice.md` (Stage 1: Voice) with concepts, module integration (Module 4), lab flow, hardware callouts
- [ ] T057 [P] [US1] [US2] Create `docs/capstone/02-stage-planning.md` (Stage 2: Planning) with concepts, module integration (Modules 1 & 4), lab flow, hardware callouts
- [ ] T058 [P] [US1] [US2] Create `docs/capstone/03-stage-navigation.md` (Stage 3: Navigation) with concepts, module integration (Modules 1 & 3), lab flow, hardware callouts
- [ ] T059 [P] [US1] [US2] Create `docs/capstone/04-stage-perception.md` (Stage 4: Perception) with concepts, module integration (Module 3), lab flow, hardware callouts
- [ ] T060 [P] [US1] [US2] Create `docs/capstone/05-stage-manipulation.md` (Stage 5: Manipulation) with concepts, module integration (Modules 1 & 3), lab flow, hardware callouts
- [ ] T061 [P] [US3] Create `docs/capstone/integration/00-full-pipeline.md` with end-to-end pipeline assembly overview and testing checklist

### Appendices

- [ ] T062 [P] [US3] Create `docs/hardware-setup/00-overview.md` with hardware variant introduction
- [ ] T063 [P] [US3] Create `docs/hardware-setup/workstation-setup.md` with workstation OS, dependencies, Docusaurus preview instructions
- [ ] T064 [P] [US3] Create `docs/hardware-setup/jetson-deployment.md` with Jetson Orin-specific versions, CUDA, cuDNN guidance
- [ ] T065 [P] [US3] Create `docs/hardware-setup/humanoid-robots.md` with humanoid model support, connectivity notes
- [ ] T066 [P] [US3] Create `docs/hardware-setup/cloud-lab-variant.md` with AWS/GCP/Azure options overview
- [ ] T067 [P] [US3] Create `docs/references/official-docs.md` with official documentation links (with version notes)
- [ ] T068 [P] [US3] Create `docs/references/api-reference.md` with ROS 2, Gazebo, Isaac, Jetson API summary
- [ ] T069 [P] [US3] Create `docs/references/glossary.md` with robotics/AI term definitions
- [ ] T070 [P] [US3] Create `docs/troubleshooting/common-issues.md` with common setup/build problems and solutions

### Integration & Dependencies Mapping

- [ ] T071 [US1] Create `specs/0001-book-structure/content-dependencies.md` documenting cross-module dependencies (Module 2 assumes Module 1, Module 3 assumes Modules 1–2, Module 4 assumes Modules 1–3, Capstone integrates all)
- [ ] T072 [US1] Create `specs/0001-book-structure/hardware-callout-map.md` listing where each hardware variant callout appears (Jetson in weeks, robot considerations, cloud alternatives)
- [ ] T073 [US3] Validate `docs/sidebars.js` references all created pages and render locally without errors

---

## Phase 4: Content Delivery & Deployment (Writing & Launch)

**Objective**: Write full content for all modules, validate, deploy to GitHub Pages

**Duration**: Weeks 7–13+

### Writing Content per Module (Parallel Execution per Story)

**User Story 1 Tasks: Instructors Plan Course**

- [ ] T074 [US1] Write full content for Module 1 overview (3–5 paragraphs) with learning outcomes, skills, hardware considerations in `docs/module-1-ros2/00-overview.md`
- [ ] T075 [US1] Write full content for Module 2 overview in `docs/module-2-simulation/00-overview.md`
- [ ] T076 [US1] Write full content for Module 3 overview in `docs/module-3-isaac/00-overview.md`
- [ ] T077 [US1] Write full content for Module 4 overview in `docs/module-4-vla/00-overview.md`
- [ ] T078 [US1] Write capstone overview page (1–2 pages) with full pipeline architecture and module integration points in `docs/capstone/00-overview.md`

**User Story 2 Tasks: Students Navigate Book**

- [ ] T079 [US2] Write full week content for Weeks 1–2 in `docs/module-1-ros2/01-*.md` and `02-*.md` with conceptual explanations, lab flows, hardware callouts, takeaways
- [ ] T080 [US2] Write full week content for Weeks 3–6 in `docs/module-2-simulation/*.md`
- [ ] T081 [US2] Write full week content for Weeks 7–10 in `docs/module-3-isaac/*.md`
- [ ] T082 [US2] Write full week content for Weeks 11–13 in `docs/module-4-vla/*.md`
- [ ] T083 [US2] Write capstone stage content (5 stages) in `docs/capstone/01-*.md` through `05-*.md` with concepts, module integration, lab flows

**User Story 3 Tasks: Developers Build Docusaurus Site**

- [ ] T084 [US3] Create appendix content for hardware setup in `docs/hardware-setup/*.md` (workstation, Jetson, robots, cloud)
- [ ] T085 [US3] Create appendix content for references in `docs/references/*.md` (official docs, API reference, glossary)
- [ ] T086 [US3] Create troubleshooting content in `docs/troubleshooting/*.md` (ROS 2 FAQs, simulation setup, Isaac Sim, VLA debugging, GitHub Pages issues)

### Validation & Consistency Checks

- [ ] T087 Consistency check: All terminology uses canonical glossary terms from `docs/references/glossary.md` (e.g., "ROS 2 node" not "ros2 process")
- [ ] T088 Accuracy check: Verify all technical claims against official documentation (ROS 2 Humble, Gazebo 7+, Isaac Sim latest, Jetson Orin)
- [ ] T089 Cross-module dependency validation: Week 3 content assumes Module 1 completion, Week 7 assumes Modules 1–2, Week 11 assumes Modules 1–3
- [ ] T090 Capstone coherence check: All 5 stages have inputs/outputs defined, integration points clear, modules referenced

### Build & Deployment

- [ ] T091 Markdown linting: Run `markdownlint` on all `.md` files and fix errors in `docs/`
- [ ] T092 Local build validation: `npm run build` in `docs/` succeeds without errors or warnings
- [ ] T093 Link validation (local): Check for broken internal links in generated static site
- [ ] T094 GitHub Actions workflow validation: Push to `0001-book-structure` branch and verify GitHub Actions workflow passes
- [ ] T095 GitHub Pages deployment: Verify live site is accessible at GitHub Pages URL (https://username.github.io/Physical-AI-Humanoid-Robotics/)
- [ ] T096 Live site checks: Test site responsiveness (mobile, tablet, desktop), search functionality, sidebar navigation, accessibility score ≥ 85

### Post-Launch

- [ ] T097 Health check monitoring: Setup automated checks for site availability and link validity (GitHub Actions scheduled task)
- [ ] T098 Issue tracking setup: Create GitHub issues template for errata, updates, and maintenance tasks

---

## Independent Test Criteria by User Story

### User Story 1: Instructors Plan Course (P1)

**Independent Test**: ✅ Can independently verify without US2, US3, US4
1. All 4 module overviews written (3–5 paragraphs each)
2. All module overviews describe learning outcomes, skills, hardware considerations
3. Capstone overview written (1–2 pages) with pipeline architecture and module integration
4. Content structure clear: modules → weeks → capstone stages
5. Hardware callouts placed in all module/week content
6. **Acceptance**: Instructor reads TOC and module pages, can identify all 4 modules, learning arc, week-to-module mapping, capstone integration within 5 minutes

### User Story 2: Students Navigate Book (P1)

**Independent Test**: ✅ Can independently verify without US1, US3, US4
1. All 13 weeks have content pages with objectives, overviews, lab flows
2. Weekly pages show which module they belong to (e.g., "Week 7 – Module 3: Isaac")
3. Module prerequisites clearly stated (e.g., "Assumes Module 1 mastery")
4. Capstone stages clearly linked to contributing modules
5. Hardware callouts (Jetson, robot, cloud) embedded in relevant weeks
6. **Acceptance**: Student in Week 7 navigates to content, identifies Module 3, sees prerequisites and next steps; capstone reader sees all 5 stages and module integration

### User Story 3: Developers Build Docusaurus Site (P1)

**Independent Test**: ✅ Can independently verify without US1, US2, US4
1. Docusaurus project initializes and builds without errors
2. sidebars.js correctly references all pages and renders in sidebar
3. Folder structure matches specification (module-X/, capstone/, hardware-setup/, references/, troubleshooting/)
4. GitHub Actions workflow passes and deploys to GitHub Pages
5. Live site accessible with working navigation (no 404s)
6. All pages load and render correctly (mobile-responsive)
7. **Acceptance**: Developer clones repo, runs `npm run build`, site deploys to GitHub Pages, all links work, sidebar navigation functional

### User Story 4: Content Authors Write Detailed Lessons (P2)

**Independent Test**: ✅ Deferred to iteration 2; depends on US1–US3 structure
- **Note**: US4 is dependent on US1–US3 (structure must exist before detailed content can be written)
- **Acceptance Criteria**: Available in iteration 2 specification

---

## Dependency Graph & Parallel Execution

### Execution Order (Critical Path)

```
Phase 1 (Research, Weeks 1–2)
  ├─ T001–T009: Research tasks
  └─ Can run in parallel with Phase 2

Phase 2 (Setup, Weeks 3–4)
  ├─ T010–T013: Docusaurus initialization [depends on Phase 1 research]
  ├─ T014–T019: Sidebar & metadata [parallel, independent]
  ├─ T020–T023: Templates [parallel, independent]
  ├─ T024–T029: GitHub Actions [parallel, independent]
  └─ T030–T033: Local build & deploy [depends on T010–T029]

Phase 3 (Content Structure, Weeks 5–6)
  ├─ T034–T070: Module overviews & week pages [parallel, independent per module]
  ├─ T071–T073: Integration & dependencies [depends on T034–T070]

Phase 4 (Writing & Deployment, Weeks 7–13+)
  ├─ T074–T086: Content writing [parallel per user story]
  │   ├─ T074–T078 [US1]: Instructor-focused content
  │   ├─ T079–T083 [US2]: Student-focused content
  │   └─ T084–T086 [US3]: Developer/appendix content
  ├─ T087–T090: Validation checks [depends on T074–T086]
  ├─ T091–T098: Build, deploy, monitoring [depends on T087–T090]
```

### Parallel Opportunities

**In Phase 2** (Setup):
- T014–T019 (Sidebar & metadata) can run in parallel
- T020–T023 (Templates) can run in parallel
- T024–T029 (GitHub Actions) can run in parallel

**In Phase 3** (Content Structure):
- T034–T070 (Module overviews & week pages) can be divided by module and run in parallel:
  - Developer 1: Module 1 (T034–T037)
  - Developer 2: Module 2 (T038–T043)
  - Developer 3: Module 3 (T044–T049)
  - Developer 4: Module 4 (T050–T054)
  - Developer 5: Capstone + Appendices (T055–T070)

**In Phase 4** (Writing & Deployment):
- T074–T086 (Content writing) can be divided by user story:
  - Team 1 [US1]: Module overviews, capstone overview (T074–T078)
  - Team 2 [US2]: Week content, capstone stages (T079–T083)
  - Team 3 [US3]: Appendices (T084–T086)

---

## MVP Scope

**Minimum Viable Product** (ready for iteration 2):

1. **Phase 1 Complete**: Research artifacts, citation framework, hardware specs validated
2. **Phase 2 Complete**: Docusaurus project live on GitHub Pages with working build pipeline
3. **Phase 3 Complete**: All module overviews (3–5 paragraphs) and week pages (headers + 1–2 paragraph overviews) with hardware callouts
4. **Phase 4 Partial**: Capstone overview and stage pages written; appendices placeholder structure in place

**MVP Deliverables**:
- High-level book structure visible in live Docusaurus site
- All 13 weeks mapped and accessible
- 4 modules clearly organized with learning outcomes
- 5 capstone stages with integration points defined
- Hardware variants documented (workstation, Jetson, robots, cloud)
- GitHub Pages live and automated deployment working

**MVP Value**: Instructors can plan courses, students can navigate structure, developers have working framework, content authors can begin iteration 2 detailed writing

---

## Success Metrics & Acceptance

### Phase 1 Success (Weeks 1–2)
- [ ] research.md completed with ≥50 findings/decisions
- [ ] All NEEDS CLARIFICATION resolved
- [ ] Citation framework established with APA examples
- [ ] Hardware specs validated and documented

### Phase 2 Success (Weeks 3–4)
- [ ] Docusaurus builds without errors (`npm run build` succeeds)
- [ ] GitHub Pages live and accessible
- [ ] Sidebar navigation complete and functional in local preview
- [ ] Chapter template documented and examples provided
- [ ] GitHub Actions workflow passes and deploys successfully

### Phase 3 Success (Weeks 5–6)
- [ ] All 4 module overviews written (3–5 paragraphs each)
- [ ] All 13 weeks have page structure with objectives and overviews
- [ ] Capstone pipeline defined with 5 stages and module integration
- [ ] Hardware callouts placed and consistent across modules
- [ ] Dependencies between modules explicitly documented

### Phase 4 Success (Weeks 7–13+)
- [ ] All weeks have full conceptual content (1–3 pages each)
- [ ] All labs have conceptual diagrams and flows (no detailed procedures)
- [ ] All hardware callouts placed consistently
- [ ] All external claims have citations
- [ ] Docusaurus build passes with no errors or warnings
- [ ] Link validation passes (no 404s, internal links all work)
- [ ] GitHub Pages site live, fully responsive, Lighthouse score ≥ 80
- [ ] Monitoring and maintenance plan in place

---

## Notes

- **Tests Are Optional**: No automated tests requested in spec; focus on manual validation and consistency checks
- **Iteration 2**: Detailed lesson content, step-by-step lab procedures, code examples, and 30% hands-on material all deferred
- **Parallel Execution**: Teams can work on modules independently; merge in Phase 4
- **PHR Recording**: Create weekly PHRs during Phases 1–4 to track progress and capture decisions
- **Constitution Alignment**: All tasks comply with 5 core principles, 5 key standards, and 5 constraints from constitution

---

## References

- **Constitution**: `.specify/memory/constitution.md`
- **Specification**: `specs/0001-book-structure/spec.md`
- **Plan**: `specs/0001-book-structure/plan.md`
- **Official Docs**: ROS 2 (docs.ros.org), Gazebo (gazebosim.org), NVIDIA Isaac (docs.nvidia.com), Jetson (docs.nvidia.com/jetson)
