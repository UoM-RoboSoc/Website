import ProjectPage from '@site/src/components/ProjectPage';
import { projects } from '@site/src/data';
import AboutPage from '@site/src/data/arm/about.mdx';

export default function Arm() {

  const project = projects.find(obj => {
    return obj.id === 'arm'
  })

  return (
    <ProjectPage aboutPage={AboutPage} {...project}/>
  );
}
