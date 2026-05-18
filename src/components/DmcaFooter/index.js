import React from 'react';
import styles from './styles.module.css';

export default function DmcaFooter() {
  return (
    <section
      className={styles.dmcaFooter}
      id="copyright-notice"
      aria-labelledby="copyright-notice-title">
      <div className={styles.dmcaInner}>
        <div className={styles.dmcaHeader}>
          <svg
            className={styles.dmcaIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span className={styles.dmcaTitle} id="copyright-notice-title">
            Copyright & Infringement Notice
          </span>
        </div>

        <div className={styles.dmcaBody}>
          <p>
            KeepShare is a non-profit, open-source project maintained by independent contributors.
            It is not a company or commercial entity and has no commercial operations.
          </p>
          <p>
            <strong>
              KeepShare does not host, store, or distribute any files or copyrighted content.
            </strong>{' '}
            It operates solely as a link-conversion tool: it accepts user-provided links (DDL,
            Magnet, Ed2K, etc.) and generates corresponding links for third-party hosting services.
            KeepShare has no access to, or control over, the underlying materials referenced by
            those links.
          </p>
          <p>
            If you believe content accessible via a third-party platform infringes your rights,
            please direct your takedown request to the relevant hosting or distribution service.
            KeepShare does not have the technical ability to remove or disable content on external
            platforms.
          </p>
          <p>
            For general inquiries regarding copyright concerns, you may contact us at the address
            below. We appreciate your understanding.
          </p>
        </div>

        <div className={styles.dmcaEmailRow}>
          <span className={styles.dmcaEmailLabel}>Contact</span>
          <a className={styles.dmcaEmailLink} href="mailto:keepshare.org@gmail.com">
            keepshare.org@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
