import { DEFAULT_METADATA } from '@/constants/metadata';

import DefaultPostHeroImage from '@/assets/images/default/default-post-hero-image.jpg';
import DefaultProjectHeroImage from '@/assets/images/default/default-project-hero-image.jpg';

export const BASE_FOLDERS = {
  POST: 'src/content/post',
  PROJECT: 'src/content/project',
} as const;

export const COLLECTIONS = {
  POST: 'post',
  PROJECT: 'project',
} as const;

/** technologies */
export const TAGS = [
  'next.js',
  'react',
  'astro',
  'node.js',
  'javascript',
  'css',
  'python',
  'devops',
  'docker',
  'self-hosting',
  'algorithms',
  'computer-science',
] as const;

/** adjust this later */
/** form of an article, no technologies */
export const CATEGORIES = [
  {
    name: 'shopify',
    label: 'Shopify 独立站',
    description: '从入门到精通的 Shopify 独立站运营与开发指南，包括主题开发、应用配置及营销策略。',
    icon: 'mdi:shopify',
  },
  {
    name: 'payment',
    label: '跨境收款',
    description: '全面解析跨境电商收款方案，涵盖 Stripe、PayPal 等主流支付网关申请与风控指南。',
    icon: 'mdi:credit-card-check-outline',
  },
  {
    name: 'website',
    label: '建站教程',
    description: '零基础建站教程，教你如何使用 WordPress、Astro 等技术栈搭建高性能的个人博客或企业官网。',
    icon: 'mdi:web',
  },
  {
    name: 'tutorials',
    label: '教程',
    description: '各类实用的技术开发与工具使用教程。',
    icon: 'mdi:teach',
  },
  {
    name: 'showcases',
    label: '案例展示',
    description: '精选的开发案例与项目展示。',
    icon: 'mdi:presentation',
  },
  {
    name: 'tools',
    label: '工具资源',
    description: '提高效率的开发者工具和资源推荐。',
    icon: 'mdi:tools',
  },
  {
    name: 'news',
    label: '资讯动态',
    description: '最新的行业资讯和技术动态。',
    icon: 'mdi:announcement-outline',
  },
] as const;

// use imported images here
export const DEFAULTS_POST = {
  TITLE: DEFAULT_METADATA.title,
  DESCRIPTION: DEFAULT_METADATA.description,
  NO_HERO: false,
  HERO_IMAGE: DefaultPostHeroImage,
  HERO_ALT: 'Hero image',
  DRAFT: false,
  CATEGORY: CATEGORIES[0].name,
  TOC: true,
} as const;

export const DEFAULTS_PROJECT = {
  TITLE: DEFAULT_METADATA.title,
  DESCRIPTION: DEFAULT_METADATA.description,
  NO_HERO: false,
  HERO_IMAGE: DefaultProjectHeroImage,
  HERO_ALT: 'Hero image',
  DRAFT: false,
  CATEGORY: CATEGORIES[0].name,
  TOC: true,
} as const;
