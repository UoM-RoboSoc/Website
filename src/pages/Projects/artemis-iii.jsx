import ProjectPage from '@site/src/components/ProjectPage';
import { projects } from '@site/src/data';
import AboutPage from '@site/src/data/artemis-iii/about.mdx';

export default function Artemisiii() {

  const project = projects.find(obj => {
    return obj.id === 'artemis-iii'
  })

  return (
    <ProjectPage aboutPage={AboutPage} {...project}/>
  );
}
