import ProjectPage from '@site/src/components/ProjectPage';
import { projects } from '@site/src/data';
import AboutPage from '@site/src/data/rfl-bw/about.mdx';

export default function RFL_BW() {

  const project = projects.find(obj => {
    return obj.id === 'rfl-bw'
  })

  return (
    <ProjectPage aboutPage={AboutPage} {...project}/>
  );
}
