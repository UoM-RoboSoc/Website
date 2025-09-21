/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from 'clsx';
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { MdOpenInNew } from 'react-icons/md';

export default function ExternalLink(props) {
  return (
    <Link {...props}>
      <span className={styles.buttonText}>
        <MdOpenInNew className={styles.icon}/>
        {props.children}
      </span>
    </Link>
  );
}
