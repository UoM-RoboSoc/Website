/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

function Section(props) {
  const { children } = props;
  return (
    <div className={styles.wrapper} {...props}>
      <div className={clsx("container", styles.container)}>{children}</div>
    </div>
  );
}

export default Section;
