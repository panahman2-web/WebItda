// Fix: Import React to resolve namespace error
import React from 'react';

export type TabType = 'BERANDA' | 'PPID' | 'PENGADUAN';

export interface NavItem {
  id: TabType;
  label: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ActivityProps {
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
}