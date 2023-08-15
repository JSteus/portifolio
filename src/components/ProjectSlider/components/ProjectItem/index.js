import { useEffect, useState } from "react";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

import useWindowSize from "../../../../hooks/useWindowSize";
import styles from "./ProjectItem.module.scss";

export default function ProjectItem({ repo }) {
  const { width } = useWindowSize();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(width <= 768);
  }, [width]);

  return (
    <a
      className={styles.container}
      href={repo?.url}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src={repo.imgUrl}
        alt={repo.title}
        width={mobile ? 300 : 800}
        height={mobile ? 300 : 600}
      />
      <div className={styles.textContainer}>
        <h5>{repo.title}</h5>
        <h6>{repo.description}</h6>
        <div className={styles.iconsContainer}>
          <div className={styles.icon}>
            <FaGithub onClick={() => window.open(repo.gitUrl)} />
            <i>Source Code</i>
          </div>
          {!!repo.demoUrl && (
            <div className={styles.icon}>
              <FaRss onClick={() => window.open(repo.demoUrl)} />
              <i>Live Demo</i>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
