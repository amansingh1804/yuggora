import React from 'react';
import { PageType } from '../types';
import { RidgelineDitherFooter } from './RidgelineDitherFooter';

interface FooterProps {
  onNavigate: (page: PageType, hash?: string) => void;
  onOpenTalkModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenTalkModal }) => {
  return (
    <RidgelineDitherFooter
      name="YUGGORA"
      logo={
        <img
          src="/yuggora-logo.png"
          alt="Yuggora Logo"
          className="w-7 h-7 object-contain inline-block"
        />
      }
      onBrandClick={() => onNavigate('home')}
      subTagline="Startup Infrastructure & Growth Partner"
      tagline="Build the company. Not just the product. We help growing startups build the people, revenue, operations, and growth infrastructure required to scale."
      preset="night"
      seed={19}
      ridges={6}
      pixel={2}
      mist={0.8}
      drift={1}
      height="660px"
      maxWidth="1536px"
      columns={[
        {
          title: "Navigation",
          links: [
            { label: "Home", onClick: () => onNavigate('home') },
            { label: "What We Build", onClick: () => onNavigate('what-we-build') },
            { label: "How We Work", onClick: () => onNavigate('about-how-we-work', 'how-we-work') },
          ],
        },
        {
          title: "Engines",
          links: [
            { label: "People Architecture", onClick: () => onNavigate('what-we-build') },
            { label: "Revenue Engine", onClick: () => onNavigate('what-we-build') },
            { label: "Operating SOPs", onClick: () => onNavigate('what-we-build') },
            { label: "Growth Flywheel", onClick: () => onNavigate('what-we-build') },
          ],
        },
        {
          title: "Partnership",
          links: [
            { label: "Talk to Yuggora", badge: "Direct", onClick: onOpenTalkModal },
            { label: "Founder Alignment", onClick: () => onNavigate('about-how-we-work', 'about') },
            { label: "Stage Assessment", onClick: onOpenTalkModal },
          ],
        },
      ]}
      socials={[
        { icon: "mail", label: "Email Yuggora", href: "mailto:yuggoraofficial@gmail.com" },
        { icon: "linkedin", href: "https://linkedin.com" },
        { icon: "x", href: "https://x.com" },
      ]}
      copyright={`© ${new Date().getFullYear()} YUGGORA. All rights reserved.`}
    />
  );
};
