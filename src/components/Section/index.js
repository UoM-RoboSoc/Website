/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import styles from './styles.module.css';

function Section(props) {
  const { children } = props;
  return (
    <div className={styles.wrapper} {...props}>
      <div className={`container ${styles.container}`}>
        {children}
      </div>
    </div>
  );
}

export default Section;
