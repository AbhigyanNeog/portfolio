/**
 * =============================================================================
 * ABHIGYAN NEOG PORTFOLIO — CONTACT & SOCIAL CHANNELS DATA STORE
 * =============================================================================
 *
 * HOW TO EDIT YOUR CONTACT INFORMATION IN THE FUTURE:
 * -----------------------------------------------------------------------------
 * - Email: Change `email` to update your displayed and linked email address.
 * - Profiles: Change URLs in `profiles` for GitHub, LinkedIn, etc.
 * - Résumé: Set `resumePath` (defaults to 'assets/resume/resume.pdf').
 * - Form Options: Edit `inquiryTypes` to change options in the contact dropdown.
 *
 * =============================================================================
 */

(function () {
  'use strict';

  const CONTACT_DATA = {
    heading: "Let's build reliable, impactful software together.",
    subheading: 'Open to Software Engineering internship opportunities. Reach out via email or connect on LinkedIn and GitHub.',

    email: 'abhineog06@gmail.com',

    profiles: {
      github: {
        label: 'GitHub',
        handle: 'AbhigyanNeog',
        url: 'https://github.com/AbhigyanNeog'
      },
      linkedin: {
        label: 'LinkedIn',
        handle: 'abhigyan-neog-748796315',
        url: 'https://www.linkedin.com/in/abhigyan-neog-748796315/'
      }
    },

    resume: {
      label: 'Download Official Résumé (PDF) ↓',
      filename: 'resume.pdf',
      path: 'assets/resume/resume.pdf'
    },

    location: 'Bangalore, Karnataka, India',
    timezone: 'Asia/Kolkata (IST)',

    inquiryTypes: [
      { value: 'Internship Opportunity', label: 'Software Engineering Internship' },
      { value: 'Technical Collaboration', label: 'Technical Collaboration / Hackathon' },
      { value: 'General Inquiry', label: 'General Engineering Inquiry' }
    ]
  };

  if (typeof window !== 'undefined') {
    window.CONTACT_DATA = CONTACT_DATA;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONTACT_DATA };
  }

})();
