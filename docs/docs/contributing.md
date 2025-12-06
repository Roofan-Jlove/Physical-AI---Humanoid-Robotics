---
sidebar_position: 1.9
---

# Contributing Guide for Developers

Thank you for your interest in contributing to the Physical AI & Humanoid Robotics curriculum! This guide explains how to set up the development environment, contribute content, and maintain quality standards.

## Development Setup

### Prerequisites

- Git and GitHub account
- Node.js 18+ (verify: `node --version`)
- npm (verify: `npm --version`)
- Text editor or IDE (VS Code recommended)
- Basic familiarity with Markdown and Git

### Clone the Repository

```bash
git clone https://github.com/your-username/Physical-AI-&-Humanoid-Robotics.git
cd Physical-AI-&-Humanoid-Robotics
```

### Install Dependencies

```bash
cd docs
npm install
```

### Build and Preview Locally

```bash
# Build the site
npm run build

# Preview locally
npm run serve

# Open browser: http://localhost:3000
```

---

## Repository Structure

```
Physical-AI-&-Humanoid-Robotics/
├── .github/workflows/          # GitHub Actions CI/CD
├── .specify/                   # Spec-Kit Plus templates
├── docs/                       # Docusaurus site
│   ├── docs/                   # Curriculum content
│   │   ├── module-1-ros2/
│   │   ├── module-2-simulation/
│   │   ├── module-3-isaac/
│   │   ├── module-4-vla/
│   │   ├── capstone/
│   │   ├── hardware-setup/
│   │   ├── references/
│   │   └── troubleshooting/
│   ├── src/css/                # Custom styling
│   ├── static/                 # Images, assets
│   ├── docusaurus.config.js    # Site configuration
│   ├── sidebars.js             # Navigation structure
│   └── package.json            # Dependencies
├── specs/                      # Feature specifications
├── history/prompts/            # Prompt History Records
└── README.md
```

---

## Contributing Content

### 1. Create a Branch

```bash
git checkout -b feature/module-x-week-y
# or
git checkout -b fix/typo-in-week-1
```

### 2. Edit or Create Markdown Files

All content lives in `docs/docs/`.

**File naming**: `week-1-intro.md`, `overview.md`, `glossary.md`

**Front matter** (required for all pages):
```yaml
---
sidebar_position: 2
---

# Page Title
```

### 3. Follow Content Standards

**Structure**:
- Learning objectives (checklist format)
- Main content (3-5 sections)
- Code examples (copy-paste ready)
- Hands-on exercises
- References (links to official docs)

**Markdown Style**:
- Use `##` for main sections, `###` for subsections
- Code blocks: triple backticks with language tag
- Lists: Use `- ` for bullets, `1. ` for numbered
- Emphasis: `**bold**`, `*italic*`

**Example**:
```markdown
---
sidebar_position: 2
---

# Week 1: Title

## Overview
Brief description...

## Learning Objectives

- [ ] Objective 1
- [ ] Objective 2

## Part 1: Concept

Explanation...

### Code Example
\`\`\`python
# Python code
\`\`\`

## Exercises

1. Exercise 1
2. Exercise 2

## References

- Official Docs: https://...
```

### 4. Test Locally

```bash
npm run build
npm run serve

# Check:
# - Page renders correctly
# - Links work
# - Code examples display properly
# - No console errors
```

### 5. Commit Changes

```bash
git add docs/docs/...
git commit -m "Add Week 1 content"
```

### 6. Push and Create Pull Request

```bash
git push origin feature/module-x-week-y

# Create PR on GitHub with description:
# - What was added/changed
# - Why (motivation)
# - Testing performed
```

---

## Code Examples Standard

All code examples must:

1. **Be Syntactically Valid**: Should run without modification
2. **Include Comments**: Explain non-obvious lines
3. **Be Minimal**: Focus on learning concept, not production-ready
4. **Have Output Example**: Show expected terminal output

**Example Template**:
```python
# Description of what this does
import rclpy

# Create node
node = rclpy.create_node('my_node')

# Expected output:
# [INFO] Node created successfully
```

---

## Adding References and Citations

Use **APA format** for all references:

**Website**:
```
Organization. (Year, Month). Title. Retrieved from URL
```

**Journal Article**:
```
Author, A., & Author, B. (Year). Title. Journal, volume(issue), pages.
```

Place references at the end of each week in a `## References` section:

```markdown
## References

- ROS 2 Humble Documentation: https://docs.ros.org/en/humble/
- Smith, J. (2023). Advanced robotics. IEEE Robotics, 45(3), 234-251.
```

---

## Quality Checks

Before submitting a PR, verify:

- [ ] Markdown lints without errors (`markdownlint`)
- [ ] Docusaurus builds: `npm run build`
- [ ] No broken links (Docusaurus checks automatically)
- [ ] Code examples are valid Python/YAML
- [ ] Content aligns with constitutional principles:
  - ✓ Technical accuracy (official docs)
  - ✓ Clarity (explain for beginners)
  - ✓ Consistency (match existing style)
  - ✓ Practicality (real-world applicable)
  - ✓ Traceability (cite sources)

---

## Site Deployment

### Automatic Deployment

The GitHub Actions workflow (`.github/workflows/build-deploy.yml`) automatically:

1. Builds the Docusaurus site on every push to `main`
2. Runs markdown linting
3. Deploys to GitHub Pages

**Push to deploy** (no manual steps needed):
```bash
git push origin main
```

### Manual Local Build

```bash
cd docs
npm run build

# Output: docs/build/ (ready to deploy)
```

---

## Customization

### Add a New Module

1. Create directory: `docs/docs/module-n-topic/`
2. Add `_category_.json`:
```json
{
  "label": "Module N: Topic",
  "position": X,
  "link": {
    "type": "generated-index",
    "description": "Module description"
  }
}
```

3. Create `overview.md` and week files
4. Add to `sidebars.js`
5. Build and test

### Customize Styling

Edit `docs/src/css/custom.css` for colors, fonts, etc.

---

## Troubleshooting Development

**Issue**: `npm run build` fails

```bash
rm -rf docs/node_modules docs/package-lock.json
cd docs && npm install
npm run build
```

**Issue**: Changes not appearing locally

```bash
npm run clear
npm run build
npm run serve
```

**Issue**: Port 3000 already in use

```bash
npm run serve -- --port 3001
```

---

## Contributor License Agreement

By contributing, you agree that your contributions are licensed under the same license as this project (CC-BY-SA 4.0).

---

## Getting Help

- **Questions**: Create a GitHub Discussion or Issue
- **Technical Issues**: Check existing issues first
- **Style Guidance**: Review existing weeks for consistency

---

## Recognition

Contributors will be recognized in:
- GitHub repository contributors list
- CONTRIBUTORS.md file
- Curriculum footer

Thank you for making this curriculum better! 🚀

---

**Ready to contribute?**

1. Fork the repository
2. Create a feature branch
3. Make changes following this guide
4. Submit a pull request

**Questions?** Open an issue on GitHub.
