/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Link from "next/link";
import styles from "./speakers-grid.module.css";

export default function SpeakersGrid({ speakers }) {
  return (
    <div className={styles.grid}>
      {speakers?.map(({ data, uid }, index) => (
        <Link key={data.name} href={`/speakers/${uid}`}>
          <a role="button" tabIndex={0} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={data.image.url}
                alt={data.name}
                loading="lazy"
                width={300}
                height={300}
              />
            </div>
            <div className={styles.cardBody}>
              <div>
                <h2 className={styles.name}>{data.name}</h2>
                <p className={styles.tagline}>{data.title}</p>
                <p className={styles.index}>{`0${index + 1}`}</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
