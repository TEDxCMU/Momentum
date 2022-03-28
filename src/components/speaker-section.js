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
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./speaker-section.module.css";
import Modal from "./modal";

export default function SpeakerSection({ speaker }) {
  const router = useRouter();
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (!active) {
      router.push("/speakers");
    }
  }, [active]);

  return (
    <Modal active={active} setActive={setActive} large>
      <div className={styles.overlay}>
        <img
          className={styles.image}
          src={speaker.image.url}
          alt={speaker.image.alt}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{speaker.name}</h2>
        <h3 className={styles.tagline}>{speaker.title}</h3>
        <p className={styles.body}>{speaker.description}</p>
      </div>
    </Modal>
  );
}
