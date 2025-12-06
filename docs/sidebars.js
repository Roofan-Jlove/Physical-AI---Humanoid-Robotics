/**
 * Creating a sidebar enables you to:
 - create an organized menu of your docs
 - document versions of your project
 - provide next/previous navigation

 The sidebars can be generated from the file structure, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Module 1: ROS 2 Foundations',
      items: [
        {
          type: 'doc',
          id: 'module-1-ros2/overview',
          label: 'Module Overview',
        },
        {
          type: 'doc',
          id: 'module-1-ros2/week-1-intro',
          label: 'Week 1: ROS 2 Introduction',
        },
        {
          type: 'doc',
          id: 'module-1-ros2/week-2-nodes-topics',
          label: 'Week 2: Nodes, Topics & Services',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 2: Simulation & Digital Twins',
      items: [
        {
          type: 'doc',
          id: 'module-2-simulation/overview',
          label: 'Module Overview',
        },
        {
          type: 'doc',
          id: 'module-2-simulation/week-3-gazebo-basics',
          label: 'Week 3: Gazebo Basics',
        },
        {
          type: 'doc',
          id: 'module-2-simulation/week-4-urdf-sdf',
          label: 'Week 4: URDF & SDF',
        },
        {
          type: 'doc',
          id: 'module-2-simulation/week-5-unity-intro',
          label: 'Week 5: Unity Robotics (Optional)',
        },
        {
          type: 'doc',
          id: 'module-2-simulation/week-6-digital-twin',
          label: 'Week 6: Digital Twin Architecture',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 3: Advanced Perception',
      items: [
        {
          type: 'doc',
          id: 'module-3-isaac/overview',
          label: 'Module Overview',
        },
        {
          type: 'doc',
          id: 'module-3-isaac/week-7-isaac-basics',
          label: 'Week 7: Isaac Sim Basics',
        },
        {
          type: 'doc',
          id: 'module-3-isaac/week-8-ros2-bridge',
          label: 'Week 8: ROS 2 Bridge Integration',
        },
        {
          type: 'doc',
          id: 'module-3-isaac/week-9-vision-systems',
          label: 'Week 9: Vision Systems',
        },
        {
          type: 'doc',
          id: 'module-3-isaac/week-10-perception-pipeline',
          label: 'Week 10: Perception Pipeline',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action',
      items: [
        {
          type: 'doc',
          id: 'module-4-vla/overview',
          label: 'Module Overview',
        },
        {
          type: 'doc',
          id: 'module-4-vla/week-11-vla-foundations',
          label: 'Week 11: VLA Foundations',
        },
        {
          type: 'doc',
          id: 'module-4-vla/week-12-language-integration',
          label: 'Week 12: Language Integration',
        },
        {
          type: 'doc',
          id: 'module-4-vla/week-13-autonomous-workflows',
          label: 'Week 13: Autonomous Workflows',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Capstone Project',
      items: [
        {
          type: 'doc',
          id: 'capstone/overview',
          label: 'Capstone Overview',
        },
        {
          type: 'doc',
          id: 'capstone/stage-1-voice-input',
          label: 'Stage 1: Voice Input',
        },
        {
          type: 'doc',
          id: 'capstone/stage-2-planning',
          label: 'Stage 2: Planning',
        },
        {
          type: 'doc',
          id: 'capstone/stage-3-navigation',
          label: 'Stage 3: Navigation',
        },
        {
          type: 'doc',
          id: 'capstone/stage-4-perception',
          label: 'Stage 4: Perception',
        },
        {
          type: 'doc',
          id: 'capstone/stage-5-manipulation',
          label: 'Stage 5: Manipulation',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Hardware & Setup',
      items: [
        {
          type: 'doc',
          id: 'hardware-setup/overview',
          label: 'Hardware Overview',
        },
        {
          type: 'doc',
          id: 'hardware-setup/workstation-setup',
          label: 'Workstation Setup',
        },
        {
          type: 'doc',
          id: 'hardware-setup/jetson-setup',
          label: 'Jetson Orin Setup',
        },
        {
          type: 'doc',
          id: 'hardware-setup/humanoid-robots',
          label: 'Humanoid Robot Integration',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'References',
      items: [
        {
          type: 'doc',
          id: 'references/glossary',
          label: 'Glossary',
        },
        {
          type: 'doc',
          id: 'references/citations',
          label: 'Citations & Sources',
        },
        {
          type: 'doc',
          id: 'references/api-reference',
          label: 'API Reference',
        },
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        {
          type: 'doc',
          id: 'troubleshooting/common-issues',
          label: 'Common Issues',
        },
        {
          type: 'doc',
          id: 'troubleshooting/ros2-issues',
          label: 'ROS 2 Troubleshooting',
        },
        {
          type: 'doc',
          id: 'troubleshooting/gazebo-issues',
          label: 'Gazebo Troubleshooting',
        },
        {
          type: 'doc',
          id: 'troubleshooting/isaac-issues',
          label: 'Isaac Sim Troubleshooting',
        },
      ],
      collapsed: false,
    },
  ],
};

module.exports = sidebars;
